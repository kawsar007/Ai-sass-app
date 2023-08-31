import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      Landing Page (not protected)
      <div>
        <Link href="/sign-in">
         Login
        </Link>
        <Link href="/sign-up">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
