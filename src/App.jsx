import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ChefHat, Search, BookOpen, Star, Clock, Users, Heart, ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      tags: ["Italian", "Quick", "Dinner"]
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description: "Tender chicken in a spiced curry sauce with rice",
      cookTime: "45 mins",
      servings: "6",
      rating: 4.6,
      image: "/api/placeholder/400/300",
      tags: ["Indian", "Spicy", "Dinner"]
    },
    {
      id: 3,
      title: "Chocolate Fudge Brownies",
      description: "Rich, chewy brownies with a crispy top",
      cookTime: "35 mins",
      servings: "12",
      rating: 4.9,
      image: "/api/placeholder/400/300",
      tags: ["Dessert", "Chocolate", "Baking"]
    }
  ]

  const categories = [
    { name: "Breakfast", icon: "☀️", count: 150 },
    { name: "Lunch", icon: "🍽️", count: 200 },
    { name: "Dinner", icon: "🌙", count: 350 },
    { name: "Desserts", icon: "🍰", count: 120 },
    { name: "Vegetarian", icon: "🥗", count: 180 },
    { name: "Quick Meals", icon: "⚡", count: 90 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">CookingGenie</span>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Recipes</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500/50 to-orange-700/50 p-6 no-underline outline-none focus:shadow-md" href="/">
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Explore Recipes
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Discover thousands of recipes from around the world
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid gap-3">
                        {categories.slice(0, 3).map((category) => (
                          <a key={category.name} href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none flex items-center gap-2">
                              <span>{category.icon}</span> {category.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {category.count} recipes
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="#">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="#">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search and Sign In */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input className="pl-10 w-64" placeholder="Search recipes..." />
              </div>
              <Button variant="ghost">Sign In</Button>
              <Button>Sign Up</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Recipes</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
              <div className="pt-4 pb-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input className="pl-10 w-full" placeholder="Search recipes..." />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" className="flex-1">Sign In</Button>
                <Button className="flex-1">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-orange-500 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Culinary Magic
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Explore thousands of recipes, from quick weeknight dinners to gourmet masterpieces. Your perfect recipe is just a search away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Recipes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} recipes</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gray-50">
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
              <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                        <Badge key={tag} variant="secondary">{tag}</Badge>
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CookingGenie?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated Recipes</h3>
              <p className="text-gray-600">Every recipe is tested by our chefs for guaranteed deliciousness</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User Ratings</h3>
              <p className="text-gray-600">Real reviews from home cooks like you</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Favorites</h3>
              <p className="text-gray-600">Build your personal recipe collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Recipe Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get weekly recipe inspiration delivered to your inbox and be the first to know about new features.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white text-gray-900"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-white">CookingGenie</span>
              </div>
              <p className="text-gray-400">
                Your trusted source for delicious recipes and cooking inspiration.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">All Recipes</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Breakfast</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Lunch</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Dinner</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Desserts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 CookingGenie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App