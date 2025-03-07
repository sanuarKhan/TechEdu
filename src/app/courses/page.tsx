import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-8">
        <Link href="/">
          <Button
            variant="outline"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Button>
        </Link>
      </div>
      <Card className="backdrop-blur-sm bg-white/50 border-none shadow-xl">
        <CardHeader className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Explore Our Courses
          </h1>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-center text-gray-600 mb-12">
            Discover a world of knowledge with our expertly crafted courses
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/70">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src="/butterfly.jpg"
                    alt="Course thumbnail"
                    className="object-cover w-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Introduction to Programming
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    10 hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    20 lectures
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Learn the basics of programming with Python in this
                  comprehensive course.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/70">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src="/butterfly.avif"
                    alt="Course thumbnail"
                    className="object-cover w-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Web Development Fundamentals
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    12 hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    24 lectures
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Master HTML, CSS, and JavaScript basics for modern web
                  development.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/70">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src="/butterfly-1.jpg"
                    alt="Course thumbnail"
                    className="object-cover w-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  React Development
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    15 hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    30 lectures
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Build modern web applications with React and its ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/70">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src="/butterfly-2.jpg"
                    alt="Course thumbnail"
                    className="object-cover w-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Node.js Backend Development
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    14 hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    28 lectures
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Create scalable backend services with Node.js and Express.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/70">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src="/butterfly-3.jpg"
                    alt="Course thumbnail"
                    className="object-cover w-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Database Design
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    16 hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    32 lectures
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Master SQL and modern database management systems.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/70">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src="/butterfly-4.jpg"
                    alt="Course thumbnail"
                    className="object-cover w-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Mobile App Development
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    20 hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    40 lectures
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Create stunning mobile apps with React Native.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/70">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src="/butterflies-5.jpg"
                    alt="Course thumbnail"
                    className="object-cover w-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Cloud Computing
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    18 hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    36 lectures
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Master AWS cloud services and modern deployment strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/70">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src="/butterfly-6.jpg"
                    alt="Course thumbnail"
                    className="object-cover w-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  AI & Machine Learning
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    25 hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    50 lectures
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Dive into AI and machine learning fundamentals.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/70">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src="/butterfly-7.jpg"
                    alt="Course thumbnail"
                    className="object-cover w-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Cybersecurity Fundamentals
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    22 hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    44 lectures
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Master essential cybersecurity principles and practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
