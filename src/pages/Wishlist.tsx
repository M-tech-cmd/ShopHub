import { motion } from "framer-motion";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
}

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "1",
      name: "Premium White Sneakers",
      price: 89.99,
      originalPrice: 129.99,
      image: product1,
      category: "Footwear",
      inStock: true,
    },
    {
      id: "2",
      name: "Modern Navy Backpack",
      price: 59.99,
      image: product2,
      category: "Accessories",
      inStock: true,
    },
    {
      id: "3",
      name: "Wireless Headphones Pro",
      price: 149.99,
      originalPrice: 199.99,
      image: product3,
      category: "Electronics",
      inStock: false,
    },
    {
      id: "4",
      name: "Luxury Leather Watch",
      price: 299.99,
      image: product4,
      category: "Watches",
      inStock: true,
    },
  ]);

  const removeItem = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Heart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-8">
            Start adding items you love to your wishlist
          </p>
          <Button size="lg" asChild>
            <Link to="/shop">Browse Products</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            {item.category}
                          </p>
                          <h3 className="text-lg font-semibold mb-2">
                            {item.name}
                          </h3>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-primary">
                          ${item.price.toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {item.inStock ? (
                        <Button className="w-full" size="sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full" size="sm" disabled>
                          Out of Stock
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
