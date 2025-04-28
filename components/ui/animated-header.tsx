"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useScroll } from "@/lib/hooks/use-scroll";
import { ThemeToggle } from "@/components/theme-toggle";
import { UtensilsCrossed } from "lucide-react";

export function AnimatedHeader() {
  const scrolled = useScroll(50);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <UtensilsCrossed
              className={cn(
                "h-8 w-8",
                scrolled ? "text-primary" : "text-white"
              )}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={cn(
              "font-bold text-xl",
              scrolled ? "text-primary" : "text-white"
            )}
          >
            DeliciousEats
          </motion.span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {["Menu", "About", "Specials", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "hover:text-primary transition-colors",
                  scrolled ? "text-primary" : "text-white"
                )}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <ThemeToggle />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Reserve a Table
          </motion.button>
        </div>
      </div>
    </header>
  );
}
