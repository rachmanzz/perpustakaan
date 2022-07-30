import Link from "next/link";
import { useEffect, useState } from "react";
import BookClockOutline from "../icon/BookClockOutline";
import BookShelf from "../icon/BookShelf";
import HomeOutline from "../icon/HomeOutline";
import UserAccountOutline from "../icon/UserAccountOutline";


type componentType = { children: React.ReactNode }


const MobileVersion = ({children}: componentType) => {
    return (
        <div className="w-full max-h-screen relative">
            <div className="fixed py-2 px-6 flex flex-row justify-between bg-[#FFC978]/[70%] h-16 shadow-mobile-nav w-full bottom-0 z-50">
                <div className="flex items-center justify-center bg-focus-off h-12 w-12">
                    <Link href={"#"}>
                        <a><HomeOutline /></a>
                    </Link>
                </div>
                <div className="flex items-center justify-center bg-focus-off h-12 w-12">
                    <Link href={"#"}>
                        <a><BookClockOutline /></a>
                    </Link>
                </div>
                <div className="flex items-center justify-center bg-focus-off h-12 w-12">
                <Link href={"#"}>
                        <a><BookShelf /></a>
                    </Link>
                </div>
                <div className="flex items-center justify-center bg-focus-off h-12 w-12">
                    <Link href={"#"}>
                        <a><UserAccountOutline /></a>
                    </Link>
                </div>
            </div>
            unu
        </div>
    )
}

const DestopVersion = ({children}: componentType) => {
    return (<div>is web</div>)
}

export default function MainLayout({children}: componentType) {
    const [screenWidth, setScreenWidth] = useState(0);
    const isMobile = screenWidth < 768;
    useEffect(() => {
        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    }, []);

    return screenWidth === 0 ? <></>: isMobile ? <MobileVersion>{children}</MobileVersion> : <DestopVersion>{children}</DestopVersion>;
}