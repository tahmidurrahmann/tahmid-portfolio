import Drawer from "../shared/Drawer/Drawer";
import Navbar from "../shared/Navbar/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <Navbar></Navbar>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        {/* Sidebar content here */}
                        <Drawer></Drawer>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;