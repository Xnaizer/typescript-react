import { type ImgType } from "@/app/page";
import Image from "next/image";

type HeaderProps = {
    image : ImgType;
}

const Header:React.FC<HeaderProps> = ({image}) => {

    return (
        <header>
            <Image src={image.src} alt={image.alt} className="w-32 p-4" />
            <h1 className="font-semibold text-2xl">Hello Welcome</h1>
            <div className="h-1 w-full bg-red-500 mt-2"></div>
        </header>
    )
}

export default Header;