"use client";
import { useUser } from "@clerk/nextjs";

const textStyle = "text-center text-red-500"

export default function Test() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className={textStyle}>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div className={textStyle}>Sign in to view this page</div>;
  }

  return <div className={textStyle}>Hello {user.username} : {user.id}!</div>;
}