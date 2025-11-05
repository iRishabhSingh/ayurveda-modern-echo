import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    condition: "Respiratory Issues",
    quote: "Respocare completely transformed my life. After years of allergic bronchitis, I can finally breathe freely. This medicine is truly a blessing.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Jaipur",
    condition: "Weakness & Fatigue",
    quote: "Blitone gave me my energy back. As someone who felt constantly tired, this Ayurvedic tonic has been life-changing. Highly recommended!",
    rating: 5,
  },
  {
    name: "Meera Patel",
    location: "Mumbai",
    condition: "Women's Health",
    quote: "Sanigdha helped regulate my hormonal imbalances naturally. I'm grateful to have found authentic Ayurvedic medicine that actually works.",
    rating: 5,
  },
];

const TestimonialsPreview = () => {
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
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Real Results, Real People
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 100+ verified testimonials from patients who experienced authentic healing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-xs text-primary mt-1 font-medium">{testimonial.condition}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">100+</p>
            <p className="text-muted-foreground">Verified Testimonials</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-secondary mb-2">20+</p>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">100%</p>
            <p className="text-muted-foreground">Natural Herbs</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">GMP</p>
            <p className="text-muted-foreground">Certified</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Read All Testimonials
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
