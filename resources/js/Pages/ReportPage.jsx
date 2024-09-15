import ReportCreate from "../Components/report/ReportCreate";
import SidenavLayout from "../Layouts/SidenavLayout";

export default function DashboardPage() {
    return (
        <SidenavLayout>
            {/* ---------------- Load Report Page ---------------- */}
            <ReportCreate />
        </SidenavLayout>
    );
}