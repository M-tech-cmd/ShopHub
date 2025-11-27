import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, TrendingUp } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const hotDeals = [
  {
    id: "1",
    name: "Premium White Sneakers",
    price: 89.99,
    originalPrice: 129.99,
    image: product1,
    category: "Footwear",
    rating: 4.8,
    isSale: true,
  },
  {
    id: "3",
    name: "Wireless Headphones Pro",
    price: 149.99,
    originalPrice: 199.99,
    image: product3,
    category: "Electronics",
    rating: 4.9,
    isSale: true,
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    price: 69.99,
    originalPrice: 129.99,
    image: product2,
    category: "Accessories",
    rating: 4.6,
    isSale: true,
  },
  {
    id: "6",
    name: "Smart Fitness Tracker",
    price: 99.99,
    originalPrice: 149.99,
    image: product4,
    category: "Electronics",
    rating: 4.7,
    isSale: true,
  },
];

const flashSale = [
  {
    id: "7",
    name: "Running Shoes Pro",
    price: 79.99,
    originalPrice: 149.99,
    image: product1,
    category: "Footwear",
    rating: 4.5,
    isSale: true,
  },
  {
    id: "8",
    name: "Laptop Backpack",
    price: 39.99,
    originalPrice: 79.99,
    image: product2,
    category: "Accessories",
    rating: 4.4,
    isSale: true,
  },
];

const Deals = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Amazing Deals</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these incredible offers - limited time only!
          </p>
        </motion.div>

        {/* Flash Sale Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Flame className="h-8 w-8" />
              <div>
                <h2 className="text-2xl font-bold mb-1">Flash Sale</h2>
                <p className="text-primary-foreground/90">
                  Up to 50% off - Ends in 2 hours!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/20 px-6 py-3 rounded-lg">
              <Clock className="h-5 w-5" />
              <span className="text-2xl font-bold">01:45:32</span>
            </div>
          </div>
        </motion.div>

        {/* Flash Sale Products */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Flame className="h-6 w-6 text-destructive" />
            <h2 className="text-3xl font-bold">Flash Sale</h2>
            <Badge variant="destructive">Limited Time</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSale.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hot Deals */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Hot Deals</h2>
            <Badge>Best Sellers</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotDeals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Savings Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-secondary text-secondary-foreground text-center"
        >
          <h3 className="text-3xl font-bold mb-2">
            Save up to $500 on Select Items
          </h3>
          <p className="text-lg text-secondary-foreground/80">
            Check back daily for new deals and exclusive offers
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Deals;
