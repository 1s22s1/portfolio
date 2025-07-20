import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div className="flex items-center justify-center pt-16 pb-4">
            <Outlet />
        </div>
    )
}

export default Layout
