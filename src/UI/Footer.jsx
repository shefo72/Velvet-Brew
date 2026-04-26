import { ArrowRight, Globe, Volume2, Coffee } from "lucide-react";

const footerLinks = {
  menu: ["Coffee Beans", "Brewing Gear", "Subscriptions", "Merchandise"],
  company: ["Privacy Policy", "Terms of Service", "Sustainability", "Careers"],
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F4] pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 justify-center  md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-xl font-bold text-primary-coffee">
            Velvet Brew
          </h2>
          <p className="text-muted-coffee text-sm leading-relaxed max-w-xs">
            Elevating your daily ritual with artisanal precision and a
            commitment to sustainability.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm text-primary-coffee">Menu</h3>
          <ul className="space-y-3">
            {footerLinks.menu.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-muted-coffee text-sm hover:text-primary-coffee transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm text-primary-coffee">Company</h3>
          <ul className="space-y-3">
            {footerLinks.company.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-muted-coffee text-sm hover:text-primary-coffee transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm text-primary-coffee">Newsletter</h3>
          <p className="text-muted-coffee text-sm max-w-xs">
            Join our list for exclusive releases and brewing tips.
          </p>

          <div className="relative mt-2 max-w-sm">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white rounded-full py-3.5 pl-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary-coffee/30 shadow-sm transition-all"
            />
            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary-coffee text-white rounded-full aspect-square flex items-center justify-center cursor-pointer transition-colors hover:bg-coffee-hover">
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t-2 border-gray-200 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <p className="text-muted-coffee text-xs md:text-sm text-center md:text-left">
          © {year} Velvet Brew. Artisanal Roastery.
        </p>

        <div className="flex items-center gap-6">
          <FooterIcon>
            <Globe size={20} strokeWidth={1.5} />
          </FooterIcon>
          <FooterIcon>
            <Volume2 size={20} strokeWidth={1.5} />
          </FooterIcon>
          <FooterIcon>
            <Coffee size={20} strokeWidth={1.5} />
          </FooterIcon>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function FooterIcon({ children }) {
  return (
    <button className="text-muted-coffee hover:text-primary-coffee transition-colors cursor-pointer">
      {children}
    </button>
  );
}
