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
          <a href="#solutions" className="hover:underline">
            Solutions
          </a>
          <a href="#platform" className="hover:underline">
            Clientele
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
              href="#solutions"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#platform"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Clientele
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
        className="min-h-screen bg-green-900 w-full flex flex-col justify-center pt-20"
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
        className="bg-green-50 min-h-screen flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64 py-12"
      >
        <section className="space-y-4">
          <h2 className="text-2xl text-center sm:text-3xl font-semibold font-sans">
            Who We Are
          </h2>
          <p className="font-light text-base sm:text-lg">
            Before partnering with us, we invite you to explore the values that
            define the core of who we are, the goals that drives our work, and
            the kind of partnerships we strive to build.
          </p>{" "}
          <h2 className="text-2xl text-center sm:text-3xl font-semibold font-sans">
            Our Core
          </h2>
          <p className="font-light text-base sm:text-lg">
            Rooted in the meaning of "Ikore" — harvest — we at Ikore Solutions
            and Technology believe that the Lord is the giver of every good
            harvest. Guided by this truth, we are passionate about crafting
            innovative technologies that inspire growth, transform lives, and
            empower businesses. ​ Backed by a team of professionals we serve
            industry leaders, entrepreneurs, businesses, and individuals with
            bold ideas — delivering tailored digital solutions that turn visions
            into reality and fuel lasting impact.{" "}
          </p>
          <h2 className="text-2xl text-center sm:text-3xl font-semibold font-sans">
            Our Goal
          </h2>
          <p className="font-light text-base sm:text-lg">
            At Ikore Solutions and Technology, our goal is to empower our
            clients to create innovative technological solutions that elevate
            customer experiences, optimise operational systems, and unlock their
            highest levels of efficiency, effectiveness, and influence.
          </p>
        </section>
      </div>

      {/* Solutions */}
      <div
        id="solutions"
        className="bg-green-900  min-h-screen flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64 py-12"
      >
        <section>
          <h2 className="text-2xl text-white text-center sm:text-3xl font-semibold font-sans mb-6">
            Our Solutions
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold font-sans">
                  Business Optimisation Solutions
                </h3>
                <p>
                  We design and implement smart software and system solutions
                  that streamline operations, boost productivity, and drive
                  business growth..
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold font-sans">
                  Custom Software Development
                </h3>
                <p>
                  Bring your ideas to life with tailored software solutions
                  built to meet your unique needs and push your vision forward.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold font-sans">
                  Technology Innovation Support
                </h3>
                <p>
                  From concept to creation, we partner with you to develop
                  cutting-edge technology that transforms industries and sets
                  new standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold font-sans">
                  End-to-End Digital Solutions
                </h3>
                <p>
                  Whether you're enhancing existing systems or building from
                  scratch, we deliver end-to-end digital strategies that power
                  success.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold font-sans">
                  Tech Event Hosting & Community Engagement
                </h3>
                <p>
                  We curate and facilitate dynamic technology showcases,
                  hackathons and sessions that bridge the gap between users and
                  innovation.{" "}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold font-sans">
                  Innovation Mentorship & Tech Incubation{" "}
                </h3>
                <p>
                  Through mentorship, strategic guidance, and tailored technical
                  support, we help individuals and early-stage teams develop
                  viable, impactful tech solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <div
        id="platform"
        className="bg-green-50 min-h-[400px] flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-12"
      >
        <section>
          <h2 className="text-2xl text-center sm:text-3xl font-semibold font-sans mb-6">
            Our Clientele
          </h2>
          <div className="grid gap-4 sm:grid-cols-4">
            <Card className="bg-green-900">
              <CardContent className="p-4 text-center flex flex-col gap-3">
                <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                  Businesses
                </h3>
                <p className="text-white">
                  seeking to optimise their systems and elevate performance
                  through tailored software solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-900">
              <CardContent className="p-4 text-center flex flex-col gap-3">
                <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                  Industry Leaders
                </h3>
                <p className="text-white">
                  aiming to transform or refine the technologies and systems
                  driving their sectors forward.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-900">
              <CardContent className="p-4 text-center flex flex-col gap-3">
                <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                  Entrepreneurs
                </h3>
                <p className="text-white">
                  bringing bold, ground-breaking innovations to life through
                  strategic tech development.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-900">
              <CardContent className="p-4 text-center flex flex-col gap-3">
                <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                  Visionaries
                </h3>
                <p className="text-white">
                  with powerful ideas that hold the potential to reshape
                  industries and create lasting impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-green-900 min-h-screen pt-40 px-4 sm:px-6 md:px-20 lg:px-32 py-16 space-y-12"
      >
        <h2 className="text-4xl font-bold font-sans text-center text-white">
          Contact Us
        </h2>
        <p className="text-center text-gray-600  text-white">
          To get in contact with us fill in the form and we'll get back to you.
        </p>
        <form className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-md h-32"
            required
          ></textarea>
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 px-4 sm:px-6 md:px-20 lg:px-32 space-y-4">
        <div className="text-center">
          <p className="font-semibold">
            IKORE Solutions and Technology​ PTY (LTD)
          </p>
          <p>
            Corner Tyrwhitt and, 24 Cradock Ave, Rosebank, Johannesburg, 2196
          </p>
          <p>info@ikoresolutionsandtech.com</p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            POPIA
          </a>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter">
              🐦
            </a>
            <a href="#" aria-label="LinkedIn">
              💼
            </a>
            <a href="#" aria-label="Facebook">
              📘
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
