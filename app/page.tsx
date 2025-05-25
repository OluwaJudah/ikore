"use client";
import "@fontsource-variable/dm-sans";
import "@fontsource/eb-garamond";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="font-serif">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 py-4 px-6 flex justify-between items-center font-sans">
        <div className="text-lg font-bold">iKore</div>
        <div className="hidden md:flex gap-6">
          <a href="#hero" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#platform" className="hover:underline">
            Platform
          </a>
          <a href="#solutions" className="hover:underline">
            Solutions
          </a>
          <a href="#case-studies" className="hover:underline">
            Case Studies
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Side Menu for Mobile with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-4 md:hidden"
          >
            <button
              className="self-end text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            <a
              href="#hero"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#platform"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Platform
            </a>
            <a
              href="#solutions"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#case-studies"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.div
        id="hero"
        className="min-h-screen bg-green-800 w-full flex flex-col justify-center pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="flex justify-center items-center gap-8 px-4 sm:px-12 md:px-20 lg:px-40 xl:px-64"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          <h1 className="text-white font-extrabold font-sans text-[8rem] sm:text-[12rem] md:text-[18rem] lg:text-[24rem] xl:text-[32rem] leading-[1]">
            iKoré
          </h1>
        </motion.div>
        <motion.section
          className="text-center space-y-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold font-sans">
            Automate Your Workflow. Accelerate Your Business.
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-normal">
            Nexora uses AI to streamline repetitive tasks, optimize team
            performance, and unlock your company's full potential — all from one
            intuitive platform.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Request a Demo</Button>
            <Button variant="outline">Start Free Trial</Button>
          </div>
        </motion.section>
      </motion.div>
      {/* About Us */}
      <div
        id="about"
        className="min-h-screen flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64 py-12"
      >
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold font-sans">
            About Us
          </h2>
          <p className="font-light text-base sm:text-lg">
            At Nexora, our mission is to make automation accessible to every
            business so teams can focus on impactful work. Founded in 2022,
            we're helping companies scale smarter through intelligent
            automation.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base">
            <li>Mission: Bring automation to every business.</li>
            <li>Vision: Redefine how work gets done.</li>
            <li>Founded by experts from Zapier, MIT, and Google Workspace.</li>
          </ul>
        </section>
      </div>

      {/* Product Overview */}
      <div
        id="platform"
        className="min-h-screen flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64 py-12"
      >
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold font-sans">
            Our Platform
          </h2>
          <p className="font-light text-base sm:text-lg">
            Nexora brings all your business processes under one AI-powered roof
            — from task automation to predictive analytics.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base">
            <li>Workflow Designer</li>
            <li>Smart Triggers</li>
            <li>Analytics Dashboard</li>
            <li>200+ Integrations</li>
          </ul>
        </section>
      </div>

      {/* Solutions */}
      <div
        id="solutions"
        className="min-h-screen flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64 py-12"
      >
        <section className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold font-sans">
                Marketing Teams
              </h3>
              <p>Automate campaign tracking and lead nurturing.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold font-sans">
                HR & People Ops
              </h3>
              <p>Streamline onboarding and compliance tracking.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold font-sans">
                Finance Teams
              </h3>
              <p>Automate reporting and budget approvals.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold font-sans">
                IT & Support
              </h3>
              <p>Manage tickets and asset provisioning.</p>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Case Studies */}
      <div
        id="case-studies"
        className="min-h-screen flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64 py-12"
      >
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold font-sans">
            Success Stories
          </h2>
          <Card>
            <CardContent className="p-4">
              <blockquote className="italic font-light text-base sm:text-lg">
                "By using Nexora, we reduced our project turnaround time by 42%
                and saved over 400 staff hours per month."
              </blockquote>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                — Rachel T., Director of Operations at BrightTech
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="min-h-screen flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64 py-12"
      >
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold font-sans">
            Contact Us
          </h2>
          <p>Email: hello@nexora.ai</p>
          <p>Phone: +1 (888) 123-4567</p>
          <p>Address: 222 Innovation Way, San Francisco, CA</p>
        </section>
      </div>

      {/* CTA Section */}
      <section className="text-center space-y-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold font-sans">
          Ready to Automate Your Workflow?
        </h2>
        <p className="text-gray-600 font-light text-base sm:text-lg">
          Start your 14-day free trial or book a personalized demo today.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Book a Demo</Button>
          <Button variant="outline">Start Free Trial</Button>
        </div>
      </section>
    </div>
  );
}
