import {DefaultSidebar} from "@/app/ui/sidebar";

export default function DashboardLayout({ children }) {
    return (
        <section>{children}</section>
        // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        //     <div className="w-full flex-none md:w-64">
        //         <DefaultSidebar />
        //     </div>
        //     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        // </div>
    )
}