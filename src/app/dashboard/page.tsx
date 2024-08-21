import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BarChartComponents from "./(components)/BarChart";
import PullRequest from "./(components)/pullRequest/PullRequest";
import RoundedData from "./(components)/rounededData/RoundedData";

const Dashboard = () => {
    return (
        <div className="absolute top-20 left-20 w-[calc(100%-80px)] p-4">
            <div className="grid grid-cols-1 gap-4">
                <div className="w-full border-b-2 sm:w-[450px] md:w-[450px] lg:w-[450px] border-solid p-2 capitalize text-center">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/dashboard">
                                    home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                    <RoundedData />
                    <BarChartComponents />
                    <PullRequest />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
