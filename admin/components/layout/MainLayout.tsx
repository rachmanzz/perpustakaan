import Link from "next/link";
import { useRouter } from "next/router";
import { type } from "os";
import React, { useEffect, useState } from "react";
import AccountCircleOutline from "../icon/AccountCircleOutline";
import BellOutline from "../icon/BellOutline";
import BookClockOutline from "../icon/BookClockOutline";
import BookShelf from "../icon/BookShelf";
import HomeOutline from "../icon/HomeOutline";
import UserAccountOutline from "../icon/UserAccountOutline";


type componentType = { children: React.ReactNode }

type spreadNodeType = { mobileOnly?: React.ReactElement, desktopOnly?: React.ReactElement }
type spreadClassType = { component: React.ReactElement, mobileClassName?: string, desktopClassName?: string }

interface mainLayoutType extends componentType {
    leftComponent?: React.ReactElement,
    both?: spreadClassType,
    specific?: spreadNodeType
}

interface bothLayoutType extends componentType {
    leftComponent?: React.ReactElement
    className?: string
}


const MobileVersion = ({children, leftComponent, className}: bothLayoutType) => {
    const {pathname} = useRouter()
    const leftElement = leftComponent && React.cloneElement(leftComponent, (props: any) => ({className}))
    return (
        <div className="w-full max-h-screen relative">
            <div className="w-full z-30 fixed top-0 bg-[#F7EEDE]  border-b border-orange-300/20 px-3  flex items-center h-16">
                <div className="flex flex-row items-center w-full justify-between">
                    <div>
                        {leftElement}

                        {/* <div className="relative">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <span className="absolute inset-y-0 left-0 z-10 flex items-center">
                                <span className="py-2 pl-1">
                                    <AccountCircleOutline size={24} />
                                </span>
                            </span>
                            <input id="email-address" name="search" type="text" autoComplete="off" required className="appearance-none rounded pl-8 pr-2 placeholder:text-[#F39508]/[50%] font-sans relative w-full  py-2 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" />
                        </div> */}
                    </div>
                    <div className="flex flex-row gap-3">
                        {/* bell icon */}
                        <div className="flex items-center rounded-full justify-center h-8 w-8 bg-focus-off-dark">
                            <BellOutline size={24} />
                        </div>
                        <div className="rounded-full overflow-hidden flex justify-center items-center bg-orange-200 w-8 h-8 border-2 border-orange-300">
                            {/* initial text */}
                            <div className="text-orange-300 font-bold text-center">R</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed py-2 px-6 flex flex-row justify-between bg-[#FBD9A5] h-16 shadow-mobile-nav w-full bottom-0 z-50">
                <div>
                    <Link href="/">
                        <a className={`appearance-none touch-action-none flex items-center justify-center rounded-full h-12 w-12 ${pathname == '/' ? 'bg-[#FFC876]': 'bg-focus-off'}`}><HomeOutline /></a>
                    </Link>
                </div>
                <div>
                    <Link  href="/book-borrowed">
                        <a className={`flex hover:rounded-full touch-action-none items-center justify-center rounded-full h-12 w-12 ${pathname == '/book-borrowed' ? 'bg-[#FFC876]': 'bg-focus-off'}`}><BookClockOutline /></a>
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
            <div className="z-20 py-16">{children}</div>
        </div>
    )
}

const DestopVersion = ({children, leftComponent, className}: bothLayoutType) => {
    const {pathname} = useRouter()
    const [heightSize, setHeightSize] = useState(400)
    const leftElement = leftComponent && React.cloneElement(leftComponent, {className})
    
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
                    <div className="w-full top-0 z-50 border-b border-orange-300/20 pl-10 pr-20  flex items-center h-16">
                        <div className="flex flex-row items-center w-full justify-between">
                            <div>{leftElement}</div>
                            <div className="flex flex-row gap-5">
                                {/* bell icon */}
                                <div className="flex items-center rounded-full justify-center h-10 w-10 bg-focus-off-dark">
                                    <BellOutline />
                                </div>
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
export default function MainLayout({children, ...props}: mainLayoutType) {
    const [screenWidth, setScreenWidth] = useState(0);
    const isMobile = screenWidth < 768;
    useEffect(() => {
        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    }, []);
    const mobileComponent = props.leftComponent || props.both?.component || props.specific?.mobileOnly
    const desktopComponent = props.leftComponent || props.both?.component || props.specific?.desktopOnly

    return screenWidth === 0 ? <></>: isMobile ? <MobileVersion leftComponent={mobileComponent} className={props.both?.mobileClassName}>{children}</MobileVersion> : <DestopVersion leftComponent={desktopComponent} className={props.both?.desktopClassName}>{children}</DestopVersion>;
}