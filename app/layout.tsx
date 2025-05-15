// app/layout.tsx یا globals.tsx
import type { Metadata } from 'next';
import './globals.css';

export const defaultDescription = 'Censorship Circumvention Tools and Resources';
export const siteName = 'Noql.net';

export const metadata: Metadata = {
    title: `${siteName} | ${defaultDescription}`,
    description: defaultDescription
};

export default function RootLayout({
    children,
    params
}: Readonly<{ children: React.ReactNode; params?: any }>) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/favicon.ico' />
            </head>
            <body>{children}</body>
        </html>
    );
}
