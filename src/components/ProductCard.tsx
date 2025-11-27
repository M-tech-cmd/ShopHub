import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  isNew?: boolean;
  isSale?: boolean;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  rating = 4.5,
  isNew,
  isSale,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted
        ? `${name} has been removed from your wishlist.`
        : `${name} has been added to your wishlist.`,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow">
        <div 
          className="relative aspect-square overflow-hidden bg-muted cursor-pointer"
          onClick={() => navigate(`/product/${id}`)}
        >
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          {isNew && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              NEW
            </Badge>
          )}
          {isSale && (
            <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
              SALE
            </Badge>
          )}
          <Button
            size="icon"
            variant="ghost"
            className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background ${
              isWishlisted ? "text-destructive" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleToggleWishlist();
            }}
          >
            <Heart className={isWishlisted ? "fill-current" : ""} />
          </Button>
          <Button
            size="icon"
            className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-4">
          <div className="cursor-pointer" onClick={() => navigate(`/product/${id}`)}>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              {category}
            </p>
            <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
              {name}
            </h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <span className="text-xs text-muted-foreground">★</span>
              <span className="text-xs text-muted-foreground ml-1">
                {rating}
              </span>
            </div>
          </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
