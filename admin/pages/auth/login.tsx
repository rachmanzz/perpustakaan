import Link from "next/link";
import AccountCircleOutline from "../../components/icon/AccountCircleOutline";
import ShieldKeyOutline from "../../components/icon/ShieldKeyOutline";
import Reading from "../../components/svg-img/Reading"; 

export default function Login() {
    return (
        <div className="min-h-full flex items-center justify-center pt-[10%] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full  space-y-8">
                <div>
                    <div className="bg-amber-400/10 rounded shadow-md shadow-[#FBBF24]/50 overflow-hidden">
                        <div className="flex flex-row">
                            <div className="w-1/2 bg-white p-2">
                                <div>
                                    <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900 font-jakarta-sans">Masuk ke akun Anda</h2>
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
                                            <input id="email-address" name="email" type="email" autoComplete="off" required className="appearance-none rounded pl-11 pr-3 placeholder:text-[#F39508]/[50%] font-sans relative w-full  py-4 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" placeholder="Alamat Email" />
                                        </div>
                                        <div className="m-2 relative">
                                            <label htmlFor="password-field" className="sr-only">Email address</label>
                                            <span className="absolute inset-y-0 left-0 z-10 flex items-center">
                                                <span className="p-2">
                                                    <ShieldKeyOutline size={32} />
                                                </span>
                                            </span>
                                            <input id="password-field" name="password" type="password" autoComplete="off" required className="appearance-none rounded pl-11 placeholder:text-[#F39508]/[50%] font-sans relative w-full px-3 py-3 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" placeholder="Kata Sandi" />
                                        </div>

                                        <div className="flex items-center m-2 justify-between">
                                            <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-jakarta-sans"> Ingat saya </label>
                                            </div>

                                            <div className="text-sm">
                                                <Link href="#"><a className="text-[#F39508] font-jakarta-sans">Lupa kata sandi ?</a></Link>
                                            </div>
                                        </div>
                                        <div className="mt-5 w-full flex pr-2 justify-end">
                                            <button className="rounded bg-[#F39508] px-10 py-2 text-white">MASUK</button>
                                        </div>

                                        <div className="flex justify-center mt-10 mb-5">
                                            <div className="text-sm">
                                                <span className="text-[#939393] font-jakarta-sans">belum punya akun ?</span> <Link href="#"><a className="text-[#F39508]">daftar disini</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="w-1/2 bg-[#F7E9CB]">
                                <div className="flex flex-col h-full flex-1 items-center justify-center">
                                    <h1 className="text-[#F39508] text-2xl drop-shadow-md font-bold font-jakarta-sans">PERPUSTAKAAN</h1>
                                    <Reading height={250} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}