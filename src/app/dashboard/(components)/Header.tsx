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

const Header = () => {
    return (
        <div className="fixed top-0 z-50 left-0 w-full h-20 bg-white shadow-md">
            <div className="container-full mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full px-4">
                    <h1 className="text-3xl font-bold">CodeFlow</h1>
                    <div className="flex gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="border-slate-600 rounded-full border-2">
                                <Image
                                    src=""
                                    className="h-10 w-10 rounded-full "
                                    alt=""
                                    width={300}
                                    height={300}
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>{}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>
                                    Subscription
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
