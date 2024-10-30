import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import logo from "@/assets/byte-sorcery-logo-transparent.png"


export default function Nav() {
    return (
        <NavigationMenu className="fixed top-0 left-0 right-0 flex items-center justify-between max-w-full px-6 bg-background">
            <img src={logo} alt="logo" width="100" />
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/about">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/contact">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}