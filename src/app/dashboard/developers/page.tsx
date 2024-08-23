"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

// Developer type
type Developer = {
    name: string;
    image: string;
    progress: number;
    pushes: number;
    role: string;
    project: string;
};

// List of developers
const developers: Developer[] = [
    {
        name: "Alice",
        image: "/vercel.svg",
        progress: 80,
        pushes: 120,
        role: "frontend",
        project: "Project Alpha",
    },
    {
        name: "Bob",
        image: "/vercel.svg",
        progress: 60,
        pushes: 85,
        role: "backend",
        project: "Project Beta",
    },
    {
        name: "Charlie",
        image: "/vercel.svg",
        progress: 90,
        pushes: 150,
        role: "designer",
        project: "Project Gamma",
    },
    {
        name: "Diana",
        image: "/vercel.svg",
        progress: 70,
        pushes: 95,
        role: "pm",
        project: "Project Delta",
    },
    {
        name: "Eve",
        image: "/vercel.svg",
        progress: 85,
        pushes: 130,
        role: "graphic",
        project: "Project Epsilon",
    },
    // More developer data can be added here
];

const Developers = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState<string>("");

    // Filtering function
    const filteredDevelopers = developers.filter((dev) => {
        const matchesRole =
            selectedFilter === "all" || dev.role === selectedFilter;
        const matchesSearchTerm =
            dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dev.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dev.project.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesRole && matchesSearchTerm;
    });

    return (
        <div className="relative top-20 left-20 w-[calc(100%-80px)] p-4">
            <div className="p-4 w-full h-full overflow-y-auto behavior">
                {/* Breadcrumb */}
                <div className="w-full border-b-2 mb-4 border-solid p-2 capitalize text-center">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/dashboard">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/dashboard/developers">
                                    Developers
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Select (Filter) and Search */}
                <div className="grid grid-cols-2 gap-3 py-4 ">
                    <div className="">
                        <Select
                            value={selectedFilter}
                            onValueChange={(value) => setSelectedFilter(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Roles</SelectLabel>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="frontend">
                                        Frontend
                                    </SelectItem>
                                    <SelectItem value="backend">
                                        Backend
                                    </SelectItem>
                                    <SelectItem value="designer">
                                        Designer
                                    </SelectItem>
                                    <SelectItem value="pm">
                                        Project Manager
                                    </SelectItem>
                                    <SelectItem value="graphic">
                                        Graphic Designer
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="">
                        <Input
                            type="search"
                            name="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by name, role, or project"
                            className="border border-gray-300 rounded px-4 py-4"
                        />
                    </div>
                </div>

                {/* Developers Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredDevelopers.map((dev) => (
                        <Card key={dev.name} className="w-full h-auto">
                            <CardHeader>
                                <CardTitle>{dev.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={dev.image}
                                    alt={dev.name}
                                    className="w-full h-32 object-cover mb-4"
                                />
                                <div className="mb-4">
                                    <div className="text-sm text-gray-600">
                                        Role: {dev.role}
                                    </div>
                                    <div className="text-sm text-gray-600 mt-2">
                                        Project: {dev.project}
                                    </div>
                                    <div className="text-sm text-gray-600 mt-2">
                                        Progress
                                    </div>
                                    <div className="w-full bg-gray-200 h-4 rounded">
                                        <div
                                            className="bg-blue-500 h-full rounded"
                                            style={{
                                                width: `${dev.progress}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="text-sm text-gray-600 mt-2">
                                        Pushes: {dev.pushes}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        className="w-full"
                                        variant="outline"
                                    >
                                        View Profile
                                    </Button>
                                    <Button
                                        className="w-full"
                                        variant="outline"
                                    >
                                        View Statistics
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Developers;
