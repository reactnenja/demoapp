"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { GitCommit, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface CardTeamsProps {
    title: string;
    description: string;
    linkName: string;
    content: Array<{
        fullName: string;
        description: string;
        status: string;
        avatar: React.ReactNode;
        date: string;
    }>;
    icon: React.ReactNode;
    href: string;
}

const CardTeams = () => {
    const [teams] = useState<CardTeamsProps[]>([
        {
            title: "Recent Commits",
            description: "View your latest commits across all repositories",
            icon: <GitCommit />,
            href: "#",
            linkName: "View all commits",
            content: [
                {
                    fullName: "John Doe",
                    description: "feat: add new dashboard component",
                    avatar: <User />,
                    date: "2 hours ago",
                },
                {
                    fullName: "Jane Smith",
                    description: "fix: address input validation",
                    avatar: <User />,
                    date: "1 day ago",
                },
                {
                    fullName: "Michael Brown",
                    description: "docs: update readme file",
                    avatar: <User />,
                    date: "3 days ago",
                },
            ],
        },
    ]);

    return (
        <div>
            {teams.map((item, index) => (
                <Card key={index}>
                    <CardHeader>
                        <div className="flex justify-start gap-4">
                            <div className="w-10 h-10 bg-black text-white flex justify-center items-center  rounded-md">
                                {item.icon}
                            </div>
                            <div>
                                <CardTitle className="font-bold text-3xl">
                                    {item.title}
                                </CardTitle>
                                <CardDescription>
                                    {item.description}
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {item.content.map((member, idx) => (
                            <div
                                key={idx}
                                className="flex justify-start gap-2 items-start"
                            >
                                <div>{member.avatar}</div>
                                <div>
                                    <p>{member.fullName}</p>
                                    <p>{member.description}</p>
                                </div>
                                <div>
                                    <p>{member.date}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Link href={item.href}>{item.linkName}</Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default CardTeams;
