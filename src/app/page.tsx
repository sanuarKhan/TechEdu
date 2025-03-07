import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Tech Potential
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Master the latest technologies with our expert-led courses
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-6 text-lg">
                Explore Courses
              </Button>
              <Button
                variant="outline"
                className="border-gray-500 text-gray-300 hover:text-white px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Web Development",
            "Data Science",
            "AI & ML",
            "Cloud Computing",
            "Cybersecurity",
            "Mobile Development",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Course Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Programming Fundamentals",
              description: "Master the basics of coding",
              icon: "💻",
              courses: 12,
            },
            {
              title: "Data Science & Analytics",
              description: "Learn to analyze big data",
              icon: "📊",
              courses: 8,
            },
            {
              title: "Cloud Technologies",
              description: "AWS, Azure, and more",
              icon: "☁️",
              courses: 10,
            },
          ].map((category) => (
            <Card
              key={category.title}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className="text-white">{category.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">
                    {category.courses} courses
                  </span>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Browse
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
