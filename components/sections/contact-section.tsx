"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos; d love to serve you! Make a reservation or just drop by.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-lg overflow-hidden h-full">
              <div className="aspect-[16/9] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2167663465976!2d-73.9877152845943!3d40.758895279325756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1656538743168!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-4 mt-0.5" />
                    <p>
                      123 Delicious Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-4" />
                    <p>(555) 123-4567</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-4" />
                    <p>info@deliciouseats.com</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-4 mt-0.5" />
                    <div>
                      <p className="font-medium">Hours:</p>
                      <p>
                        Monday - Friday: 11am - 10pm
                        <br />
                        Saturday - Sunday: 10am - 11pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Make a Reservation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium mb-1"
                    >
                      Date
                    </label>
                    <Input id="date" type="date" />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium mb-1"
                    >
                      Time
                    </label>
                    <Input id="time" type="time" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium mb-1"
                  >
                    Number of Guests
                  </label>
                  <Input id="guests" type="number" min="1" defaultValue="2" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Special Requests
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Any special requests or dietary requirements?"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book a Table
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
