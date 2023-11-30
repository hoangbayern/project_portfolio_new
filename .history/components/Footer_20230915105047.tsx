import { socialLinks } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="pb-1">
      <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
        {socialLinks.map((link) => (
          <a key={link.id} href={link.hash} target="_blank">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              {link.icon}
            </span>
          </a>
        ))}
      </div>
      <div className="text-center font-medium text-white border-t-orange-50">
        <span className="font-semibold text-textGreen">About this website:</span> Build with
        React & NextJs by HuyHoang
      </div>
    </footer>
  );
};

export default Footer;
