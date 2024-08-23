"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { GitCommitVertical } from "lucide-react";

const CardData = () => {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-start items-center gap-3">
                    <div>
                        <GitCommitVertical className="w-12 h-12" />
                    </div>
                    <div>
                        <CardTitle></CardTitle>
                        <CardDescription></CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent></CardContent>
        </Card>
    );
};

export default CardData;
