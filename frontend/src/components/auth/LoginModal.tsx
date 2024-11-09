import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { DialogDescription } from "@radix-ui/react-dialog";

const handleLogin = async () => {
  signIn("google", {
    redirect: true,
    callbackUrl: "/dashboard",
  });
};

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to ChitChat</DialogTitle>
          <DialogDescription>
            Connect and communicate instantly with ChitChat! 
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleLogin}>
          <Image
            src="/images/google.png"
            className="mr-4"
            width={25}
            height={25}
            alt="google"
          />
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
