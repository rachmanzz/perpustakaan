import { useEffect, useState } from "react";


type componentType = { children: React.ReactNode }


const MobileVersion = ({children}: componentType) => {
    return (
        <div className="h-screen w-full relative">
            <div className="absolute  bg-[#FFC978] shadow-[#FBBF24]/50 h-16 shadow-top w-full bottom-0 z-50">
                helo
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