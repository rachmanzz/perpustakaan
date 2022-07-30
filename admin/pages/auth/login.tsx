import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import AccountCircleOutline from "../../components/icon/AccountCircleOutline";
import ShieldKeyOutline from "../../components/icon/ShieldKeyOutline";
import Reading from "../../components/svg-img/Reading"; 
import useLanguage from "../../i18n";

export default function Login() {
    const {locale, locales} = useRouter()
    const lang = useLanguage(locale||'en')
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
                                <form className="mt-8 space-y-6">
                                    <div className="mx-5">
                                        <div className="m-2 relative">
                                            <label htmlFor="email-address" className="sr-only">Email address</label>
                                            <span className="absolute inset-y-0 left-0 z-10 flex items-center">
                                                <span className="p-2">
                                                    <AccountCircleOutline size={32} />
                                                </span>
                                            </span>
                                            <input id="email-address" name="email" type="email" autoComplete="off" required className="appearance-none rounded pl-11 pr-3 placeholder:text-[#F39508]/[50%] font-sans relative w-full  py-4 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" placeholder={lang('email_address')} />
                                        </div>
                                        <div className="m-2 relative">
                                            <label htmlFor="password-field" className="sr-only">Password</label>
                                            <span className="absolute inset-y-0 left-0 z-10 flex items-center">
                                                <span className="p-2">
                                                    <ShieldKeyOutline size={32} />
                                                </span>
                                            </span>
                                            <input id="password-field" name="password" type="password" autoComplete="off" required className="appearance-none rounded pl-11 placeholder:text-[#F39508]/[50%] font-sans relative w-full px-3 py-3 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" placeholder={lang('password')} />
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
                                            <button className="rounded bg-[#F39508] px-10 py-2 text-white">{lang('sign_in', 'upper')}</button>
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