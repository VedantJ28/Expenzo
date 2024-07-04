import { Dashboard } from "../components/Dashboard";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export const Main = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 h-screen overflow-y-auto">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="flex-1">
                    <Dashboard />
                </div>
                <Footer />
            </div>
        </div>
    );
};
