import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Fashion",
    icon: "👔",
    count: 234,
    description: "Trendy clothing and accessories",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Electronics",
    icon: "📱",
    count: 156,
    description: "Latest gadgets and tech",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Home & Garden",
    icon: "🏡",
    count: 189,
    description: "Everything for your home",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Sports",
    icon: "⚽",
    count: 145,
    description: "Athletic gear and equipment",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Beauty",
    icon: "💄",
    count: 178,
    description: "Cosmetics and skincare",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Books",
    icon: "📚",
    count: 267,
    description: "Reading materials and more",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Toys & Games",
    icon: "🎮",
    count: 198,
    description: "Fun for all ages",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Food & Beverage",
    icon: "🍕",
    count: 134,
    description: "Delicious treats and snacks",
    color: "from-yellow-500 to-orange-500",
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of categories and find exactly what you're
            looking for
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to="/shop">
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`h-32 bg-gradient-to-br ${category.color} relative`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl transform group-hover:scale-110 transition-transform">
                        {category.icon}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {category.description}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {category.count} products
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
