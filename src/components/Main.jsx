import { Gauge } from "lucide-react";
import img from "../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowDown,
  faBorderAll,
  faFileLines,
  faWater,
  faChartSimple,
  faDiamond,
  faStar,
  faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";
import ProjectsAmount from "../UI/ProjectsAmount";
export default function Main( {reviewNumber} ) {
    return (
        <>
            <main className="bg-white max-w-[90%] mx-auto py-20">
                <h1 className="text-center mx-auto max-w-[60%] font-bold text-5xl leading-tight">The Future of Manufacturing with <span className="text-brand">Latest Technology</span></h1>
                <div id="CTA+TAGLINE" className="flex justify-between px-12 text-center py-2">
                    <div className="flex items-center gap-4 min-h-[15dvh] w-[60px]">
                        <div className="w-[400px] h-[40px]">
                            <FontAwesomeIcon icon= {faArrowDown} className="rotate-[230deg] w-full border text-brand p-3 h-[40px] rounded-full"/>
                            
                        </div>
                        <div className="flex flex-col gap-14 ">
                            <div className="bg-brand text-white rounded-full p-2">
                                <FontAwesomeIcon icon={faDiamond} className=""/>
                            </div>
                            
                            <FontAwesomeIcon icon={faFileLines} className="bg-secondary text-brand p-3 rounded-full"/>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <p className="text-[16px]">Expert tech to elevate your manufacturing. Let's take your business further.</p>
                        <div className="flex gap-4">
                            <a href="" className="bg-accent text-secondary px-6 text-medium py-3 rounded-4xl">Get Started</a>
                            <a href="" className="bg-white border border-slate-300 text-brand text-semibold px-7 py-3 rounded-4xl">Try Demo</a>
                        </div>
                    </div>
                    <div className=" flex w-[10%]">
                        <FontAwesomeIcon icon={faWater} className="mt-auto border text-lg rounded-full text-brand p-3"/>
                        <FontAwesomeIcon icon={faChartSimple} className="ml-auto text-lg mt-10 bg-secondary border rounded-full p-3"/>
                    </div>
                </div>
                {/* 25% 15% 20% 15% 25% */}
                <div id="mainCards" className="max-h-[55dvh] mx-auto justify-center flex gap-8 p-8">
                    <div id="picture" className="">
                        <img src={img} alt="pipelines_picture" className="min-h-[45dvh] w-[200px] rounded-4xl"/>
                    </div>
                    <div id="clients" className="bg-cards min-h-[40dvh] mt-8 flex flex-col justify-center gap-4 text-center text-white px-3 rounded-4xl">
                        <p className="font-bold text-4xl">100+</p>
                        <p className="font-regular max-w-[15ch] text-white/90">Our Esteemed Clients and Partners</p>
                    </div>
                    <div id="total_projects" className=" w-[25%] flex justify-end flex-col">
                        <div className="flex items-center justify-center gap-1 relative -top-18">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                            <p className="font-bold">5.0</p>
                        </div>
                            <div className="flex justify-center relative -top-18">
                                <p className="flex items-center">from 80+ <a href="" className="underline font-semibold">reviews</a> </p>
                            </div>
                            <div className="bg-white/90 rounded-3xl px-4 w-[95%] mx-auto">
                                <ProjectsAmount />
                            </div>
                    </div>
                    <div id="experience" className=" flex items-center flex-col justify-center text-center bg-secondary rounded-4xl mt-8 px-11 gap-2">
                        <h2 className="font-bold text-4xl text-black/90">6+</h2>
                        <p className="font-regular max-w-[9ch]">Years of Dedicated Serivce</p>
                    </div>
                    <div id="service" className="bg-brand rounded-4xl min-h-[45dvh] text-white w-[20%] flex flex-col justify-end pb-12 gap-4 px-6 relative overflow-hidden">
                        <div className="bg-transparent border-secondary rounded-full min-h-[3dvh] w-[200px] p-24 absolute -top-32 -left-28 "></div>
                        <Gauge />
                        <p className="">Achieve Optimal Efficiency and Boost Productivity</p>
                    </div>
                </div>
            </main>
        </>
    );
};