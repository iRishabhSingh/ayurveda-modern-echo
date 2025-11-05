import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import blitoneImg from "@/assets/product-blitone.jpg";
import respocareImg from "@/assets/product-respocare.jpg";
import sanigdhaImg from "@/assets/product-sanigdha.jpg";
import urostanImg from "@/assets/product-urostan.jpg";

const products = [
  {
    name: "Blitone Syrup",
    nameHindi: "ब्लीटोन सिरप",
    description: "Complete health & brain tonic for weakness and fatigue",
    image: blitoneImg,
  },
  {
    name: "Respocare Syrup",
    nameHindi: "रेस्पोकेयर सिरप",
    description: "Radical freedom from respiratory allergies",
    image: respocareImg,
  },
  {
    name: "Sanigdha Liquid",
    nameHindi: "सानिग्धा",
    description: "Women's gynecological health support",
    image: sanigdhaImg,
  },
  {
    name: "Urostan Syrup",
    nameHindi: "यूरोस्टान सिरप",
    description: "Urinary health and kidney stone support",
    image: urostanImg,
  },
];

const ProductShowcase = () => {
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
            Our Medicines
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6 text-foreground tracking-tight">
            Proprietary Formulas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="border border-border bg-card hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden border-b border-border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-normal text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.nameHindi}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <Link to="/products">
                    <Button 
                      variant="outline" 
                      className="w-full border-border text-foreground hover:bg-muted font-normal"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/products">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-normal"
            >
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
