import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SideBar } from './SideBar/SideBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <main>
      <div style={{display: 'flex', maxWidth: 1440, margin: '0 auto'}}>
        <SideBar />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
            <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </div>
    </main>
  );
};