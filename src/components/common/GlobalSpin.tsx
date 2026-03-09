import { motion } from 'motion/react';
import { Spinner } from '@/components/ui/spinner';

export function GlobalSpin() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-background/80 backdrop-blur-sm"
    >
      <Spinner className="size-12" />
    </motion.div>
  );
}
