import ProjectsAmount from "../UI/ProjectsAmount";
import {
    ArrowUpRight,
} from "lucide-react";
export default function KeyBenefits() {
    return (
        <>
            <section className="bg-white text-black grid grid-cols-[1.5fr_2fr] min-h-[80dvh]  px-28 items-center">
                <div className="bg-slate-200 h-[90%] py-8 flex flex-col justify-center items-center relative rounded-lg">
                    <div className="bg-white min-h-[90%] w-[70%] rounded-lg px-4 py-6 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-black/40 font-regular text-sm">Total Projects</h4>
                            <div className="flex gap-2">
                                <h5 className="font-semibold text-sm">1475</h5>
                                <p className="flex items-center gap-1"> <ArrowUpRight color="#69DCA3" strokeWidth={3} className="font-bold bg-secondary text-brand" size={10} /> <span className="text-xs font-bold text-bright">34%</span> </p>
                            </div>
                        </div>
                        <hr className="text-gray-200" />
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <div className="max-w-[8ch]">
                                    <h6 className="text-xs text-black/40">Finished</h6>
                                </div>
                                <div className="w-[100%] px-4">
                                    <div className="min-h-[2vh] w-[70%] bg-slate-200 rounded"></div>
                                </div>
                                <div className="max-w-[3ch]">
                                    <p className="text-xs font-bold">10%</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <div className="w-[40%]">
                                    <h6 className="text-xs text-black/40">In Progress</h6>
                                </div>
                                <div className="w-[100%]">
                                    <div className="min-h-[2vh] w-[80%] bg-slate-200 rounded"></div>
                                </div>
                                <div className="max-w-[3ch]">
                                    <p className="text-xs font-bold">13%</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-[30%]">
                                    <h6 className="text-xs text-black/40">Rejected</h6>
                                </div>
                                <div className="w-[100%]">
                                    <div className="min-h-[2vh] w-[75%] bg-slate-200 rounded"></div>
                                </div>
                                <div className="max-w-[3ch]">
                                    <p className="text-xs font-bold">11%</p>
                                </div>
                            </div>
                        </div>
                        <hr className="text-gray-200"/>
                        <div className="flex flex-col gap-6">
                            <div>
                                <div className="min-h-[2dvh] bg-slate-200"></div>
                            </div>
                            <div className="flex gap-2 items-end">
                                <div className="bg-[#0C363C] rounded h-[15dvh] self-end w-[20px]"></div>
                                <div className="bg-[#1AA680] rounded h-[10dvh] w-[20px]"></div>
                                <div className="bg-[#0A373C] rounded h-[7dvh] w-[20px]"></div>
                                <div className="bg-[#1BA680] rounded h-[12dvh] w-[20px]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-[55%] rounded-3xl absolute bottom-6 right-4 px-4">
                        <ProjectsAmount />
                    </div>
                </div>
                <div className="h-[80%] px-12 flex flex-col gap-3">
                    <div className="flex gap-4 flex-col">
                        <h2 className="font-bold text-3xl">Key Benefits of Our System for Your Business Efficiency</h2>
                        <p className="text-black/50 text-sm font-regular">Our systems boost productivity, cut costs and drive business growth.</p>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li className="">
                            <div></div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Boosting Quality with Tech</h3>
                                <p className="text-black/50 text-sm font-regular">
                                    With advanced technology, we help you achieve top product quality.
                                    Discover how we can enhance your standards.
                                </p>
                            </div>
                        </li>
                        <li className="flex flex-col gap-4">
                            <div></div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Optimization Production Process</h3>
                                <p className="text-black/50 text-sm font-regular">
                                    Boost factory efficiency and productivity with our innovative solutions.
                                    See how the latest technology can maximize your output.
                                </p>
                            </div>
                        </li>
                        <li className="flex flex-col gap-4">
                            <div></div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Al-Driven Production</h3>
                                <p className="text-black/50 text-sm font-regular">
                                    Leverage the power of Al to transform your manufacturing processes,
                                    achieving faster and more effective results. 
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};