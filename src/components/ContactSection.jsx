import { MapPin, Clock, Mail, Send } from "lucide-react";
import Button from "../UI/Button";
import toast from "react-hot-toast";

function ContactSection() {
  function handleMessage(e) {
    e.preventDefault();
    toast.success("Message sent successfully! We'll brew a reply soon.");
  }

  return (
    <section className="relative w-full  py-24 lg:py-32 z-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="mb-16 md:mb-24">
          <p className="text-primary-coffee/60 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-coffee mb-6">
            Let's Start a Conversation.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <p className="text-[#50453E] text-lg leading-relaxed mb-4 font-medium">
              Step into our sanctuary for a guided tasting, or drop us a line to
              find your new favorite roast.
            </p>

            <div className="flex flex-col">
              <div className="group flex items-start gap-6 py-6 border-t border-primary-coffee/10">
                <div className="p-3 rounded-full bg-primary-coffee/5 text-primary-coffee group-hover:bg-primary-coffee group-hover:text-white transition-colors duration-300">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-coffee tracking-widest uppercase text-xs mb-2">
                    Location
                  </h4>
                  <p className="text-[#50453E] font-medium leading-relaxed">
                    124 Artisans Lane,
                    <br />
                    The Brew District, Portland OR 97204
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-6 py-6 border-t border-primary-coffee/10">
                <div className="p-3 rounded-full bg-primary-coffee/5 text-primary-coffee group-hover:bg-primary-coffee group-hover:text-white transition-colors duration-300">
                  <Clock size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-coffee tracking-widest uppercase text-xs mb-2">
                    Hours
                  </h4>
                  <p className="text-[#50453E] font-medium leading-relaxed">
                    Mon - Fri: 7:00am - 6:00pm
                    <br />
                    Sat - Sun: 8:00am - 5:00pm
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-6 py-6 border-y border-primary-coffee/10">
                <div className="p-3 rounded-full bg-primary-coffee/5 text-primary-coffee group-hover:bg-primary-coffee group-hover:text-white transition-colors duration-300">
                  <Mail size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-coffee tracking-widest uppercase text-xs mb-2">
                    Contact
                  </h4>
                  <p className="text-[#50453E] font-medium leading-relaxed">
                    hello@velvetbrew.co
                    <br />
                    (503) 555-0128
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <div className="bg-white/60 p-8 md:p-12 rounded-4xl border border-white ">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-coffee mb-10">
                Send us a Message
              </h3>

              <form onSubmit={handleMessage} className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-transparent border-b-2 border-primary-coffee/20 px-0 py-2 text-primary-coffee placeholder-transparent focus:border-primary-coffee focus:ring-0 outline-none transition-all peer"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-4 text-xs font-bold text-primary-coffee/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-coffee/50 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary-coffee cursor-text"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-transparent border-b-2 border-primary-coffee/20 px-0 py-2 text-primary-coffee placeholder-transparent focus:border-primary-coffee focus:ring-0 outline-none transition-all peer"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-4 text-xs font-bold text-primary-coffee/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-coffee/50 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary-coffee cursor-text"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative group mt-2">
                  <textarea
                    id="message"
                    required
                    rows="4"
                    className="w-full bg-transparent border-b-2 border-primary-coffee/20 px-0 py-2 text-primary-coffee placeholder-transparent focus:border-primary-coffee focus:ring-0 outline-none transition-all resize-none peer"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-4 text-xs font-bold text-primary-coffee/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-coffee/50 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary-coffee cursor-text"
                  >
                    How can we help?
                  </label>
                </div>

                <div className="mt-4">
                  <Button>
                    <Send />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
