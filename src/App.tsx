/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  Wrench, 
  Droplets, 
  Hammer, 
  ArrowRight
} from 'lucide-react';
import { SERVICES, PORTFOLIO, BLOGS, REVIEWS } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-blue-600 p-2 rounded-lg">
            <Wrench className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-blue-900' : 'text-white'}`}>
            Andrew Plumber
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Portfolio', 'Reviews', 'Blog', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:8649865593"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-blue-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu className={scrolled ? 'text-blue-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Reviews', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 font-medium py-2 border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-4 pt-2">
                <a href="tel:8649865593" className="flex-1 bg-blue-600 text-white text-center py-3 rounded-xl font-bold">Call</a>
                <a href="https://wa.me/8649865593" className="flex-1 bg-green-500 text-white text-center py-3 rounded-xl font-bold">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/hero-plumber/1920/1080" 
          alt="Andrew Plumber Hero" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-blue-600/20 backdrop-blur-md text-blue-400 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
            Service Area – All Over Bangalore
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Fast & Reliable Plumbing <br />
            <span className="text-blue-400">Services Across Bangalore</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium">
            Available 24/7 for All Plumbing Problems – Small or Big. 
            Expert solutions for your home and office.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:8649865593"
              className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-2xl shadow-blue-600/40 hover:bg-blue-700 transition-all"
            >
              <Phone className="w-5 h-5" /> CALL NOW – 8649865593
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/8649865593"
              className="w-full sm:w-auto bg-green-500 text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-2xl shadow-green-500/40 hover:bg-green-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WHATSAPP NOW
            </motion.a>
          </div>
          
          <p className="mt-8 text-gray-300 text-sm font-medium">
            Customers can call or WhatsApp anytime for free consultation or to ask any plumbing-related questions.
          </p>
        </motion.div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute top-1/4 left-10 hidden lg:block floating-tool opacity-20">
        <Wrench className="w-20 h-20 text-white" />
      </div>
      <div className="absolute bottom-1/4 right-10 hidden lg:block floating-tool opacity-20" style={{ animationDelay: '1s' }}>
        <Droplets className="w-20 h-20 text-white" />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://picsum.photos/seed/about-bg/1920/1080" 
          alt="About Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/andrew-profile/800/1000" 
                alt="Andrew Plumber" 
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-3xl z-20 shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Trusted Expert</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Reliable Partner for All <br />
              Plumbing Needs in Bangalore
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Andrew Plumber is a name synonymous with trust and quality in Bangalore. With over 15 years of hands-on experience in the local plumbing landscape, we understand the unique challenges of Bangalore's residential and commercial plumbing systems.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Expert in Bangalore's Residential Plumbing",
                "24/7 Emergency Response Team",
                "Transparent Pricing & No Hidden Costs",
                "High-Quality Materials & Modern Tools"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 w-6 h-6" />
                  <span className="text-gray-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all">
              Learn More About Our Work <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Service Area – All Over Bangalore</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive plumbing solutions for every corner of your home and office.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group water-ripple"
            >
              <div className="p-8">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Droplets className="text-blue-600 group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recent Projects in Bangalore</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real problems, expert solutions. See how we've helped our customers across the city.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PORTFOLIO.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={item.image} 
                alt={item.area} 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-blue-400 w-5 h-5" />
                  <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">{item.area}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.problem}</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-300 text-sm"><span className="text-white font-bold">Work:</span> {item.work}</p>
                  <p className="text-gray-300 text-sm"><span className="text-white font-bold">Result:</span> {item.beforeAfter}</p>
                </div>
                <div className="bg-blue-600/30 backdrop-blur-md border border-blue-500/30 p-4 rounded-2xl">
                  <p className="text-blue-100 italic text-sm">"{item.satisfaction}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/reviews-bg/1920/1080" 
          alt="Reviews Background" 
          className="w-full h-full object-cover brightness-[0.2]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <p className="text-blue-200 text-xl font-bold">4.8/5 from 50+ Customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 6).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-dark p-8 rounded-3xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-white font-bold text-lg">{review.name}</h4>
                  <p className="text-blue-400 text-sm font-medium">{review.area}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">"{review.comment}"</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="text-white font-bold border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-colors">
            View All 50+ Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Blog</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Plumbing Tips & Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay informed with the latest plumbing maintenance tips for your Bangalore home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BLOGS.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {blog.description}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  Read More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/contact-bg/1920/1080" 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Ready to Fix Your Plumbing?</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-600/20">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Call Us Anytime</p>
                  <a href="tel:8649865593" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">8649865593</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-green-500 p-4 rounded-2xl shadow-lg shadow-green-500/20">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">WhatsApp Us</p>
                  <a href="https://wa.me/8649865593" className="text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors">8649865593</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-purple-600 p-4 rounded-2xl shadow-lg shadow-purple-600/20">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Email Us</p>
                  <a href="mailto:drewxn8@gmail.com" className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors">drewxn8@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-blue-600 w-6 h-6" />
                <h4 className="text-xl font-bold text-gray-900">Service Area</h4>
              </div>
              <p className="text-gray-700 font-medium text-lg">All Over Bangalore - Indiranagar, Koramangala, Whitefield, HSR, Jayanagar, and more.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908523!3d12.9538477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709490000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">Andrew Plumber</span>
            </div>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Your trusted partner for all plumbing needs in Bangalore. We provide 24/7 emergency services with a focus on quality, transparency, and customer satisfaction.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook />, url: "https://www.facebook.com/share/1BQL7MEkb5/" },
                { icon: <Instagram />, url: "https://instagram.com/dre.wray" },
                { icon: <Linkedin />, url: "https://www.linkedin.com/in/andrewray2003" },
                { icon: <Twitter />, url: "https://x.com/home" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>8649865593</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>drewxn8@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>All Over Bangalore</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Andrew Plumber. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Service Area – All Over Bangalore</p>
        </div>
      </div>
    </footer>
  );
};

const MobileFloatingBar = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl flex p-2 gap-2">
        <a 
          href="tel:8649865593" 
          className="flex-1 bg-blue-600 text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20"
        >
          <Phone className="w-5 h-5" /> Call Now
        </a>
        <a 
          href="https://wa.me/8649865593" 
          className="flex-1 bg-green-500 text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold shadow-lg shadow-green-500/20"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <MobileFloatingBar />
    </div>
  );
}
