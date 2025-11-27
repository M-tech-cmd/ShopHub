import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const allProducts = [
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
    id: "2",
    name: "Modern Navy Backpack",
    price: 59.99,
    image: product2,
    category: "Accessories",
    rating: 4.6,
    isNew: true,
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
    id: "4",
    name: "Luxury Leather Watch",
    price: 299.99,
    image: product4,
    category: "Watches",
    rating: 4.7,
    isNew: true,
  },
  {
    id: "5",
    name: "Classic White Sneakers",
    price: 79.99,
    image: product1,
    category: "Footwear",
    rating: 4.5,
  },
  {
    id: "6",
    name: "Urban Backpack",
    price: 49.99,
    image: product2,
    category: "Accessories",
    rating: 4.3,
  },
  {
    id: "7",
    name: "Studio Headphones",
    price: 199.99,
    image: product3,
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: "8",
    name: "Sport Watch",
    price: 249.99,
    image: product4,
    category: "Watches",
    rating: 4.6,
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of premium items
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-lg border border-border">
            <div className="flex-1 w-full md:max-w-sm">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
              />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="footwear">Footwear</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="watches">Watches</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="featured">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button size="lg" variant="outline">
            Load More Products
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
