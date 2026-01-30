import { motion } from "framer-motion";

interface FloatingShapesProps {
  variant?: "hero" | "section";
}

const FloatingShapes = ({ variant = "hero" }: FloatingShapesProps) => {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl"
        />
        
        {/* GPS Pin shape */}
        <motion.svg
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-16 h-16 text-primary-foreground/20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </motion.svg>

        {/* Signal waves */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-40 left-20 w-32 h-32 rounded-full border-4 border-primary-foreground/10"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-40 left-20 w-48 h-48 rounded-full border-4 border-primary-foreground/5"
        />

        {/* Dots pattern */}
        <div className="absolute top-1/3 left-10 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              className="w-2 h-2 rounded-full bg-primary-foreground/20"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-80 h-80 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -right-40 w-96 h-96 border border-accent/10 rounded-full"
      />
    </div>
  );
};

export default FloatingShapes;
