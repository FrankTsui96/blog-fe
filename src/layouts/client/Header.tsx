import { Link } from 'react-router-dom';
import { ThemeSelect } from '@/components/common/ThemeSelect';

const NavItems = [
  { name: '技术笔记', path: '/tech' },
  { name: '生活与想象', path: '/life' },
  { name: '弗兰克的视线', path: '/sight' },
  { name: '说字', path: '/hanzi' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            {/* Logo 预留位置 */}
            <img src="/logo.svg" alt="logo" className="h-6 w-6" />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            {NavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium transition-all duration-300 hover:text-primary hover:font-bold"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <ThemeSelect />
        </div>
      </div>
    </header>
  );
}
