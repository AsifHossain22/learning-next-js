"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
  const router = useRouter();
  // const isLoggedIn = true;
  const isLoggedIn = false;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/education");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <h1 className="text-5xl text-center">About Page</h1>

      <p>
        <Link href="/about/education" className="text-blue-400">
          Click here
        </Link>
        to check out my education details
      </p>

      <button
        type="button"
        onClick={handleNavigation}
        className="hover:cursor-pointer"
      >
        Go to my education
      </button>
    </div>
  );
}
