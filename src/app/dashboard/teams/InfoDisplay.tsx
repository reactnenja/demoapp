import { FC } from "react";

interface InfoDisplayProps {
    info: string;
}

const InfoDisplay: FC<InfoDisplayProps> = ({ info }) => {
    return (
        <div className="mt-4 py-4 rounded px-9">
            {info
                ? info
                : "Tugmalardan birini bosing, ma&#39;lumotlar bu yerda ko&#39;rinadi."}
        </div>
    );
};

export default InfoDisplay;
