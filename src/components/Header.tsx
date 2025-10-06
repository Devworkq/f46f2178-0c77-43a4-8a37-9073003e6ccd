import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient-primary">Quidax</span>
          </a>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Buy</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-4">
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      Instant Buy
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      P2P Trading
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Trade</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-4">
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      Spot Trading
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      Order Book
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Business</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-4">
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      API
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      OTC Desk
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-4">
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      Academy
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      Blog
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Why Quidax</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-4">
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      About Us
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block py-2 text-sm hover:text-primary">
                      Security
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
