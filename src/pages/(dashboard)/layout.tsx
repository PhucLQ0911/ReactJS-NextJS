import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    return (
<div className="h-full flex">
    <aside className="w-1/6 bg-gray-200 p-4">
        Side bar
    </aside>
    <main className="w-5/6 p-4">
        <Outlet />
    </main>
</div>

    );
};

export default LayoutAdmin;
