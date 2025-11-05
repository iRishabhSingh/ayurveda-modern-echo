import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-foreground flex items-center justify-center">
                <Leaf className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-normal">Kamleshwar</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm leading-relaxed">
              Proprietary Ayurvedic Medicine. Trusted for authentic healing and natural wellness.
              GMP Certified, 100% Natural Herbs.
            </p>
            <p className="text-xs text-muted-foreground">
              Mfg. Lic No. 612/Ayu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-normal mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Products</Link></li>
              <li><Link to="/testimonials" className="hover:text-foreground transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-normal mb-4 text-sm">Our Medicines</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-foreground transition-colors">Blitone Syrup</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Respocare Syrup</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Sanigdha Liquid</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Urostan Syrup</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Kamleshwar Ayurvedic Pharmacy. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
