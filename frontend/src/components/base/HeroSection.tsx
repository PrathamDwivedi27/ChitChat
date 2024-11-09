import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Effortless Conversations, Anytime, Anywhere
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        With ChitChat, you’re just one click away from creating secure, instant chat links—making communication simple and seamless.
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse">
          Start Chatting
        </Button>
      </Link>

      <div className="mt-12 w-full max-w-5xl flex justify-center">
        {/* Placeholder for Illustration/Image */}
        <img
          src="/images/conversation.jpg"
          alt="Illustration"
          className="w-[550px] h-auto"
        />
      </div>
    </section>
  );
}
