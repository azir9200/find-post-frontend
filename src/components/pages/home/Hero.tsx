import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className="relative py-20 px-6 blog-gradient text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Welcome to DevBlog
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover insightful articles, tutorials, and thoughts from developers
          around the world.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/new-post">
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center gap-2"
            >
              <PenTool size={20} />
              Write a Post
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
