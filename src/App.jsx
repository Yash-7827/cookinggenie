import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ChefHat,
  BookOpen,
  Star,
  Clock,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";
import NavigationHeader from "./components/NavigationHeader";
import HomePageHero from "./components/homepage/HomepageHero";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import ChefServiceForm from "./components/ChefServiceForm";
import ChefServices from "./components/homepage/ChefServices";

function App() {
  // Sample recipe data
  const featuredRecipes = [
    {
      id: 1,
      title: "Classic Spaghetti Carbonara",
      description: "Creamy Italian pasta with eggs, cheese, and pancetta",
      cookTime: "30 mins",
      servings: "4",
      rating: 4.8,
      image: "/api/placeholder/400/300",
      tags: ["Italian", "Quick", "Dinner"],
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description: "Tender chicken in a spiced curry sauce with rice",
      cookTime: "45 mins",
      servings: "6",
      rating: 4.6,
      image: "/api/placeholder/400/300",
      tags: ["Indian", "Spicy", "Dinner"],
    },
    {
      id: 3,
      title: "Chocolate Fudge Brownies",
      description: "Rich, chewy brownies with a crispy top",
      cookTime: "35 mins",
      servings: "12",
      rating: 4.9,
      image: "/api/placeholder/400/300",
      tags: ["Dessert", "Chocolate", "Baking"],
    },
  ];

  // Function to scroll to chef booking form
  const scrollToBookingForm = () => {
    const element = document.getElementById('chef-booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <NavigationHeader />

      {/* Hero Section */}
      <HomePageHero onBookChef={scrollToBookingForm} />

      {/* Chef Services Overview */}
      {/* <section className="py-8 bg-white">
        {/* <div className="container mx-auto px-4"> */}
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Chef Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bring restaurant-quality dining to your home with our professional chef services. 
              From daily meal preparation to special event catering.
            </p>
          </div> */}
          
          {/* Chef Services */}
          {/* <ChefServices scrollToBookingForm={scrollToBookingForm}/> */}

          {/* Call to Action */}
          {/* <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Book Your Personal Chef?</h3>
            <p className="mb-6 text-orange-100">
              Get a customized quote for your specific needs. Our chefs are ready to create 
              an amazing culinary experience for you.
            </p>
            <Button 
              onClick={scrollToBookingForm}
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              <ChefHat className="mr-2 h-5 w-5" />
              Book Chef Service
            </Button>
          </div> */}
        {/* </div> */}
      {/* </section>  */}

      {/* Chef Service Booking Form Section */}
      <section id="chef-booking-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ChefServiceForm />
        </div>
      </section>

      {/* Featured Categories */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">
                    {category.count} recipes
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Recipes */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Recipes</h2>
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{recipe.rating}</span>
                    </div>
                    <div className="flex gap-2">
                      {recipe.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription>{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {recipe.cookTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {recipe.servings} servings
                    </div>
                  </div>
                  <Button className="w-full mt-6">View Recipe</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose CookingGenie?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated Recipes</h3>
              <p className="text-gray-600">
                Every recipe is tested by our chefs for guaranteed deliciousness
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User Ratings</h3>
              <p className="text-gray-600">
                Real reviews from home cooks like you
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Favorites</h3>
              <p className="text-gray-600">
                Build your personal recipe collection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <NewsLetter /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;