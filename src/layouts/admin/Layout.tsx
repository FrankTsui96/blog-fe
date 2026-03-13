import { Outlet } from 'react-router-dom';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SidebarMenu } from '@/layouts/admin/SidebarMenu';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SidebarProvider>
        <SidebarMenu />
        <SidebarInset>
          <SidebarTrigger />
          <main className="flex-1">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
