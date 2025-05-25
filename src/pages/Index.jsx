import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const searchSchema = z.object({
  location: z.string().min(1, "Location is required"),
  propertyType: z.string().min(1, "Property type is required"),
  priceRange: z.string().min(1, "Price range is required"),
});

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

const Index = () => {
  const searchForm = useForm({
    resolver: zodResolver(searchSchema),
  });

  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSearchSubmit = (data) => {
    console.log("Search data:", data);
  };

  const onContactSubmit = (data) => {
    console.log("Contact data:", data);
  };

  return (
    <div className="space-y-16 font-serif">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-800 text-white">
        <img src="/images/hero-background.jpg" alt="Luxury Real Estate" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-5xl font-bold">Find Your Dream Home</h1>
          <p className="text-xl">Invest in Property</p>
          <form onSubmit={searchForm.handleSubmit(onSearchSubmit)} className="flex space-x-4">
            <Input placeholder="Location" {...searchForm.register("location")} />
            <Input placeholder="Property Type" {...searchForm.register("propertyType")} />
            <Input placeholder="Price Range" {...searchForm.register("priceRange")} />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <img src="/images/featured-property-1.jpg" alt="Luxury Villa" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>Luxury Villa 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Beautiful villa with modern amenities and stunning views.</p>
            </CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
          <Card>
            <img src="/images/featured-property-2.jpg" alt="Luxury Apartment" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>Luxury Apartment 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Beautiful apartment with modern amenities and stunning views.</p>
            </CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
          <Card>
            <img src="/images/featured-property-3.jpg" alt="Luxury Mansion" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>Luxury Mansion 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Beautiful mansion with modern amenities and stunning views.</p>
            </CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <img src="/images/about-us.jpg" alt="About Us" className="w-full md:w-1/2 h-64 object-cover" />
          <p className="text-lg">
            We are a premier real estate company dedicated to providing luxury properties for the modern lifestyle. Our mission is to help you find your dream home with ease and confidence.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
          <Input placeholder="Name" {...contactForm.register("name")} />
          <Input placeholder="Email" {...contactForm.register("email")} />
          <Input placeholder="Phone" {...contactForm.register("phone")} />
          <Textarea placeholder="Message" {...contactForm.register("message")} />
          <Button type="submit">Submit</Button>
        </form>
        <div className="text-center">
          <p>Address: 123 Luxury St, Dream City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@luxuryrealestate.com</p>
        </div>
      </section>
    </div>
  );
};

export default Index;