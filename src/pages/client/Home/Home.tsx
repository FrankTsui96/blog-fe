import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { HomeModuleCard, type HomeModuleItem } from './components/HomeModuleCard';
import svgBgTech from '@/assets/bg-tech.svg';
import svgBgLife from '@/assets/bg-life.svg';
import svgBgSight from '@/assets/bg-sight.svg';
import svgBgHanzi from '@/assets/bg-hanzi.svg';

const modules: HomeModuleItem[] = [
  {
    title: '技术笔记',
    description: '记录工作和学习中的经验。',
    path: '/tech',
    latestPost: { title: '最新文章标题', path: '/tech/latest' },
    icon: <img src={svgBgTech} alt="技术笔记" className="h-[110%]" />,
  },
  {
    title: '生活与想象',
    description: '书·影·音·随笔。',
    path: '/life',
    latestPost: { title: '最新文章标题', path: '/life/latest' },
    icon: <img src={svgBgLife} alt="技术笔记" className="h-[110%]" />,
  },
  {
    title: '弗兰克的视线',
    description: '影像作为记忆的一部分。',
    path: '/sight',
    latestPost: { title: '最新文章标题', path: '/sight/latest' },
    icon: <img src={svgBgSight} alt="技术笔记" className="h-[110%]" />,
  },
  {
    title: '说字',
    description: '重新认识我们的文字。',
    path: '/hanzi',
    latestPost: { title: '最新文章标题', path: '/hanzi/latest' },
    icon: <img src={svgBgHanzi} alt="技术笔记" className="h-[110%]" />,
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col justify-center bg-background px-0 py-0 md:py-20">
      <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2">
        {modules.map((module, index) => (
          <HomeModuleCard
            key={module.path}
            item={module}
            className={cn(
              // 先判断视窗小于 md 时的情况
              index === modules.length - 1 ? '' : 'border-b',
              // 再判断视窗大于 md 时的情况
              index <= 1 ? 'md:border-t' : '',
              index > modules.length - 2 ? 'md:border-b' : '',
              index % 2 !== 1 ? 'md:border-r' : '',
            )}
            onClick={() => navigate(module.path)}
            onLatestClick={() => navigate(module.latestPost.path)}
          />
        ))}
      </div>
    </div>
  );
}
