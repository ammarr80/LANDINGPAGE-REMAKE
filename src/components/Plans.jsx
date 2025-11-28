// 0B0F12
export default function Plans() {
    return (
        <>
            <section className="bg-[#0B0F12] text-white min-h-[80dvh] py-12">
                <div className="flex flex-col gap-3 mb-12">
                    <h2 className="max-w-[23ch] text-3xl text-center mx-auto font-bold">Tailored Plans for Your Manufacturing Scale</h2>
                    <p className="text-sm font-regular text-white/70 text-center">Flexible pricing for any business size.</p>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-8 max-w-[65%] mx-auto">
                        <div className="bg-plans min-h-[70dvh] rounded-3xl px-8 py-4 justify-center flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl">Starter</h3>
                                <p className="text-white/60 max-w-[40ch] text-xs">This package offers the basic features you need to get started.</p>
                            </div>
                            <div className=" flex flex-col text-center gap-3">
                                <div className="flex items-end gap-1">
                                    <h4 className="font-bold text-2xl">$39</h4>
                                    <p className="text-white/60">/</p>
                                    <p className="text-white/60">month</p>
                                </div>
                                <a href="" className="border border-white w-full py-2 rounded-4xl">Get Started</a>
                            </div>
                            <div>
                                <div className="flex items-center justify-center px-4">
                                <div className="border-t-1 flex-grow text-gray-500"></div>
                                <h4 className="text-center text-white/60 text-sm px-8">Features</h4>
                                <div className="border-t-1 flex-grow text-gray-500"></div>
                                </div>
                                <ul className="flex flex-col gap-4">
                                    <li className="text-sm text-white/90">
                                        Production up to 10,000 units per month
                                    </li>
                                    <li className="text-sm text-white/90">
                                        24/7 technical support
                                    </li>
                                    <li className="text-sm text-white/90">
                                        Access the production dashboard
                                    </li>
                                    <li className="text-sm text-white/90">
                                        Initial setup guide
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-plans min-h-[70dvh] rounded-3xl px-8 py-4 justify-center flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl">Enterprise</h3>
                                <p className="text-white/60 max-w-[40ch] text-xs">This package offers full access to all premium features.</p>
                            </div>
                            <div className=" flex flex-col text-center gap-3">
                                <div className="flex items-end gap-1">
                                    <h4 className="font-bold text-2xl">$99</h4>
                                    <p className="text-white/60">/</p>
                                    <p className="text-white/60">month</p>
                                </div>
                                <a href="" className="border border-white w-full py-2 rounded-4xl">Get Started</a>
                            </div>
                            <div>
                                <div className="flex items-center justify-center px-4">
                                <div className="border-t-1 flex-grow text-gray-500"></div>
                                <h4 className="text-center text-white/60 text-sm px-8">Features</h4>
                                <div className="border-t-1 flex-grow text-gray-500"></div>
                                </div>
                                <ul className="flex flex-col gap-4">
                                    <li className="text-sm text-white/90">
                                        Unlimited production units
                                    </li>
                                    <li className="text-sm text-white/90">
                                        Dedicated account manager
                                    </li>
                                    <li className="text-sm text-white/90">
                                        Tailored manufacturing solutions
                                    </li>
                                    <li className="text-sm text-white/90">
                                        Predictive production optimization
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-brand-dark min-h-[35dvh] rounded-2xl max-w-[65%] mx-auto flex flex-col gap-2 justify-center items-center mt-6">
                        <h3 className="text-xl">Professional</h3>
                        <p className="max-w-[40ch] text-sm font-regular text-white/70 mb-6">
                            Designed for greater flexibility, this solution offers
                            advanced tools for custom tailoring to your needs.
                        </p>
                        <a href="" className="bg-secondary text-brand font-semibold text-sm px-8 py-2 rounded-3xl">Get Started</a>
                    </div>
                </div>
            </section>
        </>
    )
}