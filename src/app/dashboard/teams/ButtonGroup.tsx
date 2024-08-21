import { Button } from "@/components/ui/button";
import { FC } from "react";

interface ButtonGroupProps {
    onClick: (role: string) => void;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ onClick }) => {
    return (
        <div className="flex">
            <Button
                className="rounded-none rounded-l-md"
                onClick={() => onClick("Team")}
            >
                Team
            </Button>
            <Button
                className="rounded-none "
                onClick={() => onClick("Developer")}
            >
                Developer
            </Button>
            <Button
                className="rounded-none "
                onClick={() => onClick("Project Manager")}
            >
                Project Manager
            </Button>
            <Button className="rounded-none " onClick={() => onClick("HR")}>
                HR
            </Button>
            <Button
                className="rounded-none rounded-r-md"
                onClick={() => onClick("Other")}
            >
                Other
            </Button>
        </div>
    );
};

export default ButtonGroup;
