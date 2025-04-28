"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/hero.webp"
          alt="Delicious food background"
          fill
          priority
          className="object-cover brightness-[0.6] dark:brightness-[0.4]"
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            <span className="text-amber-400">Delicious</span> food for every{" "}
            <span className="text-amber-400">mood</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Experience culinary delights crafted with passion, using only the
            finest ingredients. From farm to table, we bring you unforgettable
            flavors every day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full">
              Order Online
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white px-8 py-6 text-lg rounded-full"
            >
              View Our Menu
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDownCircle className="h-10 w-10 text-white/80" />
      </div>
    </section>
  );
}
