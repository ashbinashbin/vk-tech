"use client";

import FeatureCard from "./FeatureCard";
import {
  FaBook,
  FaUserTie,
  FaCertificate,
  FaClock,
  FaPlayCircle,
  FaComments,
  FaFileAlt,
  FaChartLine,
  FaMobileAlt,
  FaUsers,
  FaInfinity,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChooseVK() {
  const features = [
    { icon: FaBook, title: "Comprehensive Course Library", description: "Access thousands of expert-led courses across domains." },
    { icon: FaUserTie, title: "Expert Instructors", description: "Learn from certified professionals with industry experience." },
    { icon: FaCertificate, title: "Certification Programs", description: "Earn recognized certificates after course completion." },
    { icon: FaClock, title: "Learn at Your Own Pace", description: "Flexible schedules that fit your lifestyle." },
    { icon: FaPlayCircle, title: "HD Video Lectures", description: "High-quality videos with practical explanations." },
    { icon: FaComments, title: "Interactive Q&A", description: "Ask questions and engage with instructors." },
    { icon: FaFileAlt, title: "Practice Assignments", description: "Hands-on exercises and real-world case studies." },
    { icon: FaChartLine, title: "Progress Tracking", description: "Track progress with detailed analytics." },
    { icon: FaMobileAlt, title: "Mobile Learning", description: "Learn anywhere with mobile-friendly access." },
    { icon: FaUsers, title: "Community Support", description: "Join discussions and professional networks." },
    { icon: FaInfinity, title: "Lifetime Access", description: "Unlimited access to course materials forever." },
    { icon: FaHeadset, title: "24/7 Support", description: "Dedicated support whenever you need help." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-medium mb-2">☆ Why Choose VK</p>
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover powerful features designed to enhance your learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="max-w-6xl mx-auto mt-20">
            <div className="bg-blue-600 text-white text-center py-14 px-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3">
                Ready to Start Your Learning Journey?
                </h3>
                <p className="opacity-90 mb-8">
                join thousands of professionals advancing their careers with VK
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get started today
                </button>
            </div>
        </div>

    </section>
  );
}
