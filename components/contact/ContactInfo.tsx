import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-h2 mb-6">Get in Touch</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-rich-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-rich-gold" />
          </div>
          <div>
            <h3 className="text-h4 mb-2 text-deep-teal">Address</h3>
            <p className="text-warm-gray">
              Orlando, FL, USA
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-rich-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-rich-gold" />
          </div>
          <div>
            <h3 className="text-h4 mb-2 text-deep-teal">Email</h3>
            <a
              href="mailto:contact@nualandalusia.com"
              className="text-warm-gray hover:text-deep-teal transition-colors"
            >
              contact@nualandalusia.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-rich-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-rich-gold" />
          </div>
          <div>
            <h3 className="text-h4 mb-2 text-deep-teal">Response Time</h3>
            <p className="text-warm-gray">
              We typically respond within 24-48 hours
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-cream rounded-card">
        <h3 className="text-h4 mb-4 text-deep-teal">Office Hours</h3>
        <div className="space-y-2 text-warm-gray">
          <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
          <p>Saturday: By appointment</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}


