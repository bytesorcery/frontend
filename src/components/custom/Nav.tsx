import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import logo from "@/assets/byte-sorcery-logo-transparent.png"
import "@/css/Nav.css"
import { useEffect, useState } from "react";

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollThreshold = 0;
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > scrollThreshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="nav w-full fixed top-0 left-0 right-0 bg-transparent">
            <NavigationMenu className={`flex items-center px-6 mx-auto nav-menu border-radius-10 ${isScrolled ? "nav-menu-scrolled" : ""}`}>
                <img src={logo} alt="logo" width="100" className="" />
                <NavigationMenuList className="flex-1 flex justify-center">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link to="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link to="/pricing ">Pricing</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-accent text-primary-foreground`}>
                            <Link to="/contact">Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}