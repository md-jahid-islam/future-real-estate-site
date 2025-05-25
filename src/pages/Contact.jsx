import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onContactSubmit = (data) => {
    console.log("Contact data:", data);
  };

  return (
    <div className="container mx-auto space-y-8 font-serif">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
            <Input placeholder="Name" {...contactForm.register("name")} />
            <Input placeholder="Email" {...contactForm.register("email")} />
            <Input placeholder="Phone" {...contactForm.register("phone")} />
            <Textarea placeholder="Message" {...contactForm.register("message")} />
            <Button type="submit">Submit</Button>
          </form>
          <div className="text-center mt-4">
            <p>Address: 123 Luxury St, Dream City</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@luxuryrealestate.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;