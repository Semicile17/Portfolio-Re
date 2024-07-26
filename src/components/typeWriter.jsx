/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const Typewriter = ({ words }) => {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const type = () => {
      const currentWord = words[i];
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, j - 1));
        setJ(j - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI((prev) => (prev + 1 === words.length ? 0 : prev + 1));
        }
      } else {
        setCurrentText(currentWord.substring(0, j + 1));
        setJ(j + 1);
        if (j === currentWord.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      }

      // Check if it has completed typing and deleting all words
      if (!isDeleting && i === words.length - 1 && j === words[i].length) {
        setIsComplete(true);
      }
    };

    const timer = setTimeout(type, 100);

    return () => clearTimeout(timer);
  }, [i, j, isDeleting, isComplete, words]);

  return (
    <div className="p-2  flex flex-col justify-center items-center">

      <h1 className="text-2xl font-arcade text-primary">
        {currentText}
      </h1>
    </div>
  );
};

export default Typewriter;
