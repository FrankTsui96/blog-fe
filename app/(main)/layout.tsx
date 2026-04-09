import { Header } from "@/components/layout/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full flex-1 px-[4vw]">{children}</main>
    </>
  );
}
