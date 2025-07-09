"use client";                       // 1️⃣ makes this a client component

import Image from "next/image";
import Link from "next/link";
import { useUser, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import CreateUser from "./CreateUser";

export default function Header() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <header>
      <nav className="flex w-full bg-cyan-400 h-16 items-center">
        <div className="w-auto justify-center bg-yellow-400">
          <Link href="/" title="Home page">
            <Image src="/warhammer-aquilla.png" alt="logo" width={120} height={120} />
          </Link>
        </div>

        <div className="flex-1 text-center bg-green-400">
          <h1>Welcome to the Home Page</h1>
        </div>

        <div className="flex-none ml-auto px-4 space-x-2">
          <SignedOut>
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full h-10 px-4">
                Sign Up
              </button>
            </SignUpButton>
            <SignInButton>
              <button className="bg-[#6c47ff] text-white rounded-full h-10 px-4">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          {/* render only when we *have* the user */}
          {isLoaded && isSignedIn && (
            <>
              <CreateUser user_id={user.id} />
              <UserButton />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
