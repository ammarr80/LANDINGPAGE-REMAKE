import {
    Linkedin,
    Instagram,
    Facebook,
} from "lucide-react";
import img from "../assets/image.png";

const footerLinks = [
  {
    title: "Company",
    links: [
      "About Us",
      "Customers",
      "Newsroom",
      "Events"
    ]
  },
  {
    title: "Industries",
    links: [
      "Precision Metalforming",
      "Industrial Manufacturing",
      "High Tech & electronics",
      "Aerospace"
    ]
  },
  {
    title: "Products",
    links: [
      "Manufacturing Execution System",
      "Enterprise Resource Planning",
      "Quality Management System",
      "Supply Chain Planning"
    ]
  }
];

export default function Footer() {
    return (
        <>
            <footer className="bg-black min-h-[50dvh] py-8 text-white">
                <div className="grid grid-cols-[1fr_4fr] min-h-[40dvh] px-12 py-8">
                    <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <img src={img} alt="brand_logo" className="w-12 h-12 rounded-full" />
                        <h3 className="text-lg font-regular">Prodmast</h3>
                    </div>
                    <div>
                        <p className="text-white/70 font-regular text-sm">Our solutions make production faster and cheaper. Contact us for more information.</p>
                    </div>
                    </div>
                    <div className="flex justify-around">
                        {footerLinks.map((link) => (
                            <div className="flex flex-col gap-2">
                            <h4 className="text-md font-regular">{link.title}</h4>
                            {link.links.map((link) => (
                                <a href="" className="text-white/60 text-sm">{link}</a>
                            ))}
                        </div>
                        ))}
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-regular">Get In Touch</h4>
                            <a href="" className="text-white/80 text-sm underline">hallo@prodmast.com</a>
                            <div className="flex items-center gap-2">
                                <div className="bg-gray-800/60 p-2 max-w-[40px] flex flex-col items-center">
                                    <a href="">
                                        <Instagram size={20} strokeWidth={2} />
                                    </a>
                                </div>
                                <div className="bg-gray-800/60 p-2 max-w-[40px] flex flex-col items-center">
                                    <a href="">
                                        <Linkedin size={20} strokeWidth={1.5}  />
                                    </a>
                                </div>
                                <div className="bg-gray-800/60 p-2 max-w-[40px] flex flex-col items-center">
                                    <a href="">
                                        <Facebook size={20} strokeWidth={1.5}  />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between px-12">
                    <p className="text-white/60 text-sm">&copy; 2024 Prodmast. All rights reserved</p>
                    <div className="flex gap-2">
                        <a href="" className="text-white/60 text-sm">Terms & Condition</a>
                        <a href="" className="text-white/60 text-sm">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </>
    );
};