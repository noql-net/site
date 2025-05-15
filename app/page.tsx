'use client';

import { DiAndroid, DiWindows, DiUbuntu, DiGithubBadge } from 'react-icons/di';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0B1F0B] text-green-50'>
            {/* Magical forest mist effect */}
            <div
                className='pointer-events-none absolute inset-0 opacity-30'
                style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(134, 239, 172, 0.15), transparent 80%)`
                }}
            />

            {/* Enchanted forest decorative elements */}
            <div className='absolute inset-0 overflow-hidden'>
                {/* Vine-like borders */}
                <div className='absolute left-0 top-0 h-32 w-32'>
                    <div className='absolute h-full w-[1px] bg-gradient-to-b from-green-600/40 to-transparent' />
                    <div className='absolute h-[1px] w-full bg-gradient-to-r from-green-600/40 to-transparent' />
                </div>
                <div className='absolute bottom-0 right-0 h-32 w-32'>
                    <div className='absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-green-600/40 to-transparent' />
                    <div className='absolute bottom-0 h-[1px] w-full bg-gradient-to-l from-green-600/40 to-transparent' />
                </div>
            </div>

            <div className='container relative flex max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center'>
                <div className='space-y-2'>
                    <Link href='/'>
                        <img
                            src='/logo.png'
                            className='w-[400px] max-w-full mb-[20px]'
                            alt='Logo'
                        />
                    </Link>
                    <p className='text-xl text-green-400'>
                        Censorship Circumvention Tools and Resources
                    </p>
                </div>

                {/* <p className="max-w-[600px] text-green-200/80 md:text-lg">From Years of Research & Development: Solving Open Internet Challenges in Heavily Censored Regions.</p> */}

                <div className='flex flex-col gap-4 items-center max-w-md w-full'>
                    <Link href='/apt-repository' className='w-full'>
                        <Button
                            variant='outline'
                            className='w-full flex items-start gap-3 p-4 h-auto border-green-800/50 bg-green-900/30 text-green-400 backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-800/40 hover:text-green-200'
                        >
                            <DiUbuntu className='h-5 w-5 flex-shrink-0' />
                            <div className='flex flex-col items-start text-left flex-1 overflow-hidden'>
                                <span className='font-medium'>Debian/Ubuntu APT Repository</span>
                                <span className='text-xs text-green-400/70 break-words overflow-wrap-anywhere'>
                                    Censorship circumvention tools for Debian and Ubuntu
                                </span>
                            </div>
                        </Button>
                    </Link>
                    <Link href='/fdroid-repository' className='w-full'>
                        <Button
                            variant='outline'
                            className='w-full flex items-start gap-3 p-4 h-auto border-green-800/50 bg-green-900/30 text-green-400 backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-800/40 hover:text-green-200'
                        >
                            <DiAndroid className='h-5 w-5 flex-shrink-0' />
                            <div className='flex flex-col items-start text-left flex-1 overflow-hidden'>
                                <span className='font-medium'>Android F-droid Repository</span>
                                <span className='text-xs text-green-400/70 break-words overflow-wrap-anywhere'>
                                    Censorship circumvention apps for Android.
                                </span>
                            </div>
                        </Button>
                    </Link>
                    <Link href='/scoop-repository' className='w-full'>
                        <Button
                            variant='outline'
                            className='w-full flex items-start gap-3 p-4 h-auto border-green-800/50 bg-green-900/30 text-green-400 backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-800/40 hover:text-green-200'
                        >
                            <DiWindows className='h-5 w-5 flex-shrink-0' />
                            <div className='flex flex-col items-start text-left flex-1 overflow-hidden'>
                                <span className='font-medium'>Windows Scoop Repository</span>
                                <span className='text-xs text-green-400/70 break-words overflow-wrap-anywhere'>
                                    Censorship circumvention apps for Windows.
                                </span>
                            </div>
                        </Button>
                    </Link>
                </div>

                <div className='flex flex-wrap justify-center gap-4'>
                    <Link href='https://github.com/noql-net' className='w-full'>
                        <Button
                            variant='outline'
                            size='icon'
                            className='group border-green-800/50 bg-green-900/30 text-green-400 backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-800/40 hover:text-green-200'
                        >
                            <DiGithubBadge className='h-5 w-5 transition-transform group-hover:scale-110' />
                            <span className='sr-only'>GitHub</span>
                        </Button>
                    </Link>
                </div>
            </div>

            <footer className='absolute bottom-4 text-sm text-green-500/60'>
                © {new Date().getFullYear()} Mark Pashmfouroush. Made for Iranians, useful for
                everyone.
            </footer>
        </div>
    );
}
