import { BaseLayout, TailwindIndicator } from '@/components';
import { seo } from '@/config';
import { Providers } from '@/context';
import { cn } from '@/helpers';
import { FontSans } from './fonts';
import './globals.css';

export const metadata = seo;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={cn('', FontSans.className)}>
      <body
        className={cn('relative selection:bg-brand-300 selection:text-white')}
      >
        <Providers>
          <BaseLayout>{children}</BaseLayout>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
