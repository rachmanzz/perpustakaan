import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { type } from "os";
import React, { useEffect, useState } from "react";
import useLanguage, {LangType} from "../../i18n";
import navigation from "../../libraries/navigation";
import AccountCircleOutline from "../icon/AccountCircleOutline";
import BellOutline from "../icon/BellOutline";
import BookClockOutline from "../icon/BookClockOutline";
import BookShelf from "../icon/BookShelf";
import HomeOutline from "../icon/HomeOutline";
import ShieldAccountOutline from "../icon/ShieldAccountOutline";
import UserAccountOutline from "../icon/UserAccountOutline";


type componentType = { children: React.ReactNode }

type spreadNodeType = { mobileOnly?: React.ReactElement, desktopOnly?: React.ReactElement }
type spreadClassType = { component: React.ReactElement, mobileClassName?: string, desktopClassName?: string } 

interface mainLayoutType extends componentType {
    leftComponent?: ((route: NextRouter, lang: LangType) => React.ReactElement) | React.ReactElement,
    both?: ((route: NextRouter, lang: LangType) => spreadClassType) | spreadClassType,
    specific?: ((route: NextRouter, lang: LangType) => spreadNodeType) | spreadNodeType
}

interface bothLayoutType extends componentType {
    leftComponent?: React.ReactElement
    className?: string
}


const MobileVersion = ({children, leftComponent, className}: bothLayoutType) => {
    const {pathname} = useRouter()
    const leftElement = leftComponent && React.cloneElement(leftComponent, {className})
    return (
        <div className="w-full max-h-screen relative">
            <div className="w-full z-30 fixed top-0 bg-[#F7EEDE]  border-b border-orange-300/20 px-3  flex items-center h-16">
                <div className="flex flex-row items-center w-full justify-between">
                    <div className="w-full pr-8">
                        {leftElement}
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
                    {navigation.map((item, index) => {
                        const Icon = item.icon()
                        return (<div key={index}>
                            <Link href={item.url}>
                                <a className={`appearance-none touch-action-none flex items-center justify-center rounded-full h-12 w-12 ${pathname == item.url ? 'bg-[#FFC876]': 'bg-focus-off'}`}><Icon /></a>
                            </Link>
                        </div>)
                    })}
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
                        <div className="p-1">
                            <Image alt="logo" src={ process.env.NEXT_PUBLIC_TINY_SQUARE_LOGO || require('../svg/logo.svg' )}/>
                        </div>
                    </div>
                    {navigation.map((item, index) => {
                        const Icon = item.icon()
                        return (<div key={index}>
                                <Link href={item.url}>
                                    <a className={`appearance-none touch-action-none flex items-center justify-center rounded-full h-12 w-12 ${pathname == item.url ? 'bg-[#FFC876]': 'bg-focus-off'}`}><Icon /></a>
                                </Link>
                            </div>)
                    })}
                </div>
                <div className="flex flex-col relative flex-1">
                    <div className="w-full top-0 z-50 border-b border-orange-300/20 pl-10 pr-20  flex items-center h-16">
                        <div className="flex flex-row items-center w-full justify-between">
                            <div className="w-full pr-12">{leftElement}</div>
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
                    <div style={{ height: (400+64) < heightSize ? heightSize - 70: heightSize }} className="overflow-y-scroll pr-10">{children}</div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default function MainLayout({children, ...props}: mainLayoutType) {
    const [screenWidth, setScreenWidth] = useState(0);
    const route = useRouter()
    const lang = useLanguage(route.locale)
    const isMobile = screenWidth < 768;
    useEffect(() => {
        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    }, []);
    const bothDeviceLayout = props.both && (typeof props.both === 'function' ? props.both(route, lang) : props.both)
    const sameComponent = props.leftComponent && (typeof props.leftComponent !== 'function' ? props.leftComponent : props.leftComponent(route, lang))
    const spreadComponent = props.specific && (typeof props.specific === 'function' ? props.specific(route, lang) :props.specific)
    const mobileComponent =   sameComponent || bothDeviceLayout?.component || spreadComponent?.mobileOnly 
    const desktopComponent = sameComponent || bothDeviceLayout?.component || spreadComponent?.desktopOnly

    return screenWidth === 0 ? <></>: isMobile ? <MobileVersion leftComponent={mobileComponent} className={bothDeviceLayout?.mobileClassName}>{children}</MobileVersion> : <DestopVersion leftComponent={desktopComponent} className={bothDeviceLayout?.desktopClassName}>{children}</DestopVersion>;
}