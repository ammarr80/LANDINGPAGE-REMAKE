import companies  from "../assets/companies.png";
import WorkWithUsBtn from "../UI/WorkWithUsBtn";
export default function CTA() {
    return (
        <>
            <section className="bg-white grid grid-cols-2 items-center justify-center">
                <div className="flex flex-col gap-8 justify-center max-w-[80%] mx-auto">
                    <h2 className="font-bold max-w-[24ch] text-3xl">Empowering Top Companies with Seamless Integrations</h2>
                    <p className="text-black/60 text-sm max-w-[56ch] text-sm">
                        Experience seamless connections with our innovative solutions, designed
                        to effortlessly integrate with your existing systems, enhance productivity,
                        and drive your business towards greater success.
                    </p>
                    <WorkWithUsBtn />
                </div>
                <div className="">
                    <img src={companies} alt="companies_worked_with" className="py-12 rounded px-20 mx-auto" />
                </div>
            </section>
        </>
    )
}