"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export function SpecialSection() {
  return (
    <section id="specials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Chef&apos;s Special
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our chef&apos;s special dishes are created with extraordinary care
            and passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/special-section.webp"
              alt="Chef's Special Dish"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="flex items-center mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
              </div>
              <h3 className="text-2xl font-bold mb-1">
                Signature Seafood Paella
              </h3>
              <p className="opacity-90">
                A celebration of flavors from the sea
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-secondary rounded-lg shadow-lg"
          >
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Limited Time
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Signature Seafood Paella
            </h3>
            <p className="text-muted-foreground mb-6">
              Our award-winning paella features the freshest seafood – succulent
              shrimp, tender calamari, and sweet mussels – prepared with
              imported Spanish saffron rice and slow-cooked to perfection. Each
              bite delivers the authentic taste of Mediterranean coastal
              cuisine.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <p>Made with authentic Spanish bomba rice</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <p>Fresh seafood sourced daily from local markets</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <p>Slow-cooked for perfect texture and flavor</p>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-2xl font-bold">$29.99</span>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-colors">
                Order Special
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
