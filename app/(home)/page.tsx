"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { HomeModuleCard, type HomeModuleItem } from "@/components/home/HomeModuleCard";

const modules: HomeModuleItem[] = [
  {
    title: "技术笔记",
    description: "记录工作和学习中的经验。",
    imgSrc: "/assets/bg-tech.svg",
    path: "/tech",
    latestPost: { title: "最新文章标题", path: "/tech/latest" },
  },
  {
    title: "生活与想象",
    description: "书·影·音·随笔。",
    imgSrc: "/assets/bg-life.svg",
    path: "/life",
    latestPost: { title: "最新文章标题", path: "/life/latest" },
  },
  {
    title: "弗兰克的视线",
    description: "影像作为记忆的一部分。",
    imgSrc: "/assets/bg-sight.svg",
    path: "/sight",
    latestPost: { title: "最新文章标题", path: "/sight/latest" },
  },
  {
    title: "说字",
    description: "重新认识我们的文字。",
    imgSrc: "/assets/bg-hanzi.svg",
    path: "/hanzi",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-background flex min-h-screen flex-col justify-center px-0 py-0 md:py-[8vh]">
      <div className="grid w-full flex-1 grid-cols-1 md:grid-cols-2">
        {modules.map((module, index) => (
          <HomeModuleCard
            key={module.path}
            item={module}
            className={cn(
              index === modules.length - 1 ? "" : "border-b",
              index <= 1 ? "md:border-t" : "",
              index > modules.length - 2 ? "md:border-b" : "",
              index % 2 !== 1 ? "md:border-r" : ""
            )}
            onClick={() => router.push(module.path)}
            onLatestClick={() => module.latestPost && router.push(module.latestPost.path)}
          />
        ))}
      </div>
    </div>
  );
}
