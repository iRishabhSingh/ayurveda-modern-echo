import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    condition: "Respiratory Issues",
    quote: "Respocare completely transformed my life. After years of allergic bronchitis, I can finally breathe freely.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Jaipur",
    condition: "Weakness & Fatigue",
    quote: "Blitone gave me my energy back. As someone who felt constantly tired, this tonic has been life-changing.",
    rating: 5,
  },
  {
    name: "Meera Patel",
    location: "Mumbai",
    condition: "Women's Health",
    quote: "Sanigdha helped regulate my hormonal imbalances naturally. I'm grateful for authentic medicine that works.",
    rating: 5,
  },
];

const TestimonialsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-muted border-y border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-muted-foreground font-normal text-sm uppercase tracking-wider">
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6 text-foreground tracking-tight">
            Real Results
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background border border-border p-8"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-normal text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 text-center"
        >
          <div>
            <p className="text-3xl font-light text-foreground mb-1">100+</p>
            <p className="text-sm text-muted-foreground">Testimonials</p>
          </div>
          <div>
            <p className="text-3xl font-light text-foreground mb-1">20+</p>
            <p className="text-sm text-muted-foreground">Years</p>
          </div>
          <div>
            <p className="text-3xl font-light text-foreground mb-1">GMP</p>
            <p className="text-sm text-muted-foreground">Certified</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link to="/testimonials">
            <Button 
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-background font-normal"
            >
              Read All Testimonials
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
