import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  dataType: string[];
  dataPeriod: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  dataType,
  dataPeriod,
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % dataType.length;
      const fullText = dataType[i];

      setText((current) =>
        isDeleting
          ? fullText.substring(0, current.length - 1)
          : fullText.substring(0, current.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 70);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), dataPeriod);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer: ReturnType<typeof setTimeout> = setTimeout(
      handleTyping,
      typingSpeed
    );
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, dataType, dataPeriod]);

  return (
    <h1 className="typewriter font-semibold text-2xl">
      <span className="wrap">{text}</span>
    </h1>
  );
};
