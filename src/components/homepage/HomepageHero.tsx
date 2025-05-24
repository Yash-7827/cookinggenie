import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button";
import * as React from "react";

const HomePageHero = () => {
    return <section className="relative bg-orange-500 text-white">
    <div className="absolute inset-0 bg-black opacity-12"></div>
    <div className="relative container mx-auto px-4 py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Your Culinary Magic
        </h1>
        <p className="text-xl mb-8 text-orange-100">
          Explore thousands of recipes, from quick weeknight dinners to
          gourmet masterpieces. Your perfect recipe is just a search away.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-white text-orange-500 hover:bg-gray-100"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Browse Recipes
          </Button>
        </div> */}
      </div>
    </div>
  </section>
}

export default HomePageHero;