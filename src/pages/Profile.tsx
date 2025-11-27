import { motion } from "framer-motion";
import { User, Package, Heart, Settings, MapPin, CreditCard, Bell, HelpCircle, LogOut } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: Package, label: "My Orders", href: "/orders", badge: "3" },
  { icon: Heart, label: "Wishlist", href: "/wishlist", badge: "5" },
  { icon: MapPin, label: "Addresses", href: "/addresses" },
  { icon: CreditCard, label: "Payment Methods", href: "/payment-methods" },
  { icon: Bell, label: "Notifications", href: "/notifications", badge: "2" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help Center", href: "/help" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                  <p className="text-muted-foreground mb-4">john.doe@example.com</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/edit-profile">Edit Profile</Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
                <div className="hidden md:flex gap-8 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">12</p>
                    <p className="text-sm text-muted-foreground">Orders</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">5</p>
                    <p className="text-sm text-muted-foreground">Wishlist</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">8</p>
                    <p className="text-sm text-muted-foreground">Reviews</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={item.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <span className="font-semibold text-lg">{item.label}</span>
                      </div>
                      {item.badge && (
                        <div className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">
                          {item.badge}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Account Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Account Overview</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
                  <p className="text-2xl font-bold text-primary">$1,234.56</p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-sm text-muted-foreground mb-1">Member Since</p>
                  <p className="text-2xl font-bold">Jan 2024</p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-sm text-muted-foreground mb-1">Rewards Points</p>
                  <p className="text-2xl font-bold text-accent">250</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
