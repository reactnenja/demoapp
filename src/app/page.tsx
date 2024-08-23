"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const code = searchParams.get("code");
        const state = searchParams.get("state");

        if (code && state) {
            handleGitHubLogin(code, state);
        }
    }, [searchParams]);

    const handleGitHubLogin = async (code: string, state: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://rarebek.jprq.app/login/github/callback?code=${code}&state=${state}`
            );
            const data = await response.json();
            console.log("User Info:", data.user);
            localStorage.setItem("token-info", JSON.stringify(data.user));

            if (data.user.access_token) {
                setTimeout(() => {
                    toast.success("Successfully logged in!");
                    setIsLoading(false);
                    router.push("/dashboard");
                }, 1500);
            }
        } catch (error) {
            console.error("Error during GitHub OAuth:", error);
            toast.error("Error during GitHub OAuth. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const initiateGitHubLogin = () => {
        setIsLoading(true);
        // Redirect to GitHub OAuth page
        window.location.href = "https://rarebek.jprq.app/login/github";
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <ToastContainer />
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin"></div>
                </div>
            )}
            <Card className="w-[400px]">
                <CardHeader className="text-center">
                    <CardTitle className="text-center text-xl">Login</CardTitle>
                    <CardDescription>
                        Sign in with your GitHub account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button
                        className="w-full flex gap-2 items-center justify-center"
                        onClick={initiateGitHubLogin}
                        disabled={isLoading}
                    >
                        <FaGithub className="h-5 w-5" />
                        <span>Continue with GitHub</span>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
