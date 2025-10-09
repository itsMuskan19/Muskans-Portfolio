import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import {
  ChevronRight,
  Download,
  Send,
  Menu,
  X,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF9E6]/95 backdrop-blur-lg shadow-sm"
            : "bg-[#FFF9E6]"
        }`}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-12 py-3 sm:py-4 lg:py-5 flex justify-between items-center">
          {/* Logo - Responsive sizing with clamp() and improved accessibility */}
          <a
            href="#home"
            className="logo transition-all duration-300 hover:scale-105  rounded-md px-2 py-1 no-underline visited:text-black hover:text-black active:text-black"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)", // Fluid typography: 28px to 48px
              lineHeight: "0.9",
            }}
            aria-label="Muskan Tomar Portfolio Home"
            text-black
          >
            MT
          </a>

          {/* Desktop Navigation - Tighter spacing */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link  text-black hover:text-gray-600 active:text-gray-600 transition-colors duration-200 font-medium relative group focus:outline-none px-3 py-2"
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 1.125rem)", // Fluid: 16px to 18px
                }}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                <span 
                  className="absolute bottom-0 left-3 w-0 bg-black transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-active:w-[calc(100%-1.5rem)]"
                  style={{
                    height: '0.5px',
                    borderBottom: '0.5px solid black'
                  }}
                ></span>
              </a>
            ))}
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center ml-4 lg:ml-6 hover:scale-110 transition-transform cursor-pointer">
              <ArrowUpRight color="white" size={16} />
            </div>
          </div>


          {/* Mobile Menu Button - Improved touch target */}
          <button
            className="md:hidden z-60 text-black p-2 hover:bg-black hover:text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation - Enhanced with better animation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-[#ece8d9] border-t border-black/10`}
        >
          <div className="px-4 sm:px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block !text-black hover:!text-gray-600 transition-colors duration-200 font-medium py-3 px-4 rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                style={{
                  fontSize: "clamp(1.125rem, 4vw, 1.25rem)", // Fluid: 18px to 20px
                }}
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Scrolling Text Bands */}
      {/* Scrolling Text Bands - Responsive */}
      <div className="absolute top-[60px] sm:top-[80px] lg:top-[95px] left-[-4%] w-[200%] h-[30px] sm:h-[35px] lg:h-[35px] bg-black -rotate-[4.8deg] z-1 flex items-center overflow-hidden">
        <div className="flex animate-scroll-text">
          <div
            className="text-white whitespace-nowrap flex-shrink-0"
            style={{
              fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)", // Fluid: 14px to 20px
            }}
          >
            FLUTTER DEVELOPER | PORTFOLIO | FLUTTER DEVELOPER | PORTFOLIO |
            FLUTTER DEVELOPER | PORTFOLIO | FLUTTER DEVELOPER | PORTFOLIO |
            FLUTTER DEVELOPER | PORTFOLIO | FLUTTER DEVELOPER | PORTFOLIO
          </div>
        </div>
      </div>

      <div className="absolute top-[120px] left-[-1%] w-[102%] h-[30px] lg:h-[35px] bg-black rotate-[1.5deg] z-10 flex items-center overflow-hidden">
        {" "}
        <div className="flex animate-scroll-text-reverse">
          <div className="text-white text-xl  whitespace-nowrap flex-shrink-0">
            FLUTTER DEVELOPER | PORTFOLIO | FLUTTER DEVELOPER | PORTFOLIO |
            FLUTTER DEVELOPER | PORTFOLIO | FLUTTER DEVELOPER | PORTFOLIO |
            FLUTTER DEVELOPER | PORTFOLIO | FLUTTER DEVELOPER | PORTFOLIO
            |&nbsp;
          </div>
          <div className="text-white text-xl  whitespace-nowrap flex-shrink-0">
            FLUTTER DEVELOPER | PORTFOLIO | FLUTTER DEVELOPER | PORTFOLIO |
            FLUTTER DEVELOPER | PORTFOLIO | FLUTTER DEVELOPER | PORTFOLIO |
            FLUTTER DEVELOPER | PORTFOLIO | FLUTTER DEVELOPER | PORTFOLIO
            |&nbsp;
          </div>
        </div>
      </div>
    </>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full pt-32 pb-16 px-4 sm:px-6 lg:px-12 bg-[#FFF9E6] relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="relative flex min-h-[60vh] sm:min-h-[70vh] w-full flex-col items-center justify-center bg-[#FFF9E6] p-6 sm:p-8 lg:p-12 text-center">
            <div className="max-w-7xl w-full">
              <h1 className="font-light leading-tight tracking-tight text-black text-[18px] sm:text-[20px] md:text-[28px] lg:text-[32px]">
                <span className="block">
                  Building cross-platform brilliance
                </span>
                <span className="block">for modern brands</span>
              </h1>

              {/* Arrow positioned near profile text */}
              <div className="absolute top-[15%] right-2 sm:right-8 lg:right-10 w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 bg-black rounded-full flex items-center justify-center text-white text-xl z-40">
                <ArrowDownLeft size={12} className="sm:size-4 lg:size-5" />
              </div>

              <button className="mt-8 rounded-lg border-2 border-black bg-transparent px-9 py-2 text-lg font-normal text-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
                Let's Start a Project Together
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image and Text */}
          <div className="relative h-[350px] sm:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end overflow-hidden z-20">
            {/* Hero Image Wrapper */}
            <div className="relative mr-0 sm:mr-5 lg:mr-15">
              {/* Profile Picture */}
              <img
                src="/assets/Frame 5.png"
                alt="Muskan Tomar"
                className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[320px] lg:h-[320px] object-cover z-20 -translate-x-6 sm:-translate-x-12 lg:-translate-x-20"
              />

              {/* Overflowing top image - Frame 6 */}
              <img
                src="/assets/Frame 6.png"
                alt="Muskan Frame 6"
                className="absolute w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[220px] lg:h-[220px] object-cover z-30 -translate-x-1 sm:-translate-x-3 lg:-translate-x-8 -top-10 sm:-top-16 lg:-top-16"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
                }}
              />

              {/* Colorful MUSKA Background Text */}
              <div className="absolute top-1/2 -right-12 sm:-right-24 lg:-right-40 transform -translate-y-1/2 z-10 flex flex-col pointer-events-none overflow-visible">
                {[
                  { text: "MUSKAN", color: "#808080" },
                  { text: "MUSKAN", color: "#4285F4" },
                  { text: "MUSKAN", color: "#EA4335" },
                  { text: "MUSKAN", color: "#FBBC04" },
                  { text: "MUSKAN", color: "#34A853" },
                  { text: "MUSKAN", color: "#000000" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-xl sm:text-4xl lg:text-8xl xl:text-8xl font-semibold font-black whitespace-nowrap leading-none opacity-50 sm:opacity-70 lg:opacity-80 overflow-visible"
                    style={{
                      color: item.color,
                      fontWeight: 900,
                      letterSpacing: "-1px",
                      lineHeight: "0.9",
                    }}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-25 -left-30 w-full z-30 overflow-hidden">
        <div className="text-4xl lg:text-8xl xl:text-8xl font-bold text-black tracking-wide px-7 lg:px-12 relative">
          MUSKAN TOMAR
          <sup className="text-2xl font-normal lg:text-4xl relative -top-14 -left-1 z-50 overflow-visible">
            ©
          </sup>
          -
          <sup className="text-2xl lg:text-4xl relative top-[-0.3em] ml-1"></sup>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const stats = [
    { number: "6+", label: "Years of\nExperience" },
    { number: "200+", label: "Project\nExperience" },
    { number: "40+", label: "Clients" },
  ];

  const techLogos = [
    "Flutter",
    "React",
    "Node.js",
    "WordPress",
    "Shopify",
    "C++",
    ".NET",
    "Unity",
  ];

  return (
    <section
      id="about"
      className="py-16 px-6 lg:px-12 bg-[#FFF9E6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Bio Section */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-20 items-center mb-12 sm:mb-16">
          {/* Left Side: Image with effects (takes 2 of 5 columns) */}
          <div className="lg:col-span-2 relative flex items-center h-[280px] sm:h-[400px] lg:h-[600px] -ml-2 sm:-ml-8 lg:-ml-45">
            {" "}
            {/* Background Vector Image - Increased Size */}{" "}
            <img
              src="/assets/Vector.png"
              alt="Gold background shape"
              className="absolute w-full max-w-xs sm:max-w-lg lg:max-w-2xl h-auto object-contain z-10 -left-2 sm:-left-4 lg:left-18 transform scale-50 sm:scale-70 lg:scale-80"
            />{" "}
            {/* Blur circle container */}{" "}
            <div
              className="absolute w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-[50%] z-20 left-6 sm:left-16 lg:left-43 overflow-hidden"
              style={{
                background: "#FFFFFF80",
                backdropFilter: "blur(1.5px)",
                border: "1px solid #FFFFFF30",
              }}
            ></div>{" "}
            {/* Overflowing bottom image */}{" "}
            <img
              src="/assets/img2.png"
              alt="Muskan Extended"
              className="absolute w-[140px] h-[140px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] object-cover z-30 left-6 sm:left-16 lg:left-40 bottom-6 sm:bottom-12 lg:bottom-14 scale-[1.25] -translate-y-[40%] overflow-hidden clip-bottom-half-circle"
              style={{
                borderRadius: "50%",
              }}
            />{" "}
          </div>

          <div className="lg:col-span-3 flex flex-col justify-center">
            <p className="text-lg sm:text-xl lg:text-[1.5rem] font-light leading-snug lg:leading-tight text-black mb-8 sm:mb-10">
              I am a{" "}
              <span className="font-medium text-lg sm:text-xl lg:text-[2.1rem] border-b-1 border-black/60">
                Flutter Developer
              </span>{" "}
              with{" "}
              <span className="font-medium text-lg sm:text-xl lg:text-[2.1rem] border-b-1 border-black/60">
                6+ years
              </span>{" "}
              of experience in{" "}
              <span className="font-medium text-lg sm:text-xl lg:text-[2.1rem] border-b-1 border-black/60">
                building cross-platform
              </span>{" "}
              mobile apps.{" "}
              <span className="font-medium text-lg sm:text-xl lg:text-[2.1rem] border-b-1 border-black/60">
                Skilled in Flutter, Node.js, and React Native
              </span>
              , I craft scalable, high-performance solutions with clean code,
              engaging design, and{" "}
              <span className="font-medium text-lg sm:text-xl lg:text-[2.1rem] border-b-1 border-black/60">
                impactful user experiences
              </span>
              .
            </p>
            <button className="bg-transparent border-2 border-black text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-lg sm:text-xl font-medium hover:bg-black hover:text-white transition-colors duration-300 self-center">
              View My Projects
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center sm:border-r sm:border-black sm:last:border-r-0 pr-0 sm:pr-4"
            >
              <div className="text-3xl sm:text-4xl lg:text-7xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-lg sm:text-xl lg:text-3xl font-light text-black whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          {" "}
          {/* Add top margin to space it from the stats section */}
          <div className="max-w-5xl mx-auto border-2 border-black rounded-xl p-4 sm:p-6">
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 sm:gap-x-8">
              {techLogos.map((tech, index) => {
                const logoFiles = {
                  Flutter: "/assets/logos/Flutter.svg",
                  React: "/assets/logos/react.svg",
                  "Node.js": "/assets/logos/Node.js.svg",
                  WordPress: "/assets/logos/WordPress.svg",
                  Shopify: "/assets/logos/shopify.png",
                  "C++": "/assets/logos/C++ (CPlusPlus).svg",
                  ".NET": "/assets/logos/NET core.svg",
                  Unity: "/assets/logos/Unity.svg",
                };

                return (
                  <div key={index} className="group relative">
                    <div className="h-16 w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                      <img
                        src={logoFiles[tech]}
                        alt={`${tech} logo`}
                        className="h-9 sm:h-10 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="w-10 h-10 bg-gray-100 rounded items-center justify-center text-xs font-bold text-gray-600 hidden"
                        style={{ display: "none" }}
                      >
                        {tech.substring(0, 2)}
                      </div>
                    </div>
                    {/* Tooltip remains for hover effect */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {tech}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: "UI/UX",
      title: "Custom UI/UX\nImplementation",
      description:
        "Creating intuitive and engaging user interfaces that provide seamless user experiences across all platforms.",
    },
    {
      icon: "📱",
      title: "Cross-Platform App\nDevelopment",
      description:
        "Building robust mobile applications that work perfectly on both iOS and Android using Flutter framework.",
    },
    {
      icon: "API",
      title: "API Integration & Backend\nConnectivity",
      description:
        "Seamlessly connecting your apps with backend services and third-party APIs for enhanced functionality.",
    },
  ];

  return (
    <section id="services" className="py-16 px-6 lg:px-12 bg-[#FFF9E6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-black mb-4 sm:mb-0">
            The Services we Offer{" "}
            <span className="text-lg sm:text-xl relative -top-4 sm:-top-7 -left-3">©</span>
          </h2>
          <div className="hidden md:flex items-center space-x-4 text-2xl font-light cursor-pointer hover:opacity-70 transition-opacity">
            <span className="text-black">View All</span>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
              <ArrowDownLeft size={20} />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 md:border-r md:border-black md:last:border-r-0 relative"
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-black rounded-full flex items-center justify-center text-white text-2xl lg:text-5xl font-bold mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl text-black font-normal mb-6 whitespace-pre-line min-h-[3rem]">
                {service.title}
              </h3>
              <p className="text-lg font-light text-black">
                {service.description}
              </p>
              <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center relative top-16">
          <button className="bg-transparent border-2 border-black text-black px-5 py-2 rounded-lg text-xl font-medium hover:bg-black hover:text-white transition-all duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

// Portfolio Component
const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Apptivo",
      description:
        "Apptivo CRM's website presents a unified, customizable platform with intuitive design, enterprise features, and seamless integrations—empowering businesses to manage leads, workflows, and customer relationships efficiently",
      images: [
        "/assets/projects/apptivo1.png",
        "/assets/projects/apptivo4.png",
        "/assets/projects/apptivo3.png",
        "/assets/projects/apptivo2.png",
        "/assets/projects/apptivo5.png",
      ],
    },
    {
      title: "Freecrm",
      description:
        "FREECRM offers powerful, free CRM tools for sales, marketing, and support—boosting productivity, lead conversion, and customer satisfaction with intuitive dashboards, automation, and mobile access",
      images: [
        "/assets/projects/freecrm1.png",
        "/assets/projects/freecrm2.png",
        "/assets/projects/freecrm3.png",
        "/assets/projects/freecrm4.png",
        "/assets/projects/freecrm5.png",
      ],
    },
    {
      title: "Pipedrive",
      description:
        "Pipedrive's website showcases a powerful, AI-driven CRM platform that streamlines sales pipelines, automates workflows, and boosts conversions with intuitive design, real-time insights, and smart integrations",
      images: [
        "/assets/projects/pipedrive1.png",
        "/assets/projects/pipedrive2.png",
        "/assets/projects/pipedrive3.png",
        "/assets/projects/pipedrive4.png",
        "/assets/projects/pipedrive5.png",
      ],
    },
    {
      title: "Timbuk Toys",
      description:
        "Timbuk Toys' website showcases a vibrant, community-focused toy store offering curated brands, playful experiences, and free gift wrapping—celebrating learning through play for all ages",
      images: [
        "/assets/projects/toys1.png",
        "/assets/projects/toys2.png",
        "/assets/projects/toys3.png",
        "/assets/projects/toys4.png",
        "/assets/projects/toys5.png",
      ],
      hidden: true,
    },
  ];

  return (
    <section
      id="work"
      className="py-16 px-6 lg:px-12 bg-[#FFF9E6] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-black mb-4 sm:mb-0">
            Portfolio Projects{" "}
            <span className="text-lg sm:text-xl relative -top-4 sm:-top-7 -left-3">©</span>
          </h2>
          <div className="hidden md:flex items-center space-x-4 text-xl lg:text-2xl font-light cursor-pointer hover:opacity-70 transition-opacity">
            <span>View All</span>
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center text-white">
              <ArrowDownLeft size={16} className="lg:size-5" />
            </div>
          </div>
        </div>

        {/* Portfolio Subtitle */}
        <p className="text-lg sm:text-xl lg:text-3xl font-light text-black mb-12 sm:mb-16 max-w-5xl">
          Showcasing a collection of my best live Flutter projects, highlighting
          innovative design, seamless functionality, and real-world impact
          across multiple platforms and industries.
        </p>

        {/* Projects */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                project.hidden && !showMore ? "hidden" : "block"
              } transition-all duration-500`}
            >
              {/* Project Title - Outside Container */}
              <div className="text-left mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-light text-black mb-4">
                  {project.title}{" "}
                  <span className="text-lg sm:text-xl relative -top-4 sm:-top-7 -left-3">©</span>
                </h3>
              </div>

              {/* Project Card */}
              <div className="bg-[#FFE8A8] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-4 sm:p-6 lg:p-12 relative overflow-hidden min-h-[250px] sm:min-h-[350px] lg:min-h-[500px]">
                {/* Mac mockup background */}
                <div
                  className={`absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-[600px] lg:h-[600px] opacity-4 sm:opacity-10
                    ${index % 2 === 0 ? "left-0 -top-8 sm:-top-16" : "right-0 -top-8 sm:-top-16"} 
                    transform rotate-12`}
                >
                  {/* Mac outline SVG */}
                  <svg viewBox="0 0 600 650" className="w-full h-full">
                    <rect
                      x="50"
                      y="50"
                      width="500"
                      height="350"
                      fill="white"
                      stroke="gray"
                      strokeWidth="2"
                      rx="10"
                    />
                    <rect
                      x="70"
                      y="70"
                      width="460"
                      height="310"
                      fill="#f0f0f0"
                    />
                    <rect
                      x="200"
                      y="420"
                      width="200"
                      height="20"
                      fill="gray"
                      rx="5"
                    />
                    <rect
                      x="150"
                      y="450"
                      width="300"
                      height="150"
                      fill="silver"
                      rx="5"
                    />
                  </svg>
                </div>

                {/* Screenshots */}
                <div className="absolute inset-0 z-10">
                  {project.images.slice(0, 5).map((image, imgIndex) => {
                    // Special positioning for freecrm1.png (first image in Freecrm project)
                    if (
                      imgIndex === 0 &&
                      image.includes("freecrm1.png") &&
                      project.title === "Freecrm"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute overflow-hidden"
                          style={{
                            width: "500.3997075721653px",
                            height: "509.6334101613191px",
                            top: "30px",
                            left: "655px",
                            transform: "rotate(14.15deg)",
                            opacity: 1,
                            zIndex: 1,
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for freecrm2.png (second image in Freecrm project)
                    if (
                      imgIndex === 1 &&
                      image.includes("freecrm2.png") &&
                      project.title === "Freecrm"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "141px",
                            top: "141px",
                            left: "90px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for freecrm3.png (third image in Freecrm project)
                    if (
                      imgIndex === 2 &&
                      image.includes("freecrm3.png") &&
                      project.title === "Freecrm"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "141px",
                            top: "80px",
                            left: "390px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for freecrm4.png (fourth image in Freecrm project)
                    if (
                      imgIndex === 3 &&
                      image.includes("freecrm4.png") &&
                      project.title === "Freecrm"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "141px",
                            top: "300px",
                            left: "90px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for freecrm5.png (fifth image in Freecrm project)
                    if (
                      imgIndex === 4 &&
                      image.includes("freecrm5.png") &&
                      project.title === "Freecrm"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "141px",
                            top: "240px",
                            left: "390px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for pipedrive1.png (first image in Pipedrive project)
                    if (
                      imgIndex === 0 &&
                      image.includes("pipedrive1.png") &&
                      project.title === "Pipedrive"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute overflow-hidden"
                          style={{
                            width: "550px",
                            height: "550px",
                            top: "-16px",
                            left: "-5px",
                            transform: "rotate(15.15deg)",
                            opacity: 1,
                            zIndex: 1,
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for pipedrive2.png (second image in Pipedrive project)
                    if (
                      imgIndex === 1 &&
                      image.includes("pipedrive2.png") &&
                      project.title === "Pipedrive"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "80px",
                            left: "520px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for pipedrive3.png (third image in Pipedrive project)
                    if (
                      imgIndex === 2 &&
                      image.includes("pipedrive3.png") &&
                      project.title === "Pipedrive"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "140px",
                            left: "820px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for pipedrive4.png (fourth image in Pipedrive project)
                    if (
                      imgIndex === 3 &&
                      image.includes("pipedrive4.png") &&
                      project.title === "Pipedrive"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "253px",
                            left: "520px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for pipedrive5.png (fifth image in Pipedrive project)
                    if (
                      imgIndex === 4 &&
                      image.includes("pipedrive5.png") &&
                      project.title === "Pipedrive"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "309px",
                            left: "820px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for toys1.png (first image in Timbuk Toys project)
                    if (
                      imgIndex === 0 &&
                      image.includes("toys1.png") &&
                      project.title === "Timbuk Toys"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute overflow-hidden"
                          style={{
                            width: "500.4000127479408px",
                            height: "553.8525875186264px",
                            top: "-11px",
                            left: "643px",
                            transform: "rotate(14.15deg)",
                            opacity: 1,
                            zIndex: 1,
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for toys2.png (second image in Timbuk Toys project)
                    if (
                      imgIndex === 1 &&
                      image.includes("toys2.png") &&
                      project.title === "Timbuk Toys"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "95px",
                            left: "361px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for toys3.png (third image in Timbuk Toys project)
                    if (
                      imgIndex === 2 &&
                      image.includes("toys3.png") &&
                      project.title === "Timbuk Toys"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "152px",
                            left: "60px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for toys4.png (fourth image in Timbuk Toys project)
                    if (
                      imgIndex === 3 &&
                      image.includes("toys4.png") &&
                      project.title === "Timbuk Toys"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "320px",
                            left: "60px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for toys5.png (fifth image in Timbuk Toys project)
                    if (
                      imgIndex === 4 &&
                      image.includes("toys5.png") &&
                      project.title === "Timbuk Toys"
                    ) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "260px",
                            left: "361px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for apptivo1.png (first image)
                    if (imgIndex === 0 && image.includes("apptivo1.png")) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute overflow-hidden"
                          style={{
                            width: "550px",
                            height: "550px",
                            top: "-15px",
                            left: "12px",
                            transform: "rotate(15.15deg)",
                            opacity: 1,
                            zIndex: 1,
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 2}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for apptivo4.png (second image)
                    if (imgIndex === 1 && image.includes("apptivo4.png")) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "265px",
                            left: "540px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for apptivo3.png (third image)
                    if (imgIndex === 2 && image.includes("apptivo3.png")) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "90px",
                            left: "540px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for apptivo2.png (fourth image)
                    if (imgIndex === 3 && image.includes("apptivo2.png")) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "150px",
                            left: "840px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Special positioning for apptivo5.png (fifth image)
                    if (imgIndex === 4 && image.includes("apptivo5.png")) {
                      return (
                        <div
                          key={imgIndex}
                          className="absolute bg-white shadow-lg overflow-hidden"
                          style={{
                            width: "280px",
                            height: "151px",
                            top: "325px",
                            left: "840px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                            style={{ display: "none" }}
                          >
                            Screenshot {imgIndex + 1}
                          </div>
                        </div>
                      );
                    }

                    // Grid positioning for other images
                    const gridPositions = [
                      { top: "40px", right: "40px" },
                      { top: "40px", right: "280px" },
                      { top: "200px", right: "40px" },
                      { top: "200px", right: "280px" },
                    ];

                    const position =
                      gridPositions[imgIndex - 1] || gridPositions[0];

                    return (
                      <div
                        key={imgIndex}
                        className="absolute w-32 h-20 lg:w-40 lg:h-24 bg-white rounded-lg shadow-lg overflow-hidden"
                        style={{
                          top: position.top,
                          right: position.right,
                        }}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div
                          className="w-full h-full bg-gray-200 items-center justify-center text-xs text-gray-500"
                          style={{ display: "none" }}
                        >
                          Screenshot {imgIndex + 1}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Project Description */}
              <div className="text-center mt-6 sm:mt-8 mb-6 sm:mb-8 px-2">
                <p className="text-base sm:text-lg lg:text-2xl font-light text-black max-w-5xl mx-auto leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Visit Site Button */}
              <div className="text-center">
                <button className="bg-transparent border-2 border-black text-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg text-base sm:text-lg lg:text-xl font-medium hover:bg-black hover:text-white transition-all duration-300">
                  Visit Site
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-xl sm:text-2xl lg:text-5xl font-light text-black mb-6 sm:mb-8 text-left px-2">
            Curious about more designs? Load more projects.{" "}
            <span className="text-base sm:text-lg lg:text-xl relative -top-3 sm:-top-4 lg:-top-8 right-2 sm:right-4">©</span>
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-transparent border-2 border-black text-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg text-base sm:text-lg lg:text-xl font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            {showMore ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Initialize EmailJS first
      emailjs.init('-UuRv-reuumlrvR05');
      
      // Simple template parameters matching standard EmailJS template
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      };

      console.log('Attempting to send email...');
      console.log('Template params:', templateParams);
      
      // Send email using sendForm method which is more reliable
      const result = await emailjs.send(
        'service_grn9yuf', // service_id
        'template_uom4obj', // template_id
        templateParams
      );
      
      console.log('EmailJS Success:', result);
      setSubmitStatus('success');
      alert("Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error('EmailJS Full Error:', error);
      setSubmitStatus('error');
      
      let errorMessage = 'Failed to send message. ';
      
      if (error.status === 400) {
        errorMessage += 'Please check if your EmailJS service and template are correctly configured.';
      } else if (error.status === 401) {
        errorMessage += 'Authentication failed. Check your public key.';
      } else if (error.status === 404) {
        errorMessage += 'Service or template not found.';
      } else {
        errorMessage += 'Please try again later.';
      }
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 px-6 lg:px-12 bg-[#FFF9E6]">
      <div className="max-w-7xl mx-auto">
        {/* Contact Form */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-12">
            Join Hands in Collaboration
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-6xl text-black">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white border-none rounded-lg p-6 text-xl font-light w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white border-none rounded-lg p-6 text-xl font-light w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="md:col-span-2 relative">
              <textarea
                name="message"
                placeholder="Add Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="bg-white border-none rounded-lg p-6 text-xl font-light w-full resize-none focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`absolute bottom-6 right-6 w-8 h-8 flex items-center justify-center transform rotate-2 hover:bg-black hover:scale-110 rounded-full transition-all duration-300 group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send size={20} className="text-black group-hover:text-white" />
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Assets Section */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-8">
            Assets
          </h2>
          <div className="flex flex-col md:flex-row gap-6 max-w-6xl">
            <button className="flex-1 bg-transparent border-2 border-black text-black px-8 py-6 rounded-lg text-2xl lg:text-3xl font-light hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-4">
              <Download size={24} />
              <span>Download Resume</span>
            </button>
            <button className="flex-1 bg-transparent border-2 border-black text-black px-8 py-6 rounded-lg text-2xl lg:text-3xl font-light hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-4">
              <Download size={24} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-16 px-6 lg:px-12 bg-[#FFF9E6]">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 w-full">
          {/* Phone */}
          <div className="flex-0  text-left">
            <h3 className="text-2xl font-medium text-black mb-4">Phone</h3>
            <p className="flex-0 text-xl font-light text-gray-600">(+91) 9999999999</p>
          </div>

          {/* Email */}
          <div className="flex-0  text-center">
            <h3 className="text-2xl font-medium text-black text-left mb-4">
              Email
            </h3>
            <p className="text-xl font-light text-gray-600">info@muskan.com</p>
          </div>

          {/* Socials */}
          <div className="flex-0   text-right">
            <h3 className="text-2xl font-medium text-black  text-left mb-4">
              Socials
            </h3>
            <div className="flex justify-end space-x-4 ">
              {/* Social Icons */}
              <div className="w-10 h-10 bg-[#FFE8A8] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 cursor-pointer">
                <span className="text-sm font-bold">X</span>
              </div>
              <div className="w-10 h-10 bg-[#FFE8A8] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-[#FFE8A8] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal line above copyright */}
        <div className="border-t border-black/20 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-lg font-light text-black">
            © 2025 Muskan Tomar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a")?.getAttribute("href");
      if (target && target.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="bg-[#FFF9E6] overflow-x-hidden relative">
      {" "}
      {/* This is good, but we'll make it more robust */}
      <style>{`
        /* Import Inter Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Kablammo&display=swap');
        
        /* Apply Inter font globally with higher specificity */
        html, body, div, span, p, h1, h2, h3, h4, h5, h6, button, input, textarea, a {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif !important;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif !important;
        }

        /* Override Tailwind's default font */
        .font-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif !important;
        }

        /* Keep Kablammo only for the logo */
        .logo {
            font-family: 'Kablammo', cursive !important;
            font-weight: 400;
            color: black;
            text-decoration: none;
            transition: transform 0.3s ease;
        }

        .logo:hover {
            transform: scale(1.05);
        }
        
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-text-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-text {
          animation: scroll-text 25s linear infinite;
        }
        
        .animate-scroll-text-reverse {
          animation: scroll-text-reverse 25s linear infinite;
        }
        
        html, body {
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
            
        * {
          box-sizing: border-box;
        }
      `}</style>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
