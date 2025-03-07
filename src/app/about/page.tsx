"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Instructor",
      bio: "10+ years experience in tech education",
      avatar: "👩‍🏫",
    },
    {
      name: "David Chen",
      role: "Technical Director",
      bio: "Former Senior Engineer at Google",
      avatar: "👨‍💻",
    },
    {
      name: "Maria Garcia",
      role: "Curriculum Designer",
      bio: "EdTech specialist & Course Creator",
      avatar: "👩‍🎨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            className="text-5xl font-bold text-gray-800 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              TechEdu
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We're passionate about making technology education accessible,
            engaging, and effective for everyone. Our platform combines expert
            instruction with innovative learning approaches.
          </motion.p>
        </div>

        {/* Mission Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-600">
              To empower individuals with the knowledge and skills needed to
              thrive in the digital age, fostering a community of lifelong
              learners and innovators.
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {member.name}
                  </CardTitle>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {[
            { label: "Students Taught", value: "10,000+" },
            { label: "Course Completion Rate", value: "94%" },
            { label: "Expert Instructors", value: "25+" },
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm border-none shadow-lg text-center"
            >
              <CardContent className="pt-6">
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
