import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kamleshwar</h3>
                <p className="text-sm opacity-80">Ayurvedic Pharmacy</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Proprietary Ayurvedic Medicine. Trusted for authentic healing and natural wellness.
              GMP Certified, 100% Natural Herbs.
            </p>
            <p className="text-xs opacity-60">
              Mfg. Lic No. 612/Ayu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Our Story</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Testimonials</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Our Medicines</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blitone Syrup</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Respocare Syrup</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Sanigdha Liquid</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Urostan Syrup</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Kamleshwar Ayurvedic Pharmacy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm opacity-60">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
