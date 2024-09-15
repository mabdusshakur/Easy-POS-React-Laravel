import ResetPasswordForm from "../../Components/Auth/ResetPasswordForm";
import AppLayout from "../../Layouts/AppLayout";

export default function Login() {
    return (
        <AppLayout>
            { /* ---------------- Load Reset Password Form ---------------- */}
            <ResetPasswordForm />
        </AppLayout>
    );
}