import Image from "next/image";
import Link from "next/link";

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
                <div className="flex-none flex space-x-4 px-4 ml-auto bg-red-400">
                    <Link href="/signup" title="Sign up page">
                        <h1>Sign up</h1>
                    </Link>
                    <Link href="/login" title="Login page">
                        <h1>Login</h1>
                    </Link>
                </div>
            </nav>
        </header>
    );
}