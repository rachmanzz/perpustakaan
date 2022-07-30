import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BookClockOutline from "../icon/BookClockOutline";
import BookShelf from "../icon/BookShelf";
import HomeOutline from "../icon/HomeOutline";
import UserAccountOutline from "../icon/UserAccountOutline";


type componentType = { children: React.ReactNode }


const MobileVersion = ({children}: componentType) => {
    const {pathname} = useRouter()
    return (
        <div className="w-full max-h-screen relative">
            <div className="fixed py-2 px-6 flex flex-row justify-between bg-[#FBD9A5] h-16 shadow-mobile-nav w-full bottom-0 z-50">
                <div>
                    <Link href="/">
                        <a className={`appearance-none flex items-center justify-center rounded-full h-12 w-12 ${pathname == '/' ? 'bg-[#FFC876]': 'bg-focus-off'}`}><HomeOutline /></a>
                    </Link>
                </div>
                <div>
                    <Link  href="/book-borrowed">
                        <a className={`flex hover:rounded-full items-center justify-center rounded-full h-12 w-12 ${pathname == '/book-borrowed' ? 'bg-[#FFC876]': 'bg-focus-off'}`}><BookClockOutline /></a>
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
            <div className="z-20 p-16">{children}</div>
        </div>
    )
}

const DestopVersion = ({children}: componentType) => {
    const {pathname} = useRouter()
    const [heightSize, setHeightSize] = useState(400)
    useEffect(() => {
        setHeightSize(window.innerHeight)
        const handleResize = () => {
            setHeightSize(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <React.Fragment>
            <div className="w-full pl-16">
                <div className="fixed h-full w-16 gap-5 left-0 bg-[#FBD9A5] shadow flex flex-col items-center">
                    <div>
                        <Link href="/">
                            <a className={`appearance-none flex items-center justify-center rounded-full h-12 w-12 ${pathname == '/' ? 'bg-[#FFC876]': 'bg-focus-off'}`}><HomeOutline /></a>
                        </Link>
                    </div>
                    <div>
                        <Link  href="/book-borrowed">
                            <a className={`flex hover:rounded-full items-center justify-center rounded-full h-12 w-12 ${pathname == '/book-borrowed' ? 'bg-[#FFC876]': 'bg-focus-off'}`}><BookClockOutline /></a>
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
                <div className="flex flex-col relative flex-1">
                    {/* header */}
                    <div className="w-full top-0 z-50 border-b border-orange-300/20 pl-10 pr-20  flex items-center h-16">
                        <div className="flex flex-row items-center w-full justify-between">
                            <div>kalska</div>
                            <div className="flex flex-row">
                                {/* profile picture border */}
                                <div className="rounded-full overflow-hidden flex justify-center items-center bg-orange-200 w-10 h-10 border-2 border-orange-300">
                                    {/* initial text */}
                                    <div className="text-orange-300 font-bold text-center">R</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: (400+64) < heightSize ? heightSize - 70: heightSize }} className="overflow-y-scroll px-10">{children}</div>
                </div>
            </div>
        </React.Fragment>
    )
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