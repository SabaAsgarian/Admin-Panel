"use client"
import { usePathname } from 'next/navigation';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import { Box } from '@mui/material';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  // Define the paths where ResponsiveDrawer should be displayed
  const pathsWithDrawer = ['/users', '/dashboard', '/products', '/reports', '/revenue', './components/transactions'];

  return (
    <html lang="en">
      <body className='bg-[#a9dfd8]'>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          {pathsWithDrawer.includes(pathname) && <ResponsiveDrawer />}
          <Box component="main" sx={{ flexGrow: 1, bgcolor: '#a9dfd8', color: 'text.primary' }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}