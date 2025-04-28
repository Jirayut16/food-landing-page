import Link from "next/link";
import { UtensilsCrossed, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold ">DeliciousEats</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Serving exceptional food with passion since 2010. We bring
              culinary delights to your table every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Delicious Street</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">(555) 123-4567</p>
              <p>info@deliciouseats.com</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium">Monday - Friday:</span> 11am -
                10pm
              </li>
              <li>
                <span className="font-medium">Saturday:</span> 10am - 11pm
              </li>
              <li>
                <span className="font-medium">Sunday:</span> 10am - 11pm
              </li>
              <li className="text-primary font-medium mt-2">
                Order online 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} DeliciousEats. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
