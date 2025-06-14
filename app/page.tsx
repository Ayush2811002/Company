"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  Globe,
  Laptop,
  MailIcon,
  MessageSquare,
  Phone,
  Server,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* Logo Image */}
            <Image
              src="/logofor.png" // Replace with your actual logo filename
              alt="Fortech Logo"
              width={40}
              height={40}
              className="" // Optional: makes the image circular
            />
            <div className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Fortechtechnology
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="#founders"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:flex">Get Started</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <VisionSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_70%)]" />
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_500px]"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
              >
                Innovative IT Solutions
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white"
              >
                Fresh Ideas, Cutting-Edge Solutions
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="max-w-[600px] text-gray-300 md:text-xl"
              >
                We're a passionate startup bringing innovative IT solutions to
                help businesses thrive in the digital age. Let's build the
                future together.
              </motion.p>
            </div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-white hover:bg-purple-500/20"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 blur-3xl" />
              <Image
                src="/logofor.png?height=500&width=500"
                width={500}
                height={500}
                alt="Hero"
                className="relative z-10 mx-auto h-auto w-full max-w-[80%] rounded-lg object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function ServicesSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  // const inView = useInView(ref, { once: true, threshold: 0.2 });
  const inView = useInView(ref, { once: true, amount: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your specific business needs and challenges.",
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-500" />,
      title: "Web Development",
      description:
        "Responsive, modern websites and web applications that deliver exceptional user experiences.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-purple-500" />,
      title: "IT Consulting",
      description:
        "Strategic technology advice to optimize your operations and drive business growth.",
    },
    {
      icon: <Server className="h-10 w-10 text-purple-500" />,
      title: "Cloud Solutions",
      description:
        "Secure, scalable cloud infrastructure and migration services for your business.",
    },
    {
      icon: <Settings className="h-10 w-10 text-purple-500" />,
      title: "DevOps Services",
      description:
        "Streamline your development and operations with our expert DevOps practices.",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "IT Staff Augmentation",
      description:
        "Access skilled IT professionals to supplement your team and accelerate project delivery.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Comprehensive IT Solutions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of services to help your business succeed in
              the digital world.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="mx-auto grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-5px]"
              >
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rotate-45 bg-gradient-to-br from-purple-500/20 to-transparent" />
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-4 flex items-center text-purple-500">
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const features = [
    "Fresh perspective on modern technology",
    "Passionate team of young professionals",
    "Agile and flexible approach",
    "Competitive pricing for startups & SMEs",
    "Latest technologies and best practices",
    "Dedicated support and partnership mindset",
  ];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A New Vision for IT Solutions
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Founded just weeks ago, Fortechtechnology represents a fresh
              approach to IT services. We're a team of passionate developers and
              consultants who believe that innovative technology should be
              accessible to businesses of all sizes. Our startup mentality means
              we're agile, cost-effective, and deeply committed to your success.
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Our Story
              </Button>
              <Button variant="outline">Meet The Team</Button>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 blur-3xl" />
              <Image
                src="/fin.png?height=500&width=500"
                width={500}
                height={500}
                alt="About Fortechtechnology"
                className="relative z-10 h-full w-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-purple-600 p-2">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <span className="text-xl font-bold">10+</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const projects = [
    {
      title: "Modern E-Commerce Platform",
      category: "In Development",
      image: "/img12.png?height=400&width=600",
      description:
        "Building a next-generation e-commerce solution with AI-powered recommendations and seamless user experience.",
    },
    {
      title: "Healthcare Management System",
      category: "Prototype Phase",
      image: "/image2.png?height=400&width=600",
      description:
        "Developing an intuitive healthcare management platform to streamline patient care and administrative tasks.",
    },
    {
      title: "Financial Analytics Dashboard",
      category: "Planning Phase",
      image: "/img4.png?height=400&width=600",
      description:
        "Creating real-time financial analytics tools with predictive modeling for small to medium businesses.",
    },
    {
      title: "Supply Chain Optimizer",
      category: "Research Phase",
      image: "/img5.png?height=400&width=600",
      description:
        "Researching innovative solutions to help businesses optimize their supply chain operations using AI.",
    },
  ];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What We're Building
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a new startup, we're working on exciting projects that showcase
              our vision and capabilities.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="mx-auto grid gap-6 sm:grid-cols-2 lg:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center text-purple-500">
                    <span className="text-sm font-medium">View Case Study</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button className="mt-8 bg-purple-600 hover:bg-purple-700">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function VisionSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const goals = [
    {
      title: "Innovation First",
      description: "Bringing fresh ideas and modern solutions to every project",
    },
    {
      title: "Client Partnership",
      description:
        "Building long-term relationships, not just completing projects",
    },
    {
      title: "Quality Focus",
      description:
        "Delivering excellence in every line of code and consultation",
    },
    {
      title: "Growth Together",
      description:
        "Growing alongside our clients as a trusted technology partner",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-900 to-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4"
          >
            Our Vision & Values
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            As a new startup, we're driven by passion and guided by clear
            principles
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center space-y-2"
            >
              <div className="text-2xl font-bold text-purple-300">
                {goal.title}
              </div>
              <div className="text-sm text-gray-300">{goal.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FoundersSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const founders = [
    {
      quote:
        "We started Fortechtechnology with a simple belief: every business deserves access to cutting-edge technology solutions, regardless of size or budget.",
      author: "Founder & CEO",
      role: "Leading Vision & Strategy",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Our fresh perspective allows us to approach problems differently. We're not bound by 'how things have always been done' - we focus on what works best for you.",
      author: "Co-Founder & CTO",
      role: "Technical Leadership",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Being a startup means we're hungry, dedicated, and personally invested in every project. Your success is literally our success.",
      author: "Co-Founder & COO",
      role: "Operations & Client Relations",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <section id="founders" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
              Meet Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              The Minds Behind Fortechtechnology
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're a passionate team of entrepreneurs who decided to turn our
              vision into reality.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={founder.avatar || "/placeholder.svg"}
                    alt={founder.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground italic">
                    "{founder.quote}"
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold">{founder.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {founder.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // 👈 NEW
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     await emailjs.send(
  //       "service_annfliy",
  //       "template_s0jxrka",
  //       {
  //         from_name: formData.from_name,
  //         email: formData.email,
  //         subject: formData.subject,
  //         message: formData.message,
  //         reply_to: formData.email,
  //       },
  //       "WC3ewKjJ59FELHMDt"
  //     );

  //     setStatus("✅ Message sent! We'll contact you shortly.");
  //     setFormData({
  //       from_name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     setStatus("❌ Failed to send. Try again later.");
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // 👈 NEW
    try {
      // 1. Send email to Fortech (your inbox)
      await emailjs.send(
        "service_annfliy",
        "template_s0jxrka",
        {
          from_name: formData.from_name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        "WC3ewKjJ59FELHMDt"
      );

      // 2. Send confirmation to user
      await emailjs.send(
        "service_annfliy",
        "template_8oxeako", // 👈 confirmation template
        {
          to_name: formData.from_name,
          email: formData.email,
          // message:
          //   "Thank you for contacting Fortechtechnology! We’ve received your message and will get back to you shortly.",
          message: formData.message,
        },
        "WC3ewKjJ59FELHMDt"
      );

      setStatus("✅ Message sent! Confirmation has been emailed to you.");
      setFormData({
        from_name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false); // 👈 NEW
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let's Discuss Your Project
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Ready to transform your business with innovative IT solutions? Get
              in touch with our team of experts today.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-purple-500" />
                <span>fortechtechnology01@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-500" />
                <span>+91 9315626944,+91 9958516357</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-purple-500" />
                <span>Live Chat Available 24/7</span>
              </div> */}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card>
              {/* <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Send Message
                  </Button>
                </form>
              </CardContent> */}
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="from_name"
                        className="text-sm font-medium"
                      >
                        Name
                      </label>
                      <Input
                        id="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    disabled={loading} // 👈 NEW
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="white"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="white"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  {status && <p className="text-sm text-center">{status}</p>}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                Fortechtechnology
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Innovative IT solutions for businesses of all sizes. Transform
              your digital presence with our expert services.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fortechtechnology. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
