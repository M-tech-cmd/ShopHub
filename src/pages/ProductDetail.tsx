import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Truck, Shield, ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import { useToast } from "@/hooks/use-toast";

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
    description: "Step up your style with these premium white sneakers. Crafted with high-quality materials for ultimate comfort and durability.",
    features: ["Premium leather upper", "Cushioned insole", "Durable rubber outsole", "Breathable lining"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Navy"],
  },
  {
    id: "2",
    name: "Modern Navy Backpack",
    price: 59.99,
    image: product2,
    category: "Accessories",
    rating: 4.6,
    isNew: true,
    description: "Sleek and functional backpack perfect for daily commutes or weekend adventures.",
    features: ["Water-resistant fabric", "Padded laptop compartment", "Multiple pockets", "Adjustable straps"],
    sizes: ["One Size"],
    colors: ["Navy", "Black", "Gray"],
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
    description: "Experience superior sound quality with active noise cancellation and 30-hour battery life.",
    features: ["Active noise cancellation", "30-hour battery life", "Premium sound quality", "Comfortable fit"],
    sizes: ["One Size"],
    colors: ["Black", "Silver", "Rose Gold"],
  },
  {
    id: "4",
    name: "Luxury Leather Watch",
    price: 299.99,
    image: product4,
    category: "Watches",
    rating: 4.7,
    isNew: true,
    description: "Timeless elegance meets modern craftsmanship in this luxury leather watch.",
    features: ["Genuine leather strap", "Japanese quartz movement", "Scratch-resistant glass", "Water-resistant"],
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Tan"],
  },
];

const relatedProducts = [
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

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = allProducts.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted
        ? `${product.name} has been removed from your wishlist.`
        : `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isSale && (
                <Badge className="absolute top-4 left-4 bg-destructive">
                  SALE
                </Badge>
              )}
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-primary">NEW</Badge>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">(125 reviews)</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Color Selection */}
            <div>
              <label className="text-sm font-semibold mb-3 block">Color</label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="text-sm font-semibold mb-3 block">Size</label>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-16"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-sm font-semibold mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-semibold">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleToggleWishlist}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isWishlisted ? "fill-destructive text-destructive" : ""
                  }`}
                />
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-6 border-t">
              <h3 className="font-semibold">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-sm">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">
                    On orders over $50
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-sm">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">
                    100% protected
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} {...relatedProduct} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
