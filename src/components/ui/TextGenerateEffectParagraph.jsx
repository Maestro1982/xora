import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "/src/lib/utils";

export const TextGenerateEffectParagraph = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.span ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-p5 text-lg opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };

  return (
    <span className={cn("font-bold", className)}>
      <span className="mt-4">
        <span className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </span>
      </span>
    </span>
  );
};
