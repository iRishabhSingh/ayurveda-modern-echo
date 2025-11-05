import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
    description: "Weakness, Health & Brain Tonic",
    benefits: "Complete health restoration and mental clarity",
    image: blitoneImg,
    color: "from-red-500/20 to-yellow-500/20",
  },
  {
    name: "Respocare Syrup",
    nameHindi: "रेस्पोकेयर सिरप",
    description: "Radical Freedom from Allergy",
    benefits: "Allergic rhinitis, bronchitis, asthma relief",
    image: respocareImg,
    color: "from-green-500/20 to-yellow-500/20",
  },
  {
    name: "Sanigdha Liquid",
    nameHindi: "सानिग्धा",
    description: "Gynec Health",
    benefits: "Women's wellness and hormonal balance",
    image: sanigdhaImg,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "Urostan Syrup",
    nameHindi: "यूरोस्टान सिरप",
    description: "Crushes-Dissolves-Excretes & Clears",
    benefits: "Urinary health and kidney stone support",
    image: urostanImg,
    color: "from-yellow-500/20 to-green-500/20",
  },
];

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Medicines
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Proprietary Ayurvedic Formulas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each medicine is crafted using traditional Quath Method extraction, ensuring maximum potency and purity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Image Section */}
                <div className={`relative h-80 bg-gradient-to-br ${product.color} overflow-hidden`}>
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {product.nameHindi}
                    </p>
                  </div>

                  <p className="text-secondary font-semibold mb-3">
                    {product.description}
                  </p>

                  <p className="text-muted-foreground mb-6 flex-1">
                    {product.benefits}
                  </p>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
