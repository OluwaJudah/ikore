"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Code2,
  Lightbulb,
  Globe,
  Rocket,
  Building2,
  ShieldCheck,
  UserCheck,
  Sparkles,
  Users,
  Target,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Footer from "@/components/Footer";

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
        <Link href="/" className="text-lg font-bold h-[20px] flex items-center">
          <Image src="/Logo.png" alt="El-Kore Logo" width={100} height={10} />
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="#hero" className="hover:underline">
            Home
          </Link>
          <Link href="#about" className="hover:underline">
            About Us
          </Link>
          <Link href="#solutions" className="hover:underline">
            Solutions
          </Link>
          <Link href="#platform" className="hover:underline">
            Clientele
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
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
            <Link
              href="#hero"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#solutions"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#platform"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Clientele
            </Link>
            <Link
              href="#contact"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
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
          className="flex justify-center items-center gap-8 px-2 sm:px-0 md:px-0 lg:px-5 xl:px-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          <h1 className="text-white font-extrabold font-sans text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] leading-[1]">
            El-Kore
          </h1>
        </motion.div>
        <motion.section
          className="text-center space-y-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold font-sans">
            Harvesting possibility through innovation and technology
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-normal font-montserrat">
            We invite you to partner with us and explore the possibilities of
            creation utilising technology and innovation.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#contact">
              <Button>Request a Demo</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline">Get Started</Button>
            </Link>
          </div>
        </motion.section>
      </motion.div>

      {/* About Us */}
      <AnimatedSection>
        <div
          id="about"
          className="bg-green-50 min-h-[400px] flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-32 md:py-28 scroll-mt-12"
        >
          <section>
            <h2 className="text-2xl text-center sm:text-3xl font-semibold font-sans mb-6">
              About Us
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="bg-green-800">
                <CardContent className="p-4 text-center flex flex-col items-center gap-3">
                  <Target className="text-white" size={40} />
                  <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                    Our Goal
                  </h3>
                  <p className="text-white font-light text-sm">
                    At El-Kore Tech, our goal is to empower our clients to
                    create innovative technological solutions that elevate
                    customer experiences, optimise operational systems, and
                    unlock their highest levels of efficiency, effectiveness,
                    and influence.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-800">
                <CardContent className="p-4 text-center flex flex-col items-center gap-3">
                  <Leaf className="text-white" size={40} />
                  <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                    Our Core
                  </h3>
                  <p className="text-white font-light text-sm">
                    Our identity is rooted in the belief that the Lord — El —
                    has released His harvest, or Ikore. Guided by this belief,
                    we are passionate about crafting innovative technologies
                    that inspire growth, transform lives, and empower
                    businesses. ​ Backed by a team of professionals we serve
                    industry leaders, entrepreneurs, businesses, and individuals
                    with bold ideas — delivering tailored digital solutions that
                    turn visions into reality and fuel lasting impact.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-800">
                <CardContent className="p-4 text-center flex flex-col items-center gap-3">
                  <Users className="text-white" size={40} />
                  <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                    Our Methodology
                  </h3>
                  <p className="text-white font-light text-sm">
                    We begin by listening — to businesses needing smarter
                    systems, and to visionaries with bold ideas. Then with our
                    capable team we design, build, and nurture the right
                    innovations that bring ideas to life and help systems flow
                    with purpose.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </AnimatedSection>

      {/* Solutions */}
      <AnimatedSection>
        <div
          id="solutions"
          className="bg-green-900 min-h-screen flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-64 py-32 md:py-12 scroll-mt-12"
        >
          <section>
            <h2 className="text-2xl text-white text-center sm:text-3xl font-semibold font-sans mb-6">
              Our Solutions
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-center">
              <Card>
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <Briefcase size={40} />
                  <h3 className="text-lg sm:text-xl font-semibold font-sans">
                    Business Optimisation Solutions
                  </h3>
                  <p className="font-light text-sm">
                    We design and implement smart software and system solutions
                    that streamline operations, boost productivity, and drive
                    business growth..
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <Code2 size={40} />
                  <h3 className="text-lg sm:text-xl font-semibold font-sans">
                    Custom Software Development
                  </h3>
                  <p className="font-light text-sm">
                    Bring your ideas to life with tailored software solutions
                    built to meet your unique needs and push your vision
                    forward.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <Lightbulb size={40} />
                  <h3 className="text-lg sm:text-xl font-semibold font-sans">
                    Technology Innovation Support
                  </h3>
                  <p className="font-light text-sm">
                    From concept to creation, we partner with you to develop
                    cutting-edge technology that transforms industries and sets
                    new standards.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <Globe size={40} />
                  <h3 className="text-lg sm:text-xl font-semibold font-sans">
                    End-to-End Digital Solutions
                  </h3>
                  <p className="font-light text-sm">
                    Whether you're enhancing existing systems or building from
                    scratch, we deliver end-to-end digital strategies that power
                    success.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <Users size={40} />
                  <h3 className="text-lg sm:text-xl font-semibold font-sans">
                    Tech Event Hosting & Community Engagement
                  </h3>
                  <p className="font-light text-sm">
                    We curate and facilitate dynamic technology showcases,
                    hackathons and sessions that bridge the gap between users
                    and innovation.{" "}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <Rocket size={40} />
                  <h3 className="text-lg sm:text-xl font-semibold font-sans">
                    Innovation Mentorship & Tech Incubation{" "}
                  </h3>
                  <p className="font-light text-sm">
                    Through mentorship, strategic guidance, and tailored
                    technical support, we help individuals and early-stage teams
                    develop viable, impactful tech solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div
          id="platform"
          className="bg-green-50 min-h-[400px] flex flex-col justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-32 md:py-28 scroll-mt-14"
        >
          <section>
            <h2 className="text-2xl text-center sm:text-3xl font-semibold font-sans mb-6">
              Our Clientele
            </h2>
            <div className="grid gap-4 sm:grid-cols-4">
              <Card className="bg-green-800">
                <CardContent className="p-4 text-center flex flex-col items-center gap-3">
                  <Building2 className="text-white" size={40} />
                  <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                    Businesses
                  </h3>
                  <p className="text-white font-light text-sm">
                    Seeking to optimise their systems and elevate performance
                    through tailored software solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-800">
                <CardContent className="p-4 text-center flex flex-col items-center gap-3">
                  <ShieldCheck className="text-white" size={40} />
                  <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                    Industry Leaders
                  </h3>
                  <p className="text-white font-light text-sm">
                    Aiming to transform or refine the technologies and systems
                    driving their sectors forward.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-800">
                <CardContent className="p-4 text-center flex flex-col items-center gap-3">
                  <UserCheck className="text-white" size={40} />
                  <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                    Entrepreneurs
                  </h3>
                  <p className="text-white font-light text-sm">
                    Bringing bold, ground-breaking innovations to life through
                    strategic tech development.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-800">
                <CardContent className="p-4 text-center flex flex-col items-center gap-3">
                  <Sparkles className="text-white" size={40} />
                  <h3 className="text-lg text-white sm:text-xl font-semibold font-sans">
                    Visionaries
                  </h3>
                  <p className="text-white font-light text-sm">
                    With powerful ideas that hold the potential to reshape
                    industries and create lasting impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
