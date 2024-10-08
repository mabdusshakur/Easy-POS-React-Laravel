import InvoiceList from "../Components/invoice/InvoiceList";
import SidenavLayout from "../Layouts/SidenavLayout";

export default function DashboardPage() {
    return (
        <SidenavLayout>
            {/* ---------------- Load Invoice Page ---------------- */}
            <InvoiceList />
        </SidenavLayout>
    );
}