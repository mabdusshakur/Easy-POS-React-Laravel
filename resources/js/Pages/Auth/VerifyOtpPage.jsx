import VerifyOtpForm from "../../Components/Auth/VerifyOtpForm";
import AppLayout from "../../Layouts/AppLayout";

export default function Login() {
    return (
        <AppLayout>
            { /* ---------------- Load Verify OTP Form ---------------- */}
            <VerifyOtpForm />
        </AppLayout>
    );
}