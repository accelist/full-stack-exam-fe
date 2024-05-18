import FloatingNavigation from "./FloatingNavigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DefaultLayout: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <div className="bg-primary w-full">
            <Navbar />
            <FloatingNavigation />

            {children}
            <Footer />
        </div>
    );

}

export const WithDefaultLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;
