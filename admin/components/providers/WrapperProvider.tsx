import React, { createContext, FC, Fragment, useContext, useEffect, useState } from "react";
import {nanoid} from "nanoid";
import useApi from "../../libraries/api";
import { useRouter } from "next/router";
import {AxiosError} from 'axios'


type AlertContextType = "success" | "error" | "warning" | "info" | "default";

type AlertItemType = { message: string, type: AlertContextType, timeup?: number, id: string }
export type wrapperActionType = "ALERT-SHOW" | "ALERT-DELETE";

export type wrapperAlertActionProps = {
    type: wrapperActionType,
    content: AlertItemType
}


type WrapperContentObjectType = {
    alert: AlertItemType[]
}

type alertAction= (action:wrapperActionType, content: {message: string, type: AlertContextType, timeup?: number }|string) => void

type WrapperContextType = [WrapperContentObjectType, alertAction];

const WrapperContext = createContext<WrapperContextType>({} as WrapperContextType);






const AlertView: FC<{item: AlertItemType, timeup: number}> = ({item, timeup}) => {
    const [, dispatch] = useContext(WrapperContext);
    const timeUp = setTimeout(()=> dispatch("ALERT-DELETE", item.id), item.timeup ? item.timeup : timeup);
    const onClose = ()=> {
        clearTimeout(timeUp);
        dispatch("ALERT-DELETE", item.id);
    }
    const classType = () => {
        switch (item.type) {
            case "success":
                return "bg-teal-100 border-teal-500 text-teal-900";
            case "error":
                return "bg-red-100  border-red-400 text-red-700";
            case "warning":
                return "bg-orange-100 border-orange-500 text-orange-700";
            case "info":
                return "bg-blue-100 border-blue-500 text-blue-700";
            default:
                return "bg-gray-100 border-gray-500 text-gray-700";
        }
    }
    const className = `px-4 border py-3 rounded relative ${classType()}`;
    return (
        <Fragment>
            <div className={className}>
                <span className="block mr-2">{item.message}</span>
                <span className="absolute top-0 pt-1 pr-1 right-0">
                    <svg onClick={onClose} className="fill-current h-4 w-4 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>

            </div>
        </Fragment>
    )
}

const WrapperProvider: FC<{children: any, timeup?: number}> = ({ children, timeup = 2000 }) => {
    const [alert, setAlert] = useState<AlertItemType[]>([])
    const [loginStatus, setLoginStatus] = useState<'authorized'|'ignore'>()
    const route = useRouter()
    const api = useApi(true)

    const dispatch: alertAction = (action , content) => {
        switch (action) {
            case "ALERT-SHOW":
                if (typeof content !== "string") {
                    setAlert((prev) => [...prev, {...content, id: nanoid()}])
                }
                break;
            case "ALERT-DELETE":
                if (typeof content === "string") {
                    setAlert((prev) => prev.filter(item => item.id !== content))
                }
                break;
            default:
                break;
        }
    }
    useEffect(()=> {
        const checkLoginStatus = async () => {
            try {
                await api('auth/check')
                setLoginStatus('authorized')

            } catch (error) {
                if (error instanceof AxiosError) {
                    if (error.response && error.response.statusText === 'Unauthorized') {
                        route.push('auth/login')
                    } else {
                        dispatch("ALERT-SHOW", { message: `error: ${error.response?.statusText || error.code}. please try again`, type: "error", timeup: 3000})
                    }
                } else if (error instanceof Error && error.message === "No token found in localStorage") {
                    route.push('auth/login')
                } else {
                    dispatch("ALERT-SHOW", { message: `unkown error. please try again`, type: "error", timeup: 3000})
                }
            }
        }

        const ingorePath = [
            '/auth/login'
        ]
        if(!ingorePath.includes(route.pathname)) checkLoginStatus()
        else setLoginStatus("ignore")
        
    }, [route.pathname])


    const Loading = () => (
        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    )

    



    return (
        <WrapperContext.Provider value={[{alert}, dispatch]}>
            <React.Fragment>
                {!loginStatus && (
                    <div className="flex justify-center items-center pt-[20%]">
                        <Loading />
                    </div>
                )}
                {(loginStatus === 'authorized' || loginStatus === 'ignore') && children} 
            </React.Fragment>
            <React.Fragment>
                {/* here we looping an alert */}
                <div className="fixed z-40 gap-2 flex flex-col bottom-28 right-6 ">
                    {alert.map( (item: AlertItemType, index: number) => (
                        <Fragment key={index}>
                            <AlertView key={index} timeup={timeup} item={item}/>
                        </Fragment>
                    
                ) )}
                </div>
                
            </React.Fragment>
        </WrapperContext.Provider>
    )

}

export const useAlert = () => {
    const [state, dispatch] = useContext(WrapperContext);
    return {
        state: state.alert,
        push: (message: string, type: AlertContextType = "default", timeup?: number) => dispatch("ALERT-SHOW", { message, type, timeup })
    }
}


export default WrapperProvider