import * as React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChefHat, MapPin, Mail, Utensils } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ChefServiceForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    serviceType: '',
    eventDate: '',
    eventTime: '',
    numberOfGuests: '',
    numberOfDishes: '',
    spiceLevel: '',
    cuisinePreferences: [],
    dietaryRestrictions: [],
    mealType: '',
    budget: '',
    kitchenAccess: '',
    specialRequests: ''
  });

  const serviceTypes = [
    { value: 'personal-chef', label: 'Personal Chef (Daily/Weekly)' },
    { value: 'event-catering', label: 'Event Catering' },
    { value: 'cooking-class', label: 'Private Cooking Class' },
    { value: 'meal-prep', label: 'Meal Prep Service' },
    { value: 'special-occasion', label: 'Special Occasion Dinner' }
  ];

  const cuisineOptions = [
    'North Indian', 'South Indian', 'Chinese', 'Continental', 
    'Italian', 'Mexican', 'Thai', 'Japanese', 'Mediterranean', 'Fusion'
  ];

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Jain', 'Gluten-Free', 
    'Dairy-Free', 'Keto', 'Low-Carb', 'Diabetic-Friendly'
  ];

  const mealTypes = [
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
    { value: 'all-meals', label: 'All Meals' },
    { value: 'snacks-appetizers', label: 'Snacks & Appetizers' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCuisineToggle = (cuisine) => {
    setFormData(prev => ({
      ...prev,
      cuisinePreferences: prev.cuisinePreferences.includes(cuisine)
        ? prev.cuisinePreferences.filter(c => c !== cuisine)
        : [...prev.cuisinePreferences, cuisine]
    }));
  };

  const handleDietaryToggle = (dietary) => {
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(dietary)
        ? prev.dietaryRestrictions.filter(d => d !== dietary)
        : [...prev.dietaryRestrictions, dietary]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Booking request submitted! We will contact you shortly.');
  };

  return (
    <Card className="shadow-lg max-w-8xl mx-auto">
      <CardHeader className="py-4 text-center bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ChefHat className="h-8 w-8" />
          <CardTitle className="text-3xl">Professional Chef Services</CardTitle>
        </div>
        <CardDescription className="text-orange-100">
        Bring restaurant-quality dining to your home with our professional chef services. From daily meal preparation to special event catering.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <div className="space-y-8">
          
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 border-b pb-2">
              <Mail className="h-5 w-5 text-orange-500" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 border-b pb-2">
              <MapPin className="h-5 w-5 text-orange-500" />
              Service Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-3">
                <Label htmlFor="address">Complete Address *</Label>
                <Textarea
                  id="address"
                  placeholder="House/Flat No, Street, Area, Landmark"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="pincode">PIN Code *</Label>
                <Input
                  id="pincode"
                  placeholder="110001"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 border-b pb-2">
              <ChefHat className="h-5 w-5 text-orange-500" />
              Service Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Service Type *</Label>
                <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Meal Type *</Label>
                <Select onValueChange={(value) => handleInputChange('mealType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select meal type" />
                  </SelectTrigger>
                  <SelectContent>
                    {mealTypes.map((meal) => (
                      <SelectItem key={meal.value} value={meal.value}>
                        {meal.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="eventDate">Event Date *</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => handleInputChange('eventDate', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="eventTime">Preferred Time *</Label>
                <Input
                  id="eventTime"
                  type="time"
                  value={formData.eventTime}
                  onChange={(e) => handleInputChange('eventTime', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="numberOfGuests">Number of Guests *</Label>
                <Select onValueChange={(value) => handleInputChange('numberOfGuests', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select guest count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 people</SelectItem>
                    <SelectItem value="6-10">6-10 people</SelectItem>
                    <SelectItem value="11-20">11-20 people</SelectItem>
                    <SelectItem value="21-50">21-50 people</SelectItem>
                    <SelectItem value="50+">50+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="numberOfDishes">Number of Dishes *</Label>
                <Select onValueChange={(value) => handleInputChange('numberOfDishes', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select dish count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-5">3-5 dishes</SelectItem>
                    <SelectItem value="6-8">6-8 dishes</SelectItem>
                    <SelectItem value="9-12">9-12 dishes</SelectItem>
                    <SelectItem value="12+">12+ dishes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Spice Level *</Label>
                <RadioGroup
                  value={formData.spiceLevel}
                  onValueChange={(value) => handleInputChange('spiceLevel', value)}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mild" id="mild" />
                    <Label htmlFor="mild">Mild</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="spicy" id="spicy" />
                    <Label htmlFor="spicy">Spicy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="extra-spicy" id="extra-spicy" />
                    <Label htmlFor="extra-spicy">Extra Spicy</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>Budget Range *</Label>
                <Select onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                    <SelectItem value="10000-20000">₹10,000 - ₹20,000</SelectItem>
                    <SelectItem value="20000-35000">₹20,000 - ₹35,000</SelectItem>
                    <SelectItem value="35000-50000">₹35,000 - ₹50,000</SelectItem>
                    <SelectItem value="50000+">₹50,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Kitchen Access *</Label>
              <RadioGroup
                value={formData.kitchenAccess}
                onValueChange={(value) => handleInputChange('kitchenAccess', value)}
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="full-access" id="full-access" />
                  <Label htmlFor="full-access">Full Kitchen Access</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="limited-access" id="limited-access" />
                  <Label htmlFor="limited-access">Limited Access</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="chef-brings-equipment" id="chef-brings-equipment" />
                  <Label htmlFor="chef-brings-equipment">Chef Brings Equipment</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Cuisine Preferences */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 border-b pb-2">
              <Utensils className="h-5 w-5 text-orange-500" />
              Cuisine Preferences
            </h3>
            <div>
              <Label className="text-base">Select Your Preferred Cuisines (Multiple Selection)</Label>
              <div className="flex flex-wrap gap-2 mt-3">
                {cuisineOptions.map((cuisine) => (
                  <Badge
                    key={cuisine}
                    variant={formData.cuisinePreferences.includes(cuisine) ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-2 transition-colors ${
                      formData.cuisinePreferences.includes(cuisine)
                        ? 'bg-orange-500 hover:bg-orange-600'
                        : 'hover:bg-orange-50'
                    }`}
                    onClick={() => handleCuisineToggle(cuisine)}
                  >
                    {cuisine}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Dietary Restrictions */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Dietary Restrictions & Allergies</h3>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((dietary) => (
                <Badge
                  key={dietary}
                  variant={formData.dietaryRestrictions.includes(dietary) ? "default" : "outline"}
                  className={`cursor-pointer px-3 py-2 transition-colors ${
                    formData.dietaryRestrictions.includes(dietary)
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'hover:bg-red-50'
                  }`}
                  onClick={() => handleDietaryToggle(dietary)}
                >
                  {dietary}
                </Badge>
              ))}
            </div>
          </div>

          {/* Special Requirements */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Additional Requirements</h3>
            <div>
              <Label htmlFor="specialRequests">Special Requests or Instructions</Label>
              <Textarea
                id="specialRequests"
                placeholder="Any specific dishes, cooking methods, presentation style, or other special requirements..."
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                rows={4}
                className="mt-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              onClick={handleSubmit}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-3 text-lg font-semibold shadow-lg"
            >
              <ChefHat className="mr-2 h-5 w-5" />
              Book Chef Service
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}