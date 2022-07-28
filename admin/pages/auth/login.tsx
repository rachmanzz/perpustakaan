export default function Login() {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8">
                <div>
                    <div className="bg-amber-400/10 rounded drop-shadow-md overflow-hidden">
                        <div className="flex flex-row">
                            <div className="w-1/2 bg-white p-2">
                                <div>
                                    <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900">Masuk ke akun Anda</h2>
                                </div>
                                <form className="mt-8 space-y-6">
                                    <div className="mx-5">
                                        <div className="m-2">
                                            <label htmlFor="email-address" className="sr-only">Email address</label>
                                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded relative block w-full px-3 py-3 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Alamat Email" />
                                        </div>
                                        <div className="m-2">
                                            <label htmlFor="password-field" className="sr-only">Email address</label>
                                            <input id="password-field" name="password" type="password" required className="appearance-none rounded relative block w-full px-3 py-3 bg-[#FFE6C0] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Kata Sandi" />
                                        </div>

                                        <div className="flex items-center m-2 justify-between">
                                            <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                                            </div>

                                            <div className="text-sm">
                                            <a href="#" className   ="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                                            </div>
                                        </div>
                                        <div className="mt-5 w-full flex pr-2 justify-end">
                                            <button className="rounded bg-[#F39508] px-10 py-2 text-white">MASUK</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="w-1/2 bg-[#F7E9CB]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}