import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp integration
    const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Type:* ${formData.inquiryType}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/919414636560?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message Sent!",
      description: "We'll respond to your inquiry shortly via WhatsApp.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              We're Here to <span className="text-primary">Help You</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our medicines? Need a consultation? Reach out to us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="consultation">Medical Consultation</option>
                    <option value="order">Product Order</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message via WhatsApp
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Get in touch with us for consultations, orders, or any questions about our Ayurvedic medicines.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm mb-2">Customer Care & Orders</p>
                    <a href="tel:+919414636560" className="text-primary font-semibold hover:underline">
                      +91-9414636560
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm mb-2">For detailed inquiries</p>
                    <a href="mailto:kamleshwarayurved@gmail.com" className="text-primary font-semibold hover:underline break-all">
                      kamleshwarayurved@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm mb-2">Visit our clinic</p>
                    <p className="text-foreground font-medium">
                      Kamleshwar Ayurvedic Pharmacy<br />
                      Jasana, Hanumangarh-335523<br />
                      Rajasthan, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Working Hours</h3>
                    <p className="text-muted-foreground text-sm mb-2">We're here for you</p>
                    <p className="text-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-3">Quick Order via WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get instant support and place orders directly through WhatsApp
                </p>
                <a
                  href="https://wa.me/919414636560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            <div className="bg-card rounded-3xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.123!2d74.123!3d29.456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDI3JzIxLjYiTiA3NMKwMDcnMjIuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kamleshwar Ayurvedic Pharmacy Location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
