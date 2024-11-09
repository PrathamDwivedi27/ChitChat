import React from "react";
import { Card } from "@/components/ui/card";
export default function UserReviews() {
  return (
    <section className="p-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <Card className="p-6 text-center">
          <p className="text-lg text-gray-700">
            “ChitChat is a game-changer! The fastest way to start a chat.”
          </p>
          <div className="mt-4">
            <img
              src="/images/user1.png"
              alt="User 1"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-gray-800">Sajal Namdeo, Developer</div>
          </div>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-lg text-gray-700">
            “The encryption is top-notch. I feel secure using ChitChat.”
          </p>
          <div className="mt-4">
            <img
              src="/images/user2.png"
              alt="User 2"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-gray-800">Pratham Dwivedi, Developer</div>
          </div>
        </Card>
      </div>
    </section>
  );
}