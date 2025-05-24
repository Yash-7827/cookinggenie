import * as React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewsLetter = () => {
  return (
    <section className="relative py-16 bg-orange-500 text-white">
      <div className="absolute inset-0 bg-black opacity-12"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Recipe Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get weekly recipe inspiration delivered to your inbox and be the first
          to know about new features.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-gray-900"
          />
          <Button variant="secondary">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
