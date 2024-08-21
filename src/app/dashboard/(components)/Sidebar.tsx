"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import {
    GitCommitVertical,
    GitPullRequest,
    Home,
    LineChart,
    Settings,
    UsersRound,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className="fixed top-20 z-50 left-0 h-[calc(100%-80px)] w-20 bg-white p-3  border-2 shadow-md flex justify-between flex-col">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard"
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground  text-black p-2 md:h-8 md:w-12"
                            >
                                <Home className="h-5 w-5" />
                                <span className="sr-only">Dashboard</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/teams"
                                className="flex h-10 w-10 items-center justify-center rounded-lg  text-accent-foreground transition-colors  p-2 hover:text-foreground md:h-8 md:w-12"
                            >
                                <UsersRound className="h-5 w-5" />
                                <span className="sr-only">Teams</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Teams</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/commits"
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8  text-black p-2 md:w-12"
                            >
                                <GitCommitVertical className="h-5 w-5" />
                                <span className="sr-only">Commits</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Commits</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/gitpush"
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8  text-black p-2 md:w-12"
                            >
                                <GitPullRequest className="h-5 w-5" />
                                <span className="sr-only">Git Push</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Git Push</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/analaytics"
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8  text-black p-2 md:w-12"
                            >
                                <LineChart className="h-5 w-5" />
                                <span className="sr-only">Analytics</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Analytics</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/settings"
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8  text-black p-2 md:w-12"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    );
};

export default Sidebar;
