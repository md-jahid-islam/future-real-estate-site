import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

 export const navItems = [
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "ABOUT US",
    to: "/about-us",
  },
  {
    title: "CONTACT",
    to: "/contact",
  },
  {
    title: "PROPERTY SEARCH",
    to: "/property-search",
  },
 ];

 const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col font-serif">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNav />
        <MobileNav />
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
 };

 const DesktopNav = () => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    <NavItem to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
      <span className="sr-only">LUZCO</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to} className="uppercase">
        <span>{item.title}</span>
      </NavItem>
    ))}
  </nav>
 );

 const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="sr-only">LUZCO</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to} className="uppercase">
            <span>{item.title}</span>
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
 );

 const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
      <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
 );

 const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )
    }>
    {children}
  </NavLink>
 );

 export default Layout;