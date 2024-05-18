import AdminSidebar from "./AdminSidebar";

const AdminLayout: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <>
            <div className="flex w-full h-screen overflow-hidden">
                <AdminSidebar />
                {children}
            </div>
        </>
    );

}

export const WithAdminLayout = (page: React.ReactElement) => <AdminLayout>{page}</AdminLayout>;