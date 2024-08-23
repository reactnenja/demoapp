"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+
import { useEffect, useState } from "react";

// Define a type for the user object
interface User {
    data: {
        name?: string;
        avatarUrl?: string;
    };
}

const Header = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [user, setUser] = useState<User | null>(null); // Initialize user state with User type or null
    const router = useRouter();

    useEffect(() => {
        const storedUser = JSON.parse(
            localStorage.getItem("token-info") || "{}"
        );
        if (storedUser?.data) {
            setUser(storedUser);
            setIsLoggedin(true);
        }
    }, []);

    // handleLogOut
    const handleLogout = () => {
        localStorage.removeItem("token-info");
        setIsLoggedin(false);
        router.push("/");
    };

    return (
        <div className="fixed top-0 z-50 left-0 w-full h-20 bg-white shadow-md">
            <div className="container-full mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full px-4">
                    <h1 className="text-3xl font-bold">CodeFlow</h1>
                    {isLoggedin && (
                        <div className="flex gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="border-slate-600 rounded-full border-2">
                                    <Image
                                        src={
                                            user?.data?.avatarUrl ||
                                            "/default-avatar.png"
                                        }
                                        className="h-10 w-10 rounded-full"
                                        alt={user?.data?.name || "User Avatar"}
                                        width={40}
                                        height={40}
                                    />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        {user?.data?.name || "Guest"}
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleLogout}>
                                        LogOut
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
