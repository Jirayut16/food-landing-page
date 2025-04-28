"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export function MenuCard({
  title,
  description,
  price,
  image,
  category,
}: MenuCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="h-full p-3 overflow-hidden rounded-lg border border-primary/20 bg-card">
      <div
        className="relative overflow-hidden rounded-md h-full flex flex-col"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="aspect-video w-full overflow-hidden rounded-t-md relative cursor-pointer">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <div className="absolute top-2 left-2 z-20">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
              {category}
            </span>
          </div>
          <Image
            src={image}
            alt={title}
            fill
            className={cn(
              "object-cover transition-all duration-700 ease-in-out",
              isHovering ? "scale-110" : "scale-100"
            )}
          />
        </div>
        <div className="p-4 flex-1 flex flex-col ">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="text-lg font-bold text-primary">{price}</div>
          </div>
          <p className="text-muted-foreground text-sm flex-1">{description}</p>
          <button className="mt-4 w-full py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
