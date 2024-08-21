"use client";
import {
    LoginLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div className="bg-white rounded-md shadow-md w-[480px] h-[200px] flex justify-center items-center border-2 flex-col gap-2">
                <LoginLink
                    postLoginRedirectURL="/dashboard"
                    className="bg-black text-white inline-block w-[400px] text-center shadow-md ml-4 px-8 py-2 rounded-md"
                >
                    Sign in
                </LoginLink>
                <RegisterLink
                    postLoginRedirectURL="/welcome"
                    className="bg-black text-white inline-block w-[400px] text-center shadow-md ml-4 px-8 py-2 rounded-md"
                >
                    Sign up
                </RegisterLink>
            </div>
        </div>
    );
};

export default Login;
