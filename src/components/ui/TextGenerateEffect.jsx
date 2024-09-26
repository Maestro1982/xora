import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import { cn } from "/src/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" "); // Split words into an array

  // Animation effect when component mounts
  useEffect(() => {
    // Animate all span elements (each word) in sequence
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none", // Blur filter effect
      },
      {
        duration: duration, // Control animation duration
        delay: stagger(0.2), // Stagger each word by 0.2s
      },
    );
  }, [scope, animate, duration, filter]); // Dependencies to ensure re-render on props change

  // Rendering the words
  const renderWords = () => {
    return (
      <motion.span ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="text-p5 h3 max-md:5h max-sm:6h opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none", // Initial blur before animation
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <span className={cn("font-bold", className)}>
      <span className="mt-4">
        <span className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </span>
      </span>
    </span>
  );
};
