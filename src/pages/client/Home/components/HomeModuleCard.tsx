import { motion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';

const cardVariants: Variants = {
  initial: {},
  hovered: {},
};

const titleVariants: Variants = {
  initial: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%',
    fontSize: '2.5rem',
  },
  hovered: {
    position: 'absolute',
    top: '0',
    left: '0',
    x: 0,
    y: 0,
    fontSize: '2rem',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const containerVariants: Variants = {
  initial: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1, // 鼠标移出时，从后往前倒着消失
    },
  },
  hovered: {
    transition: {
      staggerChildren: 0.05, // 鼠标移入时，正向打字
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
  hovered: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
};

const descriptionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  hovered: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.3,
      ease: 'easeOut',
    },
  },
};

const linkVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  hovered: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};

const iconVariants: Variants = {
  initial: {
    opacity: 0,
    x: '100%',
    y: 0,
  },
  hovered: {
    opacity: 1,
    x: '20%',
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export interface HomeModuleItem {
  title: string;
  description: string;
  path: string;
  latestPost: { title: string; path: string };
  icon: React.ReactNode;
}

export interface HomeModuleCardProps {
  item: HomeModuleItem;
  className: string;
  onClick: () => void;
  onLatestClick: () => void;
}

export function HomeModuleCard({ item, className, onClick, onLatestClick }: HomeModuleCardProps) {
  return (
    <motion.div
      key={item.path}
      initial="initial"
      whileHover="hovered"
      variants={cardVariants}
      className={cn(
        'relative cursor-pointer p-12 transition-colors overflow-hidden hover:bg-accent',
        className,
      )}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        {/* 标题 - 初始居中，hover 时移到左上角 */}
        <motion.h2
          variants={titleVariants}
          className="z-10 text-3xl font-extrabold whitespace-nowrap"
        >
          {item.title}
        </motion.h2>

        {/* 副标题 - hover 时显示在标题下方 */}
        <motion.div
          variants={descriptionVariants}
          className="absolute top-12 left-0 z-10 text-muted-foreground font-semibold"
        >
          <motion.span variants={containerVariants} className="inline-flex flex-wrap">
            {item.description.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block" // 必须是 inline-block 动画才生效
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>

        {/* 最新内容链接 - hover 时显示在右下角 */}
        <motion.div
          variants={linkVariants}
          className="absolute bottom-0 left-0 z-10 text-sm text-muted-foreground hover:text-foreground"
          onClick={(e) => {
            e.stopPropagation();
            onLatestClick();
          }}
        >
          最新：{item.latestPost.title} →
        </motion.div>
      </div>

      <motion.div
        variants={iconVariants}
        className="absolute top-0 right-0 bottom-0 flex items-center justify-center"
      >
        {item.icon}
      </motion.div>
    </motion.div>
  );
}
