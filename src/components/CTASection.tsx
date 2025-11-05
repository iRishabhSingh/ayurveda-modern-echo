import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA */}
          <div className="border border-border p-16 mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-tight">
              Your Journey to Healing
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience authentic Ayurveda. Get personalized consultation and genuine medicines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-normal"
                >
                  Contact for Order
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted px-8 font-normal"
                >
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="border border-border p-6 text-center">
              <Phone className="w-6 h-6 text-foreground mx-auto mb-3" />
              <h3 className="font-normal text-foreground mb-2 text-sm">Phone</h3>
              <a href="tel:+919414636560" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                +91-9414636560
              </a>
            </div>

            <div className="border border-border p-6 text-center">
              <Mail className="w-6 h-6 text-foreground mx-auto mb-3" />
              <h3 className="font-normal text-foreground mb-2 text-sm">Email</h3>
              <a href="mailto:kamleshwarayurved@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all">
                kamleshwarayurved@gmail.com
              </a>
            </div>

            <div className="border border-border p-6 text-center">
              <MapPin className="w-6 h-6 text-foreground mx-auto mb-3" />
              <h3 className="font-normal text-foreground mb-2 text-sm">Location</h3>
              <p className="text-sm text-muted-foreground">
                Jasana, Hanumangarh-335523
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
