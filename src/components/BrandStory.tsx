import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Shield } from "lucide-react";

const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-muted-foreground font-normal text-sm uppercase tracking-wider">
            Our Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6 text-foreground tracking-tight">
            The ₹100 Crore Story
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border mb-16 p-12"
          >
            <h3 className="text-2xl font-normal text-foreground mb-6">We Refused Patanjali's Offer</h3>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                When Patanjali approached us with a 
                <span className="text-foreground font-medium"> ₹100 Crore </span> 
                acquisition offer, we had a choice to make.
              </p>
              
              <p>
                Our proprietary Ayurvedic formulations — developed through years of research and 
                traditional wisdom — had transformed hundreds of lives. These weren't just medicines; 
                they were our legacy.
              </p>
              
              <p>
                We chose to <span className="text-primary font-medium">remain independent</span>, 
                ensuring that every bottle carries the same purity and authenticity that has defined 
                Kamleshwar Ayurvedic Pharmacy since day one.
              </p>

              <div className="border-l-2 border-primary pl-6 mt-8 italic">
                <p className="text-foreground">
                  "Some things are not for sale. Our commitment to authentic Ayurveda, 
                  the trust of our patients, and the integrity of our formulas — these define who we are."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-border p-8"
            >
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-normal mb-2 text-foreground">Authentic Formulas</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Traditional Ayurvedic methods with GMP-certified processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border border-border p-8"
            >
              <Heart className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-normal mb-2 text-foreground">Patient First</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your health and trust come before profit. That's our promise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="border border-border p-8"
            >
              <Award className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-normal mb-2 text-foreground">Proven Results</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hundreds of verified testimonials from transformed patients.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
