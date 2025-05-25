import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; 
import Index from "./pages/Index.jsx";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PropertySearch from "./pages/PropertySearch";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "About Us",
    to: "/about-us",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Property Search",
    to: "/property-search",
    icon: <Home className="h-4 w-4" />,
  },
];

 const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="property-search" element={<PropertySearch />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
 };

 export default App;