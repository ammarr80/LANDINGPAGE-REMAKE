import {
    Linkedin,
    Instagram,
    Facebook,
} from "lucide-react";
import img from "../assets/image.png";
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
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-regular">Company</h4>
                            <a href="" className="text-white/60 text-sm">About Us</a>
                            <a href="" className="text-white/60 text-sm">Customers</a>
                            <a href="" className="text-white/60 text-sm">Newsroom</a>
                            <a href="" className="text-white/60 text-sm">Events</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-regular">Industries</h4>
                            <a href="" className="text-white/60 text-sm">Precision Metailforming</a>
                            <a href="" className="text-white/60 text-sm">Industrial Manufacturing</a>
                            <a href="" className="text-white/60 text-sm">High Tect & electronics </a>
                            <a href="" className="text-white/60 text-sm">Aerospace</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-regular">Products</h4>
                            <a href="" className="text-white/60 text-sm">Manufacturing Execution System</a>
                            <a href="" className="text-white/60 text-sm">Enterprise Resource Plannin</a>
                            <a href="" className="text-white/60 text-sm">Quality Management System</a>
                            <a href="" className="text-white/60 text-sm">Supply Chain Planning</a>
                        </div>
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
    )
}