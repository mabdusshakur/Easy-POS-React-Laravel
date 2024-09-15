import SendOtpForm from "../../Components/Auth/SendOtpForm";
import AppLayout from "../../Layouts/AppLayout";

export default function Login() {
    return (
        <AppLayout>
            { /* ---------------- Load Send OTP Form ---------------- */}
            <SendOtpForm />
        </AppLayout>
    );
}