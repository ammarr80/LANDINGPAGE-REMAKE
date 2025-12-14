import logo from "../assets/image.png";
export default function Hero() {
    return (
        <>    
    <header className="bg-[#F5F7F9] max-w-[85%] py-4 mx-auto flex justify-between items-center py-2">
        <div className="flex gap-4 items-center">
            <a href=""><img src={logo} alt="logo_img" className="w-12 h-12 rounded-full"/></a>
            <a href="" className="text-semibold">Prodmast</a>
        </div>
        <nav className="gap-8 flex mr-16">
            <a href="" className="text-medium">Home</a>
            <a href="" className="">About</a>
            <a href="" className="">Services</a>
            <a href="" className="">Contact</a>
        </nav>
        <div>
            <a href="" className="bg-brand text-white text-medium py-2 px-4 rounded-3xl">Sign up</a>
        </div>
    </header>
        </>
    );
};