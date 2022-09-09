import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import AccountCircleOutline from "../../components/icon/AccountCircleOutline";
import GoogleCircle from "../../components/icon/GoogleCircel";
import ShieldKeyOutline from "../../components/icon/ShieldKeyOutline";
import { useAlert } from "../../components/providers/WrapperProvider";
import Reading from "../../components/svg-img/Reading"; 
import useLanguage from "../../i18n";
import useApi from "../../libraries/api";


export default function Login() {
    const {locale, locales, push: routePush} = useRouter();
    const lang = useLanguage(locale||'en');
    const alert = useAlert()

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const api = useApi();

    const onChange = (dispatch: React.Dispatch<React.SetStateAction<string>>) => (state: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof state.target.value === "undefined") return
        dispatch(state.target.value as string)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // if email and or password is empty
        if (email === "" || password === "") {
            return
        }

        // if email is not email format
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return
        }

        // if password is less than 6 character
        if (password.length < 6) {
            return
        }
        setLoading(true)
        


    }


    return (
        <div className="min-h-full flex items-center justify-center pt-[10%] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full  space-y-8">
                <div className="flex sm:hidden items-center justify-center">
                        <h1 className="text-[#F39508] text-2xl drop-shadow-md font-bold font-jakarta-sans">{process.env.NEXT_PUBLIC_APP_NAME || "PERPUSTAKAAN"}</h1>
                </div>
                <div>
                    <div className="bg-amber-400/10 rounded shadow-md shadow-[#FBBF24]/50 overflow-hidden">
                        <div className="flex flex-row">
                            <div className="w-full sm:w-1/2 bg-white p-2">
                                <div>
                                    <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900 font-jakarta-sans">{lang('title_enter_account', 'unique_sentence')}</h2>
                                </div>
                                <form onSubmit={onSubmit}  className="mt-8 space-y-6">
                                    <div className="mx-5">
                                        <div className="m-2 relative">
                                            <label htmlFor="email-address" className="sr-only">Email address</label>
                                            <span className="absolute inset-y-0 left-0 z-10 flex items-center">
                                                <span className="p-2">
                                                    <AccountCircleOutline size={32} />
                                                </span>
                                            </span>
                                            {/* pattern email regex */}
                                            <input id="email-address" onChange={onChange(setEmail)} value={email} name="email" type="email" autoComplete="off" required className="appearance-none rounded pl-11 pr-3 placeholder:text-[#F39508]/[50%] font-sans relative w-full  py-4 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" placeholder={lang('email_address')} />
                                        </div>
                                        <div className="m-2 relative">
                                            <label htmlFor="password-field" className="sr-only">Password</label>
                                            <span className="absolute inset-y-0 left-0 z-10 flex items-center">
                                                <span className="p-2">
                                                    <ShieldKeyOutline size={32} />
                                                </span>
                                            </span>
                                            <input id="password-field" onChange={onChange(setPassword)} name="password" type="password" autoComplete="off" required className="appearance-none rounded pl-11 placeholder:text-[#F39508]/[50%] font-sans relative w-full px-3 py-3 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" placeholder={lang('password')} />
                                        </div>

                                        <div className="flex items-center m-2 justify-between">
                                            <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-jakarta-sans">{lang('remember_me')}</label>
                                            </div>

                                            <div className="text-sm">
                                                <Link href="#"><a className="text-[#F39508] font-jakarta-sans">{lang('forgot_password')}</a></Link>
                                            </div>
                                        </div>
                                        <div className="mt-5 w-full flex pr-2 justify-end">
                                            <button onClick={()=> setLoading(!loading)} type="submit" className="rounded bg-[#F39508] disabled:opacity-70 transition duration-500 ease-in-out px-6 flex justify-center items-center py-2 text-white">
                                                <div className="inline-flex gap-2">
                                                    {loading && (
                                                        <div className="bg-white justify-center duration-700 delay-150 transition ease-in-out items-center flex rounded-full w-5 h-5">
                                                            <GoogleCircle fill="#F39508" className="animate-spin" size={16}/>
                                                        </div>
                                                    )}
                                                    <span>{lang('sign_in', 'upper')}</span>
                                                </div>
                                                
                                            </button>
                                        </div>

                                        <div className="flex justify-center mt-10 mb-5">
                                            <div className="text-sm">
                                                <span className="text-[#939393] font-jakarta-sans">{lang('dont_have_account')}</span> <Link href="#"><a className="text-[#F39508]">{lang('register_here')}</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="hidden sm:flex w-1/2  bg-[#F7E9CB]">
                                <div className="flex flex-col h-full flex-1 items-center justify-center">
                                    <h1 className="text-[#F39508] text-2xl drop-shadow-md font-bold font-jakarta-sans">{process.env.NEXT_PUBLIC_APP_NAME || "PERPUSTAKAAN"}</h1>
                                    <Reading height={250} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* position:bottom on screen item:center */}
                <div className="flex items-center justify-center mt-10 mb-10">
                    <span className="mr-2">{lang('choose_language')}: </span>
                    {
                        locales?.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {index > 0 && <span className="mx-2">|</span>}
                                    <Link href={`/${item}/auth/login`} locale={locale}>
                                        <a  className={`text-sm text-gray-900 font-bold font-jakarta-sans ${item !== locale ? 'text-[#F39508] underline' : ''} lang-${item}`}>{item}</a>
                                    </Link>
                                </React.Fragment>
                                
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}