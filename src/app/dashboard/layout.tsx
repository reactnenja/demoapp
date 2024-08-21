import Header from "./(components)/Header";
import Sidebar from "./(components)/Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <Header />
            <Sidebar />
            <div className="flex-1">{children}</div>
        </div>
    );
}
