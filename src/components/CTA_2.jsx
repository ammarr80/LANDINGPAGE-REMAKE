import WorkWithUsBtn from "../UI/WorkWithUsBtn"
export default function CTA_2() {
    return (
        <>
            <section className="bg-brand-dark text-center min-h-[50dvh] justify-center flex flex-col items-center py-8 gap-4">
                <h2 className="text-white text-4xl font-bold">From Idea to Production in Days</h2>
                <p className="leading-relaxed text-white/60 text-sm max-w-[50ch] mb-2">
                    Accelerate your production with our technology. Reduce
                    downtime and optimize costs. Get a special offer now!
                </p>
                <WorkWithUsBtn />
            </section>
        </>
    )
}