"use client";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import InfoDisplay from "./InfoDisplay";

const Teams = () => {
    const [info, setInfo] = useState("");

    const handleClick = (role: any) => {
        switch (role) {
            case "Team":
                setInfo("Team ma&#39;lumotlari bu yerda ko&#39;rsatiladi.");
                break;
            case "Developer":
                setInfo(
                    "Developer ma&#39;lumotlari bu yerda ko&#39;rsatiladi."
                );
                break;
            case "Project Manager":
                setInfo(
                    "Project Manager ma&#39;lumotlari bu yerda ko&#39;rsatiladi."
                );
                break;
            case "HR":
                setInfo("HR ma&#39;lumotlari bu yerda ko&#39;rsatiladi.");
                break;
            case "Other":
                setInfo("Other ma&#39;lumotlari bu yerda ko&#39;rsatiladi.");
                break;
            default:
                setInfo("");
        }
    };

    return (
        <div className="fixed top-20 left-20 w-[calc(100%-80px)] p-2">
            <div className="p-2">
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between items-center">
                        <div className="w-[500px] border-b-2 border-solid p-2 capitalize text-center">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/dashboard">
                                            home
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/dashboard/teams">
                                            Teams
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <ButtonGroup onClick={handleClick} />
                    </div>
                    <InfoDisplay info={info} />
                </div>
            </div>
        </div>
    );
};

export default Teams;
