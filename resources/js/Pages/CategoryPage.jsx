import CategoryList from "../Components/category/CategoryList";
import SidenavLayout from "../Layouts/SidenavLayout";

export default function DashboardPage() {
    return (
        <SidenavLayout>
            {/* ---------------- Load Category Page ---------------- */}
            <CategoryList />
        </SidenavLayout>
    );
}