import RegisterForm from "../../Components/Auth/RegisterForm";
import AppLayout from "../../Layouts/AppLayout";

export default function Login() {
    return (
        <AppLayout>
            { /* ---------------- Load Register Form ---------------- */}
            <RegisterForm />
        </AppLayout>
    );
}