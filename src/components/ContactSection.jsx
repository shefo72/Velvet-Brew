import { MapPin, Clock, Mail } from "lucide-react";
import Button from "../UI/Button";

function ContactSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-20 py-16 z-10">
      <div className="flex flex-col lg:flex-row w-full rounded-4xl overflow-hidden shadow-sm">
        <div className="w-full lg:w-1/2 bg-white/70 p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-coffee mb-4">
            Visit Our Roastery
          </h2>
          <p className="text-primary-coffee text-sm md:text-base opacity-80 mb-10 max-w-sm leading-relaxed">
            Step into our sanctuary for a guided tasting or to find your new
            favorite roast.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary-coffee mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-primary-coffee text-sm mb-1">
                  Location
                </h4>
                <p className="text-sm text-gray-500">
                  124 Artisans Lane,
                  <br />
                  The Brew District, Portland OR 97204
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-primary-coffee mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-primary-coffee text-sm mb-1">
                  Hours
                </h4>
                <p className="text-sm text-gray-500">
                  Mon - Fri: 7:00am - 6:00pm
                  <br />
                  Sat - Sun: 8:00am - 5:00pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-primary-coffee mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-primary-coffee text-sm mb-1">
                  Contact
                </h4>
                <p className="text-sm text-gray-500">
                  hello@velvetbrew.co
                  <br />
                  (503) 555-0128
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#F5F5DC]/50  p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary-coffee mb-8">
            Send us a Message
          </h2>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-primary-coffee">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/60 border border-transparent focus:border-primary-coffee focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-primary-coffee">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/60 border border-transparent focus:border-primary-coffee focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-primary-coffee">
                Message
              </label>
              <textarea
                placeholder="How can we help?"
                rows="4"
                className="w-full bg-white/60 border border-transparent focus:border-primary-coffee focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none placeholder:text-gray-400"
              ></textarea>
            </div>

            <Button>Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
