"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div className=" flex justify-center items-center gap-2">
                <Card className="w-[400px] h-[400px]">
                    <CardHeader className="text-center">
                        <CardTitle className="text-center text-xl">
                            Login
                        </CardTitle>
                        <CardDescription>
                            Enter your email and password
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="border-b">
                        <form action="">
                            <div className="space-y-2 py-4">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" placeholder="Your email" />
                            </div>
                            <Button className="w-full">Login</Button>
                        </form>
                    </CardContent>
                    <CardFooter className="w-full py-2 flex gap-3 flex-col">
                        <Button className="w-full flex gap-2">
                            <span>
                                <FcGoogle className="h-5 w-5" />
                            </span>
                            <span>Google</span>
                        </Button>
                        <Button className="w-full flex gap-2">
                            <span>
                                <FaGithub className="h-5 w-5" />
                            </span>
                            <span>GitHub</span>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Login;
