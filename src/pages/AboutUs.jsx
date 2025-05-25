import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="container mx-auto space-y-8 font-serif">
      <Card>
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We are a premier real estate company dedicated to providing luxury properties for the modern lifestyle. Our mission is to help you find your dream home with ease and confidence.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;