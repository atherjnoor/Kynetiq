import type { Metadata } from 'next';
import './globals.css';
import { AppSettingsProvider } from '../context/AppSettingsContext';

export const metadata: Metadata = {
  title: 'Kynetiq',
  description: 'Train smarter. Eat better. See it all in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppSettingsProvider>{children}</AppSettingsProvider>
      </body>
    </html>
  );
}
