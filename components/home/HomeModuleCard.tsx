"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Framer Motion 需要知道起止值的具体数值才能做渐变插值；
 * 它能解析 #fff，但 var(--accent) 是浏览器运行时才解析的，Framer Motion 看不到实际颜色值，所以只能直接跳变（snap）；
 * 因此把背景色渐变动画放在 className hover 里，不使用 Variants
 */
const cardVariants: Variants = {
  initial: {},
  hovered: {},
};

const titleVariants: Variants = {
  initial: {
    position: "absolute",
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
    fontSize: "2.5rem",
  },
  hovered: {
    position: "absolute",
    top: "0",
    left: "0",
    x: 0,
    y: 0,
    fontSize: "2rem",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const containerVariants: Variants = {
  initial: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  hovered: {
    transition: {
      staggerChildren: 0.05,
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
      ease: "easeOut",
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
      ease: "easeOut",
    },
  },
};

const iconVariants: Variants = {
  initial: {
    opacity: 0,
    x: "100%",
    y: 0,
  },
  hovered: {
    opacity: 1,
    x: "20%",
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export interface HomeModuleItem {
  title: string;
  description: string;
  imgSrc: string;
  path: string;
  latestPost?: { title: string; path: string };
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
        "hover:bg-accent relative cursor-pointer overflow-hidden p-12 transition-colors duration-500",
        className
      )}
      onClick={onClick}
    >
      <div className="relative h-full w-full">
        <motion.h2
          variants={titleVariants}
          className="z-10 text-3xl font-extrabold whitespace-nowrap"
        >
          {item.title}
        </motion.h2>

        <motion.div
          variants={descriptionVariants}
          className="text-muted-foreground absolute top-12 left-0 z-10 font-semibold"
        >
          <motion.span variants={containerVariants} className="inline-flex flex-wrap">
            {item.description.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>

        <motion.div
          variants={linkVariants}
          className="text-muted-foreground hover:text-foreground absolute bottom-0 left-0 z-10 text-sm"
          onClick={(e) => {
            e.stopPropagation();
            onLatestClick();
          }}
        >
          {item.latestPost ? `最新：${item.latestPost.title}  →` : "暂无内容"}
        </motion.div>
      </div>

      <motion.img
        variants={iconVariants}
        src={item.imgSrc}
        alt={item.title}
        className="absolute top-1/2 right-0 h-[110%] w-auto max-w-none -translate-y-1/2"
      ></motion.img>
    </motion.div>
  );
}
