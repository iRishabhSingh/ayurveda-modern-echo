import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Heart, Shield, Leaf, Users, TrendingUp } from "lucide-react";
import herbsPattern from "@/assets/herbs-pattern.jpg";

const About = () => {
  const milestones = [
    { year: "2000", title: "Foundation", description: "Kamleshwar Ayurvedic Pharmacy established with vision of authentic healing" },
    { year: "2010", title: "GMP Certification", description: "Achieved GMP certification for quality manufacturing standards" },
    { year: "2015", title: "100+ Patients", description: "Reached milestone of transforming 100+ lives through Ayurveda" },
    { year: "2020", title: "Patanjali Offer", description: "Refused ₹100 Crore acquisition offer to maintain independence" },
    { year: "2025", title: "Digital Expansion", description: "Bringing authentic Ayurveda to patients nationwide" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Authenticity",
      description: "Every formula follows traditional Quath Method extraction for maximum potency",
    },
    {
      icon: Heart,
      title: "Patient First",
      description: "Your health and trust matter more than profit - proven by our choices",
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Only pure herbs and traditional ingredients, no synthetic additives",
    },
    {
      icon: Award,
      title: "GMP Certified",
      description: "Manufacturing excellence certified by regulatory authorities",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building lasting relationships with patients through genuine care",
    },
    {
      icon: TrendingUp,
      title: "Research Based",
      description: "Combining ancient wisdom with modern quality standards",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={herbsPattern} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              Our Journey of <span className="text-primary">Authentic Healing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              For over two decades, we've been dedicated to preserving the purity of Ayurveda 
              and transforming lives through genuine, research-backed medicines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">The Beginning</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kamleshwar Ayurvedic Pharmacy was born from a simple yet powerful vision: 
                to bring authentic Ayurvedic healing to those who need it most. Founded in Jasana, 
                Hanumangarh, Rajasthan, our clinic has been a beacon of traditional medicine 
                in modern times.
              </p>
              
              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">The ₹100 Crore Decision</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 2020, Patanjali Ayurved Ltd., one of India's largest FMCG and Ayurvedic companies, 
                approached us with a <span className="text-secondary font-bold text-xl">₹100 Crore</span> acquisition 
                offer. It was tempting - a validation of our work and financial security for generations.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                But we asked ourselves: Would our medicines remain the same? Would the personal care 
                we provide to each patient survive corporate expansion? Would the proprietary formulas 
                that took years to perfect be diluted for mass production?
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                The answer was clear. We refused the offer. Because some things - the trust of our patients, 
                the purity of our formulas, the authenticity of our practice - are simply not for sale.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 my-8">
                <p className="text-foreground italic font-medium text-lg">
                  "Our medicine is our legacy. Every bottle that leaves our facility carries not just herbs, 
                  but our promise of authentic healing. That promise cannot be compromised."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Milestones
            </h2>
            <p className="text-xl text-muted-foreground">
              Two decades of dedication to authentic Ayurveda
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-herbal">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-primary-foreground max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Experience Authentic Ayurveda
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of patients who have transformed their health with our genuine medicines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors"
              >
                View Our Products
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-primary-foreground hover:bg-primary-foreground/90 text-primary rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
