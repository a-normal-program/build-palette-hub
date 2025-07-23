import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, User, Settings, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState(3); // Simulate notifications
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/builds", label: "Build Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contatti" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-accent-foreground font-bold text-lg">PC</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground">BuildMaster</span>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="text-xs">Pro</Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  <Youtube className="w-3 h-3" />
                  50K+
                </Badge>
              </div>
            </div>
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent hover:scale-105 ${
                  isActive(item.path) 
                    ? "text-accent border-b-2 border-accent pb-1" 
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-accent/10">
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <div className="relative hidden sm:block">
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {notifications}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Settings */}
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-accent/10">
              <Settings className="h-5 w-5" />
            </Button>

            {/* User Profile */}
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-accent/10">
              <User className="h-5 w-5" />
            </Button>

            {/* CTA Button */}
            <Button variant="accent" size="sm" className="hidden md:flex shadow-elegant hover:shadow-glow transition-all duration-300">
              Richiedi Build
            </Button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:bg-accent/10"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-accent/10 ${
                    isActive(item.path) 
                      ? "text-accent bg-accent/5 border-l-4 border-accent" 
                      : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm text-muted-foreground">Azioni Rapide</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Search className="h-4 w-4" />
                    </Button>
                    <div className="relative">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bell className="h-4 w-4" />
                        {notifications > 0 && (
                          <Badge 
                            variant="destructive" 
                            className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs"
                          >
                            {notifications}
                          </Badge>
                        )}
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="px-4">
                  <Button variant="accent" size="sm" className="w-full shadow-elegant">
                    Richiedi Build Personalizzata
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardBar;