"use client";

import Image from "next/image";
import { MessageSquare } from "lucide-react";
import type { ProductData } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
  product: ProductData;
  onInquire: (product: ProductData) => void;
}

export function ProductCard({ product, onInquire }: ProductCardProps) {
  return (
    <Card variant="default" className="group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-900/80 text-white uppercase tracking-wider">
            {product.brand}
          </span>
        </div>
        {product.isPopular && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-500 text-navy-900">
              Popular
            </span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-navy-900">{product.name}</h3>
        <p className="text-navy-500 text-sm mt-2 line-clamp-2 flex-1">
          {product.description}
        </p>
        <Button
          variant="primary"
          size="sm"
          className="mt-4 w-full"
          icon={<MessageSquare className="h-4 w-4" />}
          onClick={() => onInquire(product)}
        >
          Inquire Now
        </Button>
      </div>
    </Card>
  );
}
