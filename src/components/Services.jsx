import {
    ArrowUpRight,
    Asterisk,
    Layers2,
    Wrench,
    ShieldHalf,
    Box,
    ChartLine,
} from "lucide-react";
export default function Services() {
    return (
        <>
            <section className="bg-brand-dark min-h-[90dvh] py-20">
                <div className="flex flex-col gap-4 mb-12">
                    <h2 className="text-4xl font-bold text-white text-center max-w-[24ch] mx-auto">Efficient and Integrated Manufacturing Services</h2>
                    <p className="text-white/90 text-center text-regular text-sm">Simplify operations with our efficient, quality-focused services.</p>
                </div>

                <div className="w-[90%] mx-auto">
                    <div className="grid grid-cols-3 gap-8 w-full text-white px-4">
                        <div className="bg-cards py-8 min-h-[35dvh] rounded-2xl max-w-[340px] px-7 flex flex-col">
                            <div className="flex items-center justify-between">
                                <Asterisk strokeWidth={1} size={52}/>
                                <ArrowUpRight strokeWidth={1.5} className="text-xs"/>
                            </div>
                            <div className="mt-auto flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Production and Assembly</h3>
                                <p className="font-regular text-sm max-w-[40ch] text-white/70">Details on production processes, assembly, capacity and product types.</p>
                            </div>
                        </div>
                        <div className="bg-cards py-8 min-h-[35dvh] rounded-2xl max-w-[340px] px-7 flex flex-col">
                            <div className="flex items-center justify-between">
                                <Layers2 strokeWidth={1} size={36} />
                                <ArrowUpRight strokeWidth={1.5} className="text-xs"/>
                            </div>
                            <div className="mt-auto flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Custom Manufacturing</h3>
                                <p className="font-regular text-sm max-w-[40ch] text-white/70">Custom product creation with design and customization options.</p>
                            </div>
                        </div>
                        <div className="bg-cards py-8 min-h-[35dvh] rounded-2xl max-w-[340px] px-7 flex flex-col">
                            <div className="flex items-center justify-between">
                                <Wrench size={36} strokeWidth={1} />
                                <ArrowUpRight strokeWidth={1.5} className="text-xs"/>
                            </div>
                            <div className="mt-auto flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Quality Control</h3>
                                <p className="font-regular text-sm max-w-[40ch] text-white/70">Procedures and systems in place to ensure high product quality.</p>
                            </div>
                        </div>
                        <div className="bg-cards py-8 min-h-[35dvh] rounded-2xl max-w-[340px] px-7 flex flex-col">
                            <div className="flex items-center justify-between">
                                <ShieldHalf size={40} strokeWidth={1} />
                                <ArrowUpRight strokeWidth={1.5} className="text-xs"/>
                            </div>
                            <div className="mt-auto flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Technology and Innovation</h3>
                                <p className="font-regular text-sm max-w-[40ch] text-white/70">Details on the latest manufacturing technologies and ongoing innovations.</p>
                            </div>
                        </div>
                        <div className="bg-cards py-8 min-h-[35dvh] rounded-2xl max-w-[340px] px-7 flex flex-col">
                            <div className="flex items-center justify-between">
                                <Box size={42} strokeWidth={1} />
                                <ArrowUpRight strokeWidth={1.5} className="text-xs"/>
                            </div>
                            <div className="mt-auto flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Package and Logistics</h3>
                                <p className="font-regular text-sm max-w-[40ch] text-white/70">Packaging and logistics for shipping to customers and distributors.</p>
                            </div>
                        </div>
                        <div className="bg-cards py-8 min-h-[35dvh] rounded-2xl max-w-[340px] px-7 flex flex-col">
                            <div className="flex items-center justify-between">
                                <ChartLine size={32} strokeWidth={1} />
                                <ArrowUpRight strokeWidth={1.5} className="text-xs"/>
                            </div>
                            <div className="mt-auto flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Consulting Market Research</h3>
                                <p className="font-regular text-sm max-w-[40ch] text-white/70">Services to help companies understand market needs and provide strategic advice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
