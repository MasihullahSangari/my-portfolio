import { motion } from 'framer-motion';

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypeWriter = ({ text, className = '', delay = 0 }: TypeWriterProps) => {
  const characters = text.split('');

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
    </span>
  );
};

export default TypeWriter;
