import Link from "next/link"
import React, {ReactElement, useEffect, useRef } from "react"



type dropDownType<T, R> = {
    button?: 'a' | 'button',
    outerClass?: string,
    children: ((value?: R, open?: boolean) => ReactElement) | ReactElement | string,
    value?: R,
    items: T
    className?: string,
    listClassName?: string
    renderItem: (item: R, setValue: React.Dispatch<React.SetStateAction<R | undefined>>) => React.ReactElement | string
}
export default function DropDownUI<T extends any[], R extends keyof T>({button = 'button', listClassName, outerClass, value: currentValue, children, className, items, renderItem}: dropDownType<T, R>) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [value, setValue] = React.useState<R|undefined>(currentValue)

    const ref = useRef<HTMLDivElement>(null)

    const Button = () => React.createElement(button, {className: className, onClick: () => setIsOpen(!isOpen)}, typeof children === 'function' ? children(value, isOpen) : children)
    useEffect(()=> {
        if (value !== currentValue) {
            setValue(currentValue)
            setIsOpen(false)
        }
    }, [value])
    useEffect(() => {
        const eventHandler = (ev: MouseEvent|TouchEvent) => {
            if (isOpen && !ref.current!!.contains(ev.target as Node)) {
                setIsOpen(() => false)
            }
        }
        document.addEventListener('mousedown', eventHandler)
        document.addEventListener('touchstart', eventHandler)

        return () => {
            document.removeEventListener('mousedown', eventHandler)
            document.removeEventListener('touchstart', eventHandler)
        }
    }, [isOpen])
    return (
        <div ref={ref} className={['relative',outerClass].join(' ')}>
            <Button />
            <div id="dropdown" className={`${isOpen ? '': 'hidden'} absolute top-10 -translate-x-14 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 divide-y divide-gray-100" aria-labelledby="dropdownDefault">
                    {items.filter(item => item != value).map((item, index) => (
                        <li className={listClassName} key={index}>
                            {renderItem(item, setValue)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}