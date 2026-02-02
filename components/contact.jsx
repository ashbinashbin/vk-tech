import {
  FiMail,
  FiMessageCircle,
  FiHelpCircle,
} from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-[#f8f9fc] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-block text-sm font-medium text-blue-600 bg-blue-100 px-4 py-1 rounded-full mb-4">
            Get in Touch
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Contact Us
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Have questions? We’d love to hear from you. Send us a message and we’ll
            respond as soon as possible.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* FORM */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us how we can help you..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-400 text-right mt-1">
                  0 / 500 characters
                </p>
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO CARDS */}
          <div className="space-y-5">

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                <FiMail />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email Us</h4>
                <p className="text-sm text-gray-500">
                  Our team is here to help you
                </p>
                <a
                  href="mailto:support@vk.com"
                  className="text-sm text-blue-600 font-medium"
                >
                  support@vk.com
                </a>
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                <FiMessageCircle />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Live Chat</h4>
                <p className="text-sm text-gray-500">
                  Monday–Friday, 9AM–6PM
                </p>
                <span className="text-sm text-blue-600 font-medium cursor-pointer">
                  Start a conversation
                </span>
              </div>
            </div>

            {/* Help Center */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                <FiHelpCircle />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Help Center</h4>
                <p className="text-sm text-gray-500">
                  Find answers to common questions
                </p>
                <span className="text-sm text-blue-600 font-medium cursor-pointer">
                  Visit Help Center
                </span>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-blue-600 rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <p className="text-sm text-blue-100 mb-4">
                Stay connected on social media
              </p>

              <div className="flex gap-3">
                <SocialIcon><FaFacebookF /></SocialIcon>
                <SocialIcon><FaTwitter /></SocialIcon>
                <SocialIcon><FaInstagram /></SocialIcon>
                <SocialIcon><FaLinkedinIn /></SocialIcon>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
      {children}
    </div>
  );
}
