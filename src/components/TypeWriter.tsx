import { motion } from 'framer-motion';

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
  showCursor?: boolean;
}

const TypeWriter = ({ text, className = '', delay = 0, showCursor = true }: TypeWriterProps) => {
  const characters = text.split('');
  const typingDuration = delay + characters.length * 0.05;

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.05,
            ease: 'easeIn',
          }}
        >
          {char}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{
            delay: typingDuration,
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            times: [0, 0.5, 0.5, 1],
          }}
        />
      )}
    </span>
  );
};

export default TypeWriter;
