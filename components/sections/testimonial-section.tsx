"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    content:
      "The flavors at DeliciousEats are absolutely incredible! Every dish is prepared with such care and attention to detail. I've been coming here weekly for the past month and I'm always amazed.",
    rating: 5,
    image: "/avatar1.webp",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Local Resident",
    content:
      "This place has the best burger I've ever tasted! The ambiance is perfect for both casual lunches and special dinners. The staff is friendly and attentive.",
    rating: 5,
    image: "/avatar2.webp",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    content:
      "As someone who reviews restaurants professionally, I can say that DeliciousEats stands out from the crowd. Their seasonal menu is always a delight and their commitment to quality is evident in every bite.",
    rating: 5,
    image: "/avatar3.webp",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We value every customer&apos;s feedback and are proud of the
            experiences we create
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
              </div>
              <p className="text-muted-foreground italic">
                &quot;{testimonial.content}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
