import LoginForm from "../../Components/Auth/LoginForm";
import AppLayout from "../../Layouts/AppLayout";

export default function Login() {
    return (
        <AppLayout>
            { /* ---------------- Load Login Form ---------------- */}
            <LoginForm />
        </AppLayout>
    );
}