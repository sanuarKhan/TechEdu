"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/cyber-inspired logo.webp"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TechEdu
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/courses">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
              >
                Courses
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
              >
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
              >
                Contact
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/courses">
                <Button
                  variant="ghost"
                  className="w-full text-left text-gray-300 hover:text-white"
                >
                  Courses
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="w-full text-left text-gray-300 hover:text-white"
                >
                  About
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  className="w-full text-left text-gray-300 hover:text-white"
                >
                  Contact
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
