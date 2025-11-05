import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Quote, Star, Filter } from "lucide-react";

const allTestimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    condition: "Respiratory Issues",
    product: "Respocare",
    quote: "Respocare completely transformed my life. After years of allergic bronchitis, I can finally breathe freely. This medicine is truly a blessing.",
    rating: 5,
    date: "March 2024",
  },
  {
    name: "Rajesh Kumar",
    location: "Jaipur",
    condition: "Weakness & Fatigue",
    product: "Blitone",
    quote: "Blitone gave me my energy back. As someone who felt constantly tired, this Ayurvedic tonic has been life-changing. Highly recommended!",
    rating: 5,
    date: "February 2024",
  },
  {
    name: "Meera Patel",
    location: "Mumbai",
    condition: "Women's Health",
    product: "Sanigdha",
    quote: "Sanigdha helped regulate my hormonal imbalances naturally. I'm grateful to have found authentic Ayurvedic medicine that actually works.",
    rating: 5,
    date: "January 2024",
  },
  {
    name: "Amit Singh",
    location: "Hanumangarh",
    condition: "Kidney Stones",
    product: "Urostan",
    quote: "After struggling with kidney stones for months, Urostan dissolved them naturally. No surgery needed! Thank you Kamleshwar Ayurveda.",
    rating: 5,
    date: "December 2023",
  },
  {
    name: "Kavita Verma",
    location: "Bikaner",
    condition: "Chronic Fatigue",
    product: "Blitone",
    quote: "I was skeptical at first, but Blitone truly works. My energy levels are better than they've been in years. The quality is exceptional.",
    rating: 5,
    date: "November 2023",
  },
  {
    name: "Deepak Joshi",
    location: "Jaisalmer",
    condition: "Asthma",
    product: "Respocare",
    quote: "Respocare has significantly reduced my asthma attacks. I can exercise and live normally again. Best decision I made for my health.",
    rating: 5,
    date: "October 2023",
  },
  {
    name: "Sunita Agarwal",
    location: "Jodhpur",
    condition: "Menstrual Irregularities",
    product: "Sanigdha",
    quote: "Sanigdha balanced my cycle naturally without any side effects. The difference in my overall health is remarkable. Truly grateful.",
    rating: 5,
    date: "September 2023",
  },
  {
    name: "Vikram Rathore",
    location: "Udaipur",
    condition: "UTI",
    product: "Urostan",
    quote: "Urostan provided quick relief from recurring UTIs. The burning sensation disappeared and I haven't had a recurrence since. Excellent medicine!",
    rating: 5,
    date: "August 2023",
  },
];

const Testimonials = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const filters = ["All", "Blitone", "Respocare", "Sanigdha", "Urostan"];
  
  const filteredTestimonials = selectedFilter === "All" 
    ? allTestimonials 
    : allTestimonials.filter(t => t.product === selectedFilter);

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
              Patient Stories
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              Real Results, <span className="text-primary">Real People</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Read authentic experiences from patients who transformed their health with our Ayurvedic medicines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">Verified Testimonials</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-secondary mb-2">5.0</p>
              <p className="text-muted-foreground">Average Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-accent mb-2">95%</p>
              <p className="text-muted-foreground">Success Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-muted-foreground">Lives Transformed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-y border-border">
        <div className="container px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground font-medium">Filter by product:</span>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "bg-primary hover:bg-primary/90" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name + testimonial.date}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Product Badge */}
                <div className="flex items-center justify-between mb-4 mt-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">
                    {testimonial.product}
                  </span>
                  <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Want to share your healing story?
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Submit Your Testimonial
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
