import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const modules = [
  {
    title: '技术笔记',
    description: '记录工作和学习中的经验',
    path: '/tech',
  },
  {
    title: '生活与想象',
    description: '书·影·音·随笔',
    path: '/life',
  },
  {
    title: '弗兰克的视线',
    description: '影像作为记忆的一部分',
    path: '/sight',
  },
  {
    title: '说字',
    description: '重新认识我们的文字',
    path: '/hanzi',
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col justify-center bg-background px-0 py-0 md:py-40">
      <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2">
        {modules.map((module) => (
          <div
            key={module.path}
            className="flex cursor-pointer flex-col justify-center border-b p-12 transition-colors hover:bg-accent md:border-r"
            onClick={() => navigate(module.path)}
          >
            <h2 className="text-2xl font-bold">{module.title}</h2>
            <p className="mt-2 text-muted-foreground">{module.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
