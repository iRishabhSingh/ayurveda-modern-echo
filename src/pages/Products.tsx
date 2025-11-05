import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import blitoneImg from "@/assets/product-blitone.jpg";
import respocareImg from "@/assets/product-respocare.jpg";
import sanigdhaImg from "@/assets/product-sanigdha.jpg";
import urostanImg from "@/assets/product-urostan.jpg";

const products = [
  {
    id: "blitone",
    name: "Blitone Syrup",
    nameHindi: "ब्लीटोन सिरप",
    tagline: "Complete Health & Brain Tonic",
    description: "A comprehensive Ayurvedic formula for weakness, fatigue, and mental clarity. Blitone combines 13 powerful herbs to restore vitality and enhance cognitive function.",
    benefits: [
      "Boosts energy and reduces weakness",
      "Enhances brain function and memory",
      "Improves overall health and immunity",
      "Natural stress relief",
    ],
    composition: "Contains Ashwagandha, Shatavari, Brahmi, and 10 more herbs",
    image: blitoneImg,
    color: "from-red-500/20 to-yellow-500/20",
  },
  {
    id: "respocare",
    name: "Respocare Syrup",
    nameHindi: "रेस्पोकेयर सिरप",
    tagline: "Radical Freedom from Allergy",
    description: "Revolutionary Ayurvedic solution for respiratory allergies, bronchitis, and asthma. Provides natural relief without side effects.",
    benefits: [
      "Relieves allergic rhinitis",
      "Treats allergic bronchitis",
      "Manages asthma symptoms",
      "Clears respiratory passages",
    ],
    composition: "Contains Tulsi, Vasaka, Kantakari, and 10 more herbs",
    image: respocareImg,
    color: "from-green-500/20 to-yellow-500/20",
  },
  {
    id: "sanigdha",
    name: "Sanigdha Liquid",
    nameHindi: "सानिग्धा",
    tagline: "Women's Gynec Health",
    description: "Specially formulated for women's health, addressing menstrual irregularities, hormonal balance, and overall gynecological wellness.",
    benefits: [
      "Regulates menstrual cycle",
      "Balances hormones naturally",
      "Reduces menstrual pain",
      "Supports reproductive health",
    ],
    composition: "Contains Saraca Indica, Symplocos, Ashoka, and 11 more herbs",
    image: sanigdhaImg,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "urostan",
    name: "Urostan Syrup",
    nameHindi: "यूरोस्टान सिरप",
    tagline: "Crushes-Dissolves-Excretes & Clears",
    description: "Powerful Ayurvedic formula for urinary health, kidney stones, and UTI prevention. Dissolves stones naturally and promotes kidney health.",
    benefits: [
      "Dissolves kidney stones",
      "Relieves urinary infections",
      "Reduces burning sensation",
      "Promotes kidney health",
    ],
    composition: "Contains Panchtirimool, Punarnava, Gokhru, and 6 more herbs",
    image: urostanImg,
    color: "from-yellow-500/20 to-green-500/20",
  },
];

const Products = () => {
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
            <div className="flex items-center justify-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Our Medicines
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Proprietary Ayurvedic <span className="text-primary">Formulas</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Each medicine is crafted using traditional Quath Method extraction with GMP-certified quality standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className={`relative h-80 bg-gradient-to-br ${product.color}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {product.name}
                      </h2>
                      <p className="text-lg text-primary font-medium mb-2">
                        {product.nameHindi}
                      </p>
                      <p className="text-secondary font-semibold">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-bold text-foreground mb-3">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                      <span className="font-semibold text-foreground">Composition:</span> {product.composition}
                    </p>

                    <Link to={`/products/${product.id}`} className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted">
        <div className="container px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-4xl font-bold text-primary mb-2">GMP</p>
              <p className="text-muted-foreground">Certified Manufacturing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-secondary mb-2">100%</p>
              <p className="text-muted-foreground">Natural Herbs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-accent mb-2">20+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
