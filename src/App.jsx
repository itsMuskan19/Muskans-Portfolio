import React, { useState, useEffect } from "react";
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
            className="logo transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-md px-2 py-1"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)", // Fluid typography: 28px to 48px
              lineHeight: "1.2",
            }}
            aria-label="Muskan Tomar Portfolio Home"
          >
            MT
          </a>

          {/* Desktop Navigation - Enhanced responsive spacing */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="!text-black hover:!text-gray-600 transition-colors duration-200 font-medium relative group focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-md px-3 py-2"
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 1.125rem)", // Fluid: 16px to 18px
                }}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center ml-4 lg:ml-6 hover:scale-110 transition-transform cursor-pointer">
              <ArrowUpRight color="white" size={16} />
            </div>
          </div>

          {/* Mobile Menu Button - Improved touch target */}
          <button
            className="md:hidden z-60 text-black p-2 hover:bg-black/5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
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
      <div className="absolute top-[60px] sm:top-[80px] lg:top-[105px] left-[-5%] w-[200%] h-[30px] sm:h-[35px] lg:h-[40px] bg-black -rotate-[6.0deg] z-1 flex items-center overflow-hidden">
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

      <div className="absolute top-[120px] left-[-1%] w-[102%] h-[40px] bg-black rotate-[1.5deg] z-10 flex items-center overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#FDF6E9] p-4 text-center">
            <div className="max-w-5xl">
              <h1 className="font-5px leading-tight tracking-tight text-black text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px]">
                <span className="block">
                  Building cross-platform brilliance
                </span>
                <span className="block">for modern brands</span>
              </h1>

              {/* Arrow positioned near profile text*/}
              <div className="absolute top-[26%] left-120 lg:-right-9 w-12 h-12 lg:w-9 lg:h-9 bg-black rounded-full flex items-center justify-center text-white text-xl z-40">
                <ArrowDownLeft size={20} />
              </div>
              <button className="mt-8 rounded-lg border-2 border-black bg-transparent px-9 py-2 text-lg font-normal text-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
                Let's Start a Project Together
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image and Text */}
          <div className="relative h-90 lg:h-[600px] flex items-center justify-end overflow-hidden z-20">
            {/* Hero Image Wrapper */}
            <div className="relative mr-5 lg:mr-15">
              {/* Profile Picture */}
              <div className="relative w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] rounded-[50%] bg-white/50 backdrop-blur-sm z-20 overflow-hidden -translate-x-8 lg:-translate-x-16">
                <img
                  src="/assets/img1.png"
                  alt="Muskan Tomar"
                  className="w-full h-full object-cover top-263px object-center scale-200 translate-y-[-15%]"
                />
              </div>

              {/* Colorful MUSKA Background Text */}
              <div className="absolute top-1/2 -right-32 lg:-right-40 transform -translate-y-1/2 z-10 flex flex-col pointer-events-none">
                {[
                  { text: "MUSKAN", color: "#808080" },
                  { text: "MUSKAN", color: "#4285F4" },
                  { text: "MUSKAN", color: "#EA4335" },
                  { text: "MUSKAN", color: "#FBBC04" },
                  { text: "MUSKAN", color: "#34A853" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-6xl lg:text-8xl xl:text-9xl font-black whitespace-nowrap leading-none opacity-80"
                    style={{
                      color: item.color,
                      fontWeight: 900,
                      letterSpacing: "-4px",
                      lineHeight: "0.8",
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
      <div className="absolute bottom-9 left-0 w-full z-30 overflow-hidden">
        <div className="text-4xl lg:text-7xl xl:text-5xl font-bold text-black tracking-wide px-7 lg:px-12">
          MUSKAN TOMAR
          <sup className="text-2xl lg:text-4xl relative top-[-0.3em] ml-1">
            ©
          </sup>
          - MUSKAN
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
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center mb-16">
          {/* Left Side: Image with effects (takes 2 of 5 columns) */}
          <div className="lg:col-span-2 relative flex items-center h-[500px] lg:h-[600px] -ml-16 lg:-ml-45">
            {" "}
            {/* Background Vector Image - Increased Size */}{" "}
            <img
              src="/assets/Vector.png"
              alt="Gold background shape"
              className="absolute w-full max-w-1xl lg:max-w-1xl h-554px object-contain z-10 -left-4 lg:left-15 transform scale-80"
            />{" "}
            {/* Blur circle container */}{" "}
            <div className="absolute w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] rounded-[50%] bg-white/50 backdrop-blur-sm z-20 left-24 lg:left-35 overflow-hidden">
              {" "}
              <img
                src="/assets/img2.png"
                alt="Muskan"
                className="w-full h-full object-cover object-[center_top] z-10"
              />{" "}
            </div>{" "}
            {/* Overflowing bottom image */}{" "}
            <img
              src="/assets/img2.png"
              alt="Muskan Extended"
              className="absolute w-[350px] h-[350px] lg:w-[380px] lg:h-[380px] object-cover z-30 left-24 lg:left-32 bottom-0 scale-[1.25] -translate-y-[40%] overflow-hidden "
            />{" "}
          </div>

          <div className="lg:col-span-3 flex flex-col justify-center">
            <p className="text-2xl lg:text-[1.5rem] font-light leading-snug lg:leading-tight text-black mb-10">
              I am a{" "}
              <span className="font-medium lg:text-[2.1rem] border-b-4 border-black/60">
                Flutter Developer
              </span>{" "}
              with{" "}
              <span className="font-medium lg:text-[2.1rem] border-b-4 border-black/60">
                6+ years
              </span>{" "}
              of experience in{" "}
              <span className="font-medium lg:text-[2.1rem] border-b-4 border-black/60">
                building cross-platform
              </span>{" "}
              mobile apps.{" "}
              <span className="font-medium lg:text-[2.1rem] border-b-4 border-black/60">
                Skilled in Flutter, Node.js, and React Native
              </span>
              , I craft scalable, high-performance solutions with clean code,
              engaging design, and{" "}
              <span className="font-medium lg:text-[2.1rem] border-b-4 border-black/60">
                impactful user experiences
              </span>
              .
            </p>
            <button className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-lg text-xl font-medium hover:bg-black hover:text-white transition-colors duration-300 self-center">
              View My Projects
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center md:border-r md:border-black md:last:border-r-0 pr-4"
            >
              <div className="text-5xl lg:text-7xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-2xl lg:text-3xl font-light text-black whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          {" "}
          {/* Add top margin to space it from the stats section */}
          <div className="max-w-5xl mx-auto border border-black rounded-xl p-4 sm:p-6">
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
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-black">
            The Services we Offer <span className="text-2xl">©</span>
          </h2>
          <div className="hidden md:flex items-center space-x-4 text-2xl font-light cursor-pointer hover:opacity-70 transition-opacity">
            <span className="text-black">View All</span>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
              <ArrowDownLeft size={20} />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
        "/assets/apptivo-1.jpg", // Replace with actual screenshots
        "/assets/apptivo-2.jpg",
        "/assets/apptivo-3.jpg",
        "/assets/apptivo-4.jpg",
      ],
    },
    {
      title: "Freecrm",
      description:
        "FREECRM offers powerful, free CRM tools for sales, marketing, and support—boosting productivity, lead conversion, and customer satisfaction with intuitive dashboards, automation, and mobile access",
      images: [
        "/assets/freecrm-1.jpg",
        "/assets/freecrm-2.jpg",
        "/assets/freecrm-3.jpg",
        "/assets/freecrm-4.jpg",
      ],
    },
    {
      title: "Pipedrive",
      description:
        "Pipedrive's website showcases a powerful, AI-driven CRM platform that streamlines sales pipelines, automates workflows, and boosts conversions with intuitive design, real-time insights, and smart integrations",
      images: [
        "/assets/pipedrive-1.jpg",
        "/assets/pipedrive-2.jpg",
        "/assets/pipedrive-3.jpg",
        "/assets/pipedrive-4.jpg",
      ],
    },
    {
      title: "Timbuk Toys",
      description:
        "Timbuk Toys' website showcases a vibrant, community-focused toy store offering curated brands, playful experiences, and free gift wrapping—celebrating learning through play for all ages",
      images: [
        "/assets/timbuk-1.jpg",
        "/assets/timbuk-2.jpg",
        "/assets/timbuk-3.jpg",
        "/assets/timbuk-4.jpg",
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
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-black">
            Portfolio Projects <span className="text-2xl">©</span>
          </h2>
          <div className="hidden md:flex items-center space-x-4 text-2xl font-light cursor-pointer hover:opacity-70 transition-opacity">
            <span>View All</span>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
              <ArrowDownLeft size={20} />
            </div>
          </div>
        </div>

        {/* Portfolio Subtitle */}
        <p className="text-2xl lg:text-3xl font-light text-black mb-16 max-w-5xl">
          Showcasing a collection of my best live Flutter projects, highlighting
          innovative design, seamless functionality, and real-world impact
          across multiple platforms and industries.
        </p>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                project.hidden && !showMore ? "hidden" : "block"
              } transition-all duration-500`}
            >
              {/* Project Card */}
              <div className="bg-[#FFE8A8] rounded-[4rem] p-8 lg:p-12 relative overflow-hidden min-h-[400px] lg:min-h-[500px]">
                {/* Mac mockup background */}
                <div
                  className={`absolute w-96 h-96 lg:w-[600px] lg:h-[600px] opacity-10 
                    ${index % 2 === 0 ? "left-0 -top-16" : "right-0 -top-16"} 
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
                <div
                  className={`absolute top-8 ${
                    index % 2 === 0 ? "right-8" : "left-8"
                  } grid grid-cols-2 gap-4 z-10`}
                >
                  {project.images.slice(0, 4).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="w-32 h-20 lg:w-40 lg:h-24 bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      {/* Replace with actual project screenshots */}
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                        Screenshot {imgIndex + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Title */}
                <div className="relative z-20">
                  <h3 className="text-4xl lg:text-5xl font-light text-black mb-4">
                    {project.title} <span className="text-2xl">©</span>
                  </h3>
                </div>
              </div>

              {/* Project Description */}
              <div className="text-center mt-8 mb-8">
                <p className="text-xl lg:text-2xl font-light text-black max-w-5xl mx-auto leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Visit Site Button */}
              <div className="text-center">
                <button className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg text-xl font-medium hover:bg-black hover:text-white transition-all duration-300">
                  Visit Site
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <p className="text-4xl lg:text-5xl font-light text-black mb-8">
            Curious about more designs? Load more projects.{" "}
            <span className="text-2xl">©</span>
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg text-xl font-medium hover:bg-black hover:text-white transition-all duration-300"
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
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

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl text-black">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border-none rounded-lg p-6 text-xl font-light w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-none rounded-lg p-6 text-xl font-light w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="md:col-span-2 relative">
              <textarea
                name="message"
                placeholder="Add Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="bg-white border-none rounded-lg p-6 text-xl font-light w-full resize-none focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="absolute bottom-6 right-6 w-8 h-8 flex items-center justify-center transform rotate-90 hover:scale-110 transition-transform"
              >
                <Send size={20} className="text-black" />
              </button>
            </div>
          </div>
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
    <footer className="py-16 px-6 lg:px-12 bg-[#FFF9E6] border-t border-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-medium text-black mb-4">Phone</h3>
            <p className="text-xl font-light text-gray-600">+91 99999 99999</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black mb-4">Email</h3>
            <p className="text-xl font-light text-gray-600">info@muskan.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black mb-4">Socials</h3>
            <div className="flex space-x-4">
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
        /* 1. Import the 'Kablammo' Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Kablammo&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        }

        /* 2. Add the provided CSS for the .logo class */
        .logo {
            font-family: 'Kablammo', cursive;
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

        /* You can now remove your debugging outlines */
        /*
        * {
          outline: 1px solid red !important;
        }

        *:hover {
          outline: 2px solid blue !important;
          background: rgba(255, 0, 0, 0.1) !important;
        }
        */
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
