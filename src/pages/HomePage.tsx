import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {modules.map((module) => (
              <Card
                key={module.path}
                className="cursor-pointer transition-all hover:shadow-lg"
                onClick={() => navigate(module.path)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{module.title}</CardTitle>
                  <CardDescription className="text-base">{module.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" disabled>
              社交媒体链接
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
