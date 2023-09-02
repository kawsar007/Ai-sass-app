import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      Landing Page (not protected)
      <div>
        <Button>
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button>
          <Link href="/sign-up">Register</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
