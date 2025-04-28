"use client";

import { motion } from "framer-motion";
import { MenuCard } from "@/components/ui/menu-card";

const menuItems = [
  {
    id: 1,
    title: "Classic Burger",
    description:
      "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce",
    price: "$12.99",
    image: "/burger.webp",
    category: "Mains",
  },
  {
    id: 2,
    title: "Margherita Pizza",
    description:
      "Traditional pizza with fresh mozzarella, tomatoes, and basil on our house-made dough",
    price: "$14.99",
    image: "/pizza.webp",
    category: "Pizza",
  },
  {
    id: 3,
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce with parmesan, croutons, and our creamy caesar dressing",
    price: "$10.99",
    image: "/salad.webp",
    category: "Salads",
  },
  {
    id: 4,
    title: "Grilled Salmon",
    description:
      "Fresh salmon fillet grilled to perfection with lemon herb butter and seasonal vegetables",
    price: "$19.99",
    image: "/salmon.webp",
    category: "Seafood",
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: "$8.99",
    image: "/cake.webp",
    category: "Desserts",
  },
  {
    id: 6,
    title: "Pasta Carbonara",
    description:
      "Creamy pasta with pancetta, egg, black pepper, and parmesan cheese",
    price: "$16.99",
    image: "/pasta.webp",
    category: "Pasta",
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Popular Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most beloved creations, crafted with care and premium
            ingredients to delight your taste buds
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <MenuCard
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                category={item.category}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-primary/10 hover:bg-primary/20 text-primary px-8 py-3 rounded-full text-lg font-medium transition-colors cursor-pointer">
            View Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
