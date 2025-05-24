import * as React from "react";

import { BookOpen, ChefHat, Star, Users } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ChefServices( {scrollToBookingForm} : {
    scrollToBookingForm: () => void;
} ) {
  // Chef services data for overview section
  const chefServices = [
    {
      id: 1,
      title: "Personal Chef Service",
      description: "Professional chef for daily cooking at your home",
      features: [
        "Daily meal preparation",
        "Customized menu",
        "Grocery shopping included",
      ],
      price: "Starting from ₹15,000/month",
      icon: <ChefHat className="h-12 w-12 text-orange-500" />,
    },
    {
      id: 2,
      title: "Event Catering",
      description: "Complete catering solutions for your special events",
      features: [
        "Multi-cuisine options",
        "Professional presentation",
        "Full service team",
      ],
      price: "Starting from ₹500/person",
      icon: <Users className="h-12 w-12 text-orange-500" />,
    },
    {
      id: 3,
      title: "Cooking Classes",
      description: "Learn from expert chefs in your own kitchen",
      features: [
        "One-on-one training",
        "Recipe collection",
        "Cooking techniques",
      ],
      price: "Starting from ₹2,500/session",
      icon: <BookOpen className="h-12 w-12 text-orange-500" />,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {chefServices.map((service) => (
        <Card key={service.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">{service.icon}</div>
            <CardTitle className="text-xl">{service.title}</CardTitle>
            <CardDescription className="mt-2">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-600"
                >
                  <Star className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <p className="font-semibold text-orange-600 mb-4">
                {service.price}
              </p>
              <Button
                onClick={scrollToBookingForm}
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
