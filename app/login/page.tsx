"use client";

import { useState } from "react";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">


            <div className="flex flex-col items-center justify-center gap-4 w-[542px] h-[627px]">
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Sign in to your account
                    </h2>


                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 peer-focus:text-red-500 transition-colors">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="peer mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="jane.doe@gmail.com"
                        />
                    </div>


                    <div className="mb-4">
                        <div className="flex justify-between">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <button className="text-sm text-indigo-600 hover:underline">
                                Forgot your password?
                            </button>
                        </div>

                        <div className="relative mt-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-gray-500"
                            >
                                {showPassword ? <EyeIcon className="w-4 h-4" /> : <EyeOffIcon className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>


                    <div className="flex items-center mb-6">
                        <input
                            id="stay"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 rounded border-gray-300"
                        />
                        <label htmlFor="stay" className="ml-2 text-sm text-gray-700">
                            Stay signed in for a week
                        </label>
                    </div>


                    <button className="w-full bg-[#242440] text-white py-2.5 rounded-md text-sm font-medium hover:bg-indigo-800 transition">
                        Continue
                    </button>

                    <div className="text-center mt-4">
                        <button className="text-sm hover:underline">
                            Validate your new account
                        </button>
                    </div>
                </div>
                <div className="text-left text-sm text-gray-600">
                    <p className="">
                        Don't have an account?{" "}
                        <Link href="#" className="text-indigo-600 font-medium hover:underline">
                            Book a Session First!
                        </Link>
                    </p>

                    <p className="mt-3 text-xs text-gray-500">
                        © Getstac • Contact • Privacy & terms
                    </p>
                </div>
            </div>

        </div>
    );
}
