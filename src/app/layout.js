import './globals.css';
import { BasketContextProvider } from '@/context/basket';
import { oswaldFont } from '@/utils/fonts';

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswaldFont.className}>
        <BasketContextProvider>{children}</BasketContextProvider>
      </body>
    </html>
  );
}
