function VerifyOtpForm() {

    // ---------------- verify otp function ----------------
    async function VerifyOtp() {
        let otp = document.getElementById('otp').value;
        if (otp.length !== 4) {
            errorToast('Invalid OTP')
        } else {
            showLoader();
            let res = await axios.post('/api/auth/verify-otp', {
                otp: otp,
                email: sessionStorage.getItem('email')
            })
            hideLoader();

            if (res.status === 200 && res.data['success'] === true) {
                successToast(res.data['message'])
                sessionStorage.clear();
                setTimeout(() => {
                    Inertia.visit('/reset-password-page');
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
                            <h4>ENTER OTP CODE</h4>
                            <br />
                            <label>4 Digit Code Here</label>
                            <input className="form-control" id="otp" type="text" placeholder="Code" />
                            <br />
                            <button className="btn w-100 float-end btn-outline-primary" onClick={VerifyOtp}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default VerifyOtpForm;