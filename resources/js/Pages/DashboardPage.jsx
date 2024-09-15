import Summary from "../Components/dashboard/Summary";
import SidenavLayout from "../Layouts/SidenavLayout";

export default function DashboardPage() {
    return (
        <SidenavLayout>
            {/* ---------------- Load Summary Page ---------------- */}
            <Summary />
        </SidenavLayout>
    );
}