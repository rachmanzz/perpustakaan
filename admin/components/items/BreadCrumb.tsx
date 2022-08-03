import Link from "next/link"

export interface breadCrumbProps {
    items: { item: string | React.ReactElement, icon?: () => React.ReactElement, href: string }[],
    forceLowerCase?: boolean,
    activeClass?: string,
    className?: string
}
export default function BreadCrumb({ items, forceLowerCase = true, activeClass, className }: breadCrumbProps) {
    return (
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {items.map(
                (item, index) => {
                    if (index > 0) {
                        if ((index + 1) == items.length) {
                            return (
                                <li className="inline-flex items-center">
                                    <span className={["inline-flex items-center", activeClass ? activeClass : 'text-sm font-medium text-gray-700 hover:text-gray-900'].join(' ')}>
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        
                                        {item.icon && <span className="mx-2">{item.icon()}</span>}
                                        {typeof item.item === 'string' ? (forceLowerCase ? item.item.toLowerCase() : item.item) : item.item}
                                    </span>
                                </li>
                            )
                        }
                        return (
                            <li className="inline-flex items-center">
                                <Link href={item.href}>
                                    <a className={['inline-flex items-center', className ? className : 'text-sm font-medium text-gray-700 hover:text-gray-900'].join(" ")}>
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        {item.icon && <span className="mx-2">{item.icon()}</span>}
                                        {typeof item.item === 'string' ? (forceLowerCase ? item.item.toLowerCase() : item.item) : item.item}
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                    if ((index + 1) == items.length) {
                        return (
                            <li className="inline-flex items-center">
                                <span className={["inline-flex items-center", activeClass ? activeClass : 'text-sm font-medium text-gray-700 hover:text-gray-900'].join(' ')}>
                                    {item.icon && <span className="mr-2">{item.icon()}</span>}
                                    {typeof item.item === 'string' ? (forceLowerCase ? item.item.toLowerCase() : item.item) : item.item}
                                </span>
                            </li>
                        )
                    } 

                    return (
                        <li className="inline-flex items-center">
                            <Link href={item.href}>
                                <a  className={['inline-flex items-center', className ? className : 'text-sm font-medium text-gray-700 hover:text-gray-900'].join(" ")}>
                                    {item.icon && <span className="mr-2">{item.icon()}</span>}
                                    {typeof item.item === 'string' ? (forceLowerCase ? item.item.toLowerCase() : item.item) : item.item}
                                </a>
                            </Link>
                        </li>
                    )
                }
            )}
            
            
        </ol>
    )
}