import { FC } from "react";

interface InfoDisplayProps {
    info: string;
}

const InfoDisplay: FC<InfoDisplayProps> = ({ info }) => {
    return (
        <div className="mt-4 py-4 rounded px-9">
            {info
                ? info
                : "Tugmalardan birini bosing, ma'lumotlar bu yerda ko'rinadi."}
        </div>
    );
};

export default InfoDisplay;
