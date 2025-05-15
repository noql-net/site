import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DiAndroid, DiGithubBadge } from 'react-icons/di';
import {
    FiDownload,
    FiGlobe,
    FiPlus,
    FiRefreshCw,
    FiSearch,
    FiDownloadCloud
} from 'react-icons/fi';
import { CopyButton } from '../../components/ui/copy-button';

export default function FDroidRepositoryPage() {
    return (
        <div className='relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#0B1F0B] text-green-50 p-4 pt-8'>
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
            <div className='container relative flex max-w-3xl flex-col items-center gap-8 text-center pb-16'>
                <Link href='/' className='mb-10'>
                    <h1 className='bg-gradient-to-r from-green-300 via-yellow-200/90 to-green-300 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-3xl cursor-pointer'>
                        noql.net
                    </h1>
                </Link>
                <div className='space-y-4'>
                    <div className='flex items-center justify-center gap-4'>
                        <DiAndroid className='h-12 w-12 text-green-400' />
                        <h1 className='bg-gradient-to-r from-green-300 via-yellow-200/90 to-green-300 bg-clip-text text-4xl font-bold tracking-tighter text-transparent'>
                            F-Droid Repository
                        </h1>
                    </div>

                    <p className='text-xl text-green-300 max-w-2xl mx-auto'>
                        A curated F-Droid repository containing various Android apps designed to
                        help users bypass internet censorship and protect digital freedom.
                    </p>
                </div>

                <div className='bg-green-900/30 border border-green-800/50 rounded-lg p-6 space-y-4 w-full max-w-2xl'>
                    <h2 className='text-2xl font-semibold text-green-200 mb-4'>
                        Repository Features
                    </h2>
                    <ul className='text-green-300 text-left space-y-2 list-disc pl-5'>
                        <li>Comprehensive collection of censorship circumvention apps</li>
                        <li>Regularly updated with the newest apps</li>
                        <li>Easy one-tap installation via F-Droid or Droidify</li>
                    </ul>
                </div>

                <div className='bg-green-900/30 border border-green-800/50 rounded-lg p-8 w-full max-w-2xl shadow-lg'>
                    <h2 className='text-2xl font-bold text-green-200 mb-6 text-center border-b border-green-800/50 pb-3'>
                        Installation Guide
                    </h2>
                    <ol className='text-green-300 text-left space-y-6'>
                        <li className='flex items-start'>
                            <div className='bg-green-800/40 rounded-full p-2 mr-4 mt-1'>
                                <FiDownload className='text-green-200 w-5 h-5' />
                            </div>
                            <div>
                                <p className='font-semibold text-green-100 mb-1'>
                                    Step 1: Install F-Droid
                                </p>
                                <p>
                                    Install{' '}
                                    <a
                                        href='https://f-droid.org'
                                        target='_blank'
                                        className='text-green-400 hover:text-green-300 font-medium hover:underline transition-colors'
                                    >
                                        F-Droid
                                    </a>{' '}
                                    or{' '}
                                    <a
                                        href='https://f-droid.org/packages/com.looker.droidify/'
                                        target='_blank'
                                        className='text-green-400 hover:text-green-300 font-medium hover:underline transition-colors'
                                    >
                                        Droidify
                                    </a>{' '}
                                    on your Android device
                                </p>
                            </div>
                        </li>

                        <li className='flex items-start'>
                            <div className='bg-green-800/40 rounded-full p-2 mr-4 mt-1'>
                                <FiGlobe className='text-green-200 w-5 h-5' />
                            </div>
                            <div>
                                <p className='font-semibold text-green-100 mb-1'>
                                    Step 2: Access Repository
                                </p>
                                <p>Open this site in a browser on your Android device</p>
                            </div>
                        </li>

                        <li className='flex items-start'>
                            <div className='bg-green-800/40 rounded-full p-2 mr-4 mt-1'>
                                <FiPlus className='text-green-200 w-5 h-5' />
                            </div>
                            <div>
                                <p className='font-semibold text-green-100 mb-1'>
                                    Step 3: Add Repository
                                </p>
                                <p>
                                    Tap on{' '}
                                    <a
                                        href='fdroidrepos://fdroid.noql.net/fdroid/repo?fingerprint=0C00898126DF6E2BAAE76ED58D0269B8FBB42FE3DE4B3627DF28ED27CC5E7A02'
                                        target='_blank'
                                        className='text-green-400 hover:text-green-300 font-medium hover:underline transition-colors'
                                    >
                                        this link
                                    </a>{' '}
                                    to add the noql.net repository to F-Droid or Droidify
                                </p>
                                <p className='text-sm text-green-500/60 mt-1'>
                                    Or manually add the repository by copying the information below
                                    and pasting it into the repository manager
                                </p>
                                <div className='bg-black/30 p-2 rounded-md mt-2 flex items-center justify-between scale-95 transform'>
                                    <code className='text-xs text-green-400/70 font-mono break-all'>
                                        https://fdroid.noql.net
                                    </code>
                                    <CopyButton
                                        textToCopy='https://fdroid.noql.net'
                                        contentName='URL'
                                    />
                                </div>
                                <div className='bg-black/30 p-2 rounded-md mt-2 flex items-center justify-between scale-95 transform'>
                                    <code className='text-xs text-green-400/70 font-mono break-all'>
                                        0C00898126DF6E2BAAE76ED58D0269B8FBB42FE3DE4B3627DF28ED27CC5E7A02
                                    </code>
                                    <CopyButton
                                        textToCopy='0C00898126DF6E2BAAE76ED58D0269B8FBB42FE3DE4B3627DF28ED27CC5E7A02'
                                        contentName='Fingerprint'
                                    />
                                </div>
                            </div>
                        </li>

                        <li className='flex items-start'>
                            <div className='bg-green-800/40 rounded-full p-2 mr-4 mt-1'>
                                <FiRefreshCw className='text-green-200 w-5 h-5' />
                            </div>
                            <div>
                                <p className='font-semibold text-green-100 mb-1'>
                                    Step 4: Refresh Repositories
                                </p>
                                <p>Open F-Droid or Droidify and refresh the repositories list</p>
                            </div>
                        </li>

                        <li className='flex items-start'>
                            <div className='bg-green-800/40 rounded-full p-2 mr-4 mt-1'>
                                <FiSearch className='text-green-200 w-5 h-5' />
                            </div>
                            <div>
                                <p className='font-semibold text-green-100 mb-1'>
                                    Step 5: Find Applications
                                </p>
                                <p>
                                    Search for the app you want to install from the noql.net
                                    repository
                                </p>
                            </div>
                        </li>

                        <li className='flex items-start'>
                            <div className='bg-green-800/40 rounded-full p-2 mr-4 mt-1'>
                                <FiDownloadCloud className='text-green-200 w-5 h-5' />
                            </div>
                            <div>
                                <p className='font-semibold text-green-100 mb-1'>
                                    Step 6: Install App
                                </p>
                                <p>Tap on the app to install it and enjoy</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>

            <footer className='absolute bottom-4 text-sm text-green-500/60'>
                © {new Date().getFullYear()} Mark Pashmfouroush. Made for Iranians, useful for
                everyone.
            </footer>
        </div>
    );
}
