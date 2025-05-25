import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    description: "Beautiful villa with modern amenities and stunning views.",
    image: "/images/property-1.jpg",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    description: "Beautiful apartment with modern amenities and stunning views.",
    image: "/images/property-2.jpg",
  },
  {
    id: 3,
    title: "Luxury Mansion",
    description: "Beautiful mansion with modern amenities and stunning views.",
    image: "/images/property-3.jpg",
  },
  {
    id: 4,
    title: "Luxury Beach House",
    description: "Beautiful beach house with modern amenities and stunning views.",
    image: "/images/property-4.jpg",
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    description: "Beautiful penthouse with modern amenities and stunning views.",
    image: "/images/property-5.jpg",
  },
  {
    id: 6,
    title: "Luxury Countryside Estate",
    description: "Beautiful countryside estate with modern amenities and stunning views.",
    image: "/images/property-6.jpg",
  },
  {
    id: 7,
    title: "Luxury Mountain Cabin",
    description: "Beautiful mountain cabin with modern amenities and stunning views.",
    image: "/images/property-7.jpg",
  },
  {
    id: 8,
    title: "Luxury Lake House",
    description: "Beautiful lake house with modern amenities and stunning views.",
    image: "/images/property-8.jpg",
  },
];

const PropertySearch = () => {
  return (
    <div className="container mx-auto space-y-8 font-serif">
      <h1 className="text-3xl font-bold text-center">Property Search</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Card key={property.id}>
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{property.description}</p>
            </CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertySearch;