function RegisterForm() {

    // ---------------- registration function ----------------
    async function onRegistration() {
        let email = document.getElementById('email').value;
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let mobile = document.getElementById('mobile').value;
        let password = document.getElementById('password').value;

        if (email.length === 0) {
            errorToast('Email is required')
        } else if (firstName.length === 0) {
            errorToast('First Name is required')
        } else if (lastName.length === 0) {
            errorToast('Last Name is required')
        } else if (mobile.length === 0) {
            errorToast('Mobile is required')
        } else if (password.length === 0) {
            errorToast('Password is required')
        } else {
            showLoader();
            let res = await axios.post("/api/auth/register", {
                email: email,
                firstName: firstName,
                lastName: lastName,
                mobile: mobile,
                password: password
            })
            hideLoader();
            if (res.status === 201 && res.data['success'] === true) {
                successToast(res.data['message']);
                setTimeout(function () {
                    Inertia.visit('/');
                }, 2000)
            } else {
                errorToast(res.data['message'])
            }
        }
    }

    return (<>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Sign Up</h4>
                            <hr />
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input className="form-control" id="email" type="email" placeholder="User Email" />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input className="form-control" id="firstName" type="text" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input className="form-control" id="lastName" type="text" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input className="form-control" id="mobile" type="mobile" placeholder="Mobile" />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input className="form-control" id="password" type="password" placeholder="User Password" />
                                    </div>
                                </div>
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <button className="btn w-100 btn-outline-primary mt-3" onClick={onRegistration}>Complete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default RegisterForm;