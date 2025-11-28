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
export default function ProjectsAmount() {
    return (
        <>
            <div id="numbers" className=" flex flex-col gap-4 px-4 py-4">
                            <div className="flex justify-between">
                            <FontAwesomeIcon icon={faBorderAll}  className="bg-secondary rounded-full p-2"/>
                            <FontAwesomeIcon icon={faEllipsisVertical} className="text-slate-500 text-xl"/>
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="font-regular">Total Projects</p>
                                <FontAwesomeIcon icon= {faArrowDown} className="text-[8px] border-2 rounded-full p-1 rotate-[230deg] bg-brand text-white"/>
                                <p className="text-xs">8%</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-4xl">1951+</p>
                                <p className="text-xs text-slate-400">Increase of <span className="text-bright font-bold">126</span> this month</p>
                            </div>
            </div>
        </>
    )
}