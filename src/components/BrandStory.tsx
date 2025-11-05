import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Shield } from "lucide-react";

const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            The ₹100 Crore Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When integrity matters more than profit
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border mb-12"
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-8 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-4">We Refused Patanjali's Offer</h3>
              <p className="text-lg opacity-90">
                In pursuit of authenticity over acquisition
              </p>
            </div>
            
            <div className="p-8 md:p-12">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                When Patanjali, one of India's largest Ayurvedic brands, approached us with a 
                <span className="text-secondary font-bold text-xl"> ₹100 Crore </span> 
                acquisition offer, we had a choice to make.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Our proprietary Ayurvedic formulations — developed through years of research and 
                traditional wisdom — had transformed hundreds of lives. These weren't just medicines; 
                they were our legacy, our commitment to authentic healing.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-8">
                We chose to <span className="text-primary font-bold">remain independent</span>, 
                ensuring that every bottle that reaches you carries the same purity, the same dedication, 
                and the same authenticity that has defined Kamleshwar Ayurvedic Pharmacy since day one.
              </p>

              <div className="bg-muted rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-foreground font-medium italic">
                  "Some things are not for sale. Our commitment to authentic Ayurveda, 
                  the trust of our patients, and the integrity of our formulas — 
                  these define who we are."
                </p>
                <p className="text-muted-foreground mt-3 text-sm">
                  — Kamleshwar Ayurvedic Pharmacy
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">Authentic Formulas</h4>
              <p className="text-muted-foreground">
                Every medicine is crafted using traditional Ayurvedic methods and GMP-certified processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">Patient First</h4>
              <p className="text-muted-foreground">
                Your health and trust come before profit. That's our promise, proven by our choices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">Proven Results</h4>
              <p className="text-muted-foreground">
                Hundreds of verified testimonials from patients who experienced real transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
