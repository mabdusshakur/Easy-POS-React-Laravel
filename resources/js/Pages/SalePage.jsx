import SaleCreate from "../Components/sale/SaleCreate";
import SidenavLayout from "../Layouts/SidenavLayout";

export default function DashboardPage() {
    return (
        <SidenavLayout>
            {/* ---------------- Load Sale Page ---------------- */}
            <SaleCreate />
        </SidenavLayout>
    );
}