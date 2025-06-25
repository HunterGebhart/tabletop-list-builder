import Image from "next/image";
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Header()
{
    return (
        <header>
            <nav className="flex w-full bg-cyan-400 h-16 items-center">
                <div className="w-auto justify-center bg-yellow-400">
                    <Link href="/" title="Home page">
                        <Image src="/warhammer-aquilla.png" alt="logo" width={120} height={120}/>
                    </Link>
                </div>
                <div className="flex-1 text-center bg-green-400">
                    <h1>Welcome to the Home Page</h1>
                </div>
                <div className="flex-none ml-auto px-4">
                    <SignedOut>
                        {/*<SignInButton />*/}
                        <SignUpButton>
                            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                {/*<div className="flex-none flex space-x-4 px-4 ml-auto bg-red-400">
                    <Link href="/signup" title="Sign up page">
                        <h1>Sign up</h1>
                    </Link>
                    <Link href="/login" title="Login page">
                        <h1>Login</h1>
                    </Link>
                </div>*/}
            </nav>
        </header>
    );
}