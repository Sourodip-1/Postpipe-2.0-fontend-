
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordScrambleProps {
  text: string;
  className?: string;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function WordScramble({ text, className }: WordScrambleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = useCallback(() => {
    let pos = 0;
    setIsAnimating(true);

    const interval = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / 2 > index) {
            return char;
          }
          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * 2) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (isInView && !isAnimating) {
      scramble();
    }
  }, [isInView, isAnimating, scramble]);

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {displayText}
    </motion.div>
  );
}
