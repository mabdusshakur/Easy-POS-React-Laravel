function ResetPasswordForm() {

    // ---------------- reset password function ----------------
    async function ResetPass() {
        let password = document.getElementById('password').value;
        let cpassword = document.getElementById('cpassword').value;

        if (password.length === 0) {
            errorToast('Password is required')
        } else if (cpassword.length === 0) {
            errorToast('Confirm Password is required')
        } else if (password !== cpassword) {
            errorToast('Password and Confirm Password must be same')
        } else {
            showLoader()
            let res = await axios.patch("/api/user/reset-password", {
                password: password
            });
            hideLoader();
            if (res.status === 200 && res.data['success'] === true) {
                successToast(res.data['message']);
                setTimeout(function () {
                    Inertia.visit('/');
                }, 1000);
            } else {
                errorToast(res.data['message'])
            }
        }
    }

    return (<>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-90 p-4">
                        <div className="card-body">
                            <h4>SET NEW PASSWORD</h4>
                            <br />
                            <label>New Password</label>
                            <input className="form-control" id="password" type="password" placeholder="New Password" />
                            <br />
                            <label>Confirm Password</label>
                            <input className="form-control" id="cpassword" type="password" placeholder="Confirm Password" />
                            <br />
                            <button className="btn w-100 btn-outline-primary" onClick={ResetPass}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default ResetPasswordForm;