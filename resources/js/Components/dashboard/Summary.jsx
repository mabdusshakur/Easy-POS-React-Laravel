import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faList, faUsers, faFileInvoice, faDollarSign, faMoneyBill, faWallet } from '@fortawesome/free-solid-svg-icons';
function Summary() {

    useEffect(() => {
        fetchSummary();
    }, []);


    // ---------------- Get Summary function ----------------
    async function fetchSummary() {
        showLoader();
        let res = await axios.get("/api/summary");
        res = res.data[0];

        document.getElementById('product').innerText = res['product']
        document.getElementById('category').innerText = res['category']
        document.getElementById('customer').innerText = res['customer']
        document.getElementById('invoice').innerText = res['invoice']
        document.getElementById('total').innerText = res['total']
        document.getElementById('vat').innerText = res['vat']
        document.getElementById('payable').innerText = res['payable']

        hideLoader();
    }

    return (<>
        <div className="container-fluid">
            <div className="row">

                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                    <div className="card card-plain h-100 bg-white">
                        <div className="p-3">
                            <div className="row">
                                <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                    <div>
                                        <h5 className="text-capitalize font-weight-bold mb-0">
                                            <span id="product"></span>
                                        </h5>
                                        <p className="mb-0 text-sm ">Product</p>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                    <FontAwesomeIcon icon={faBoxesStacked} size="2x" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                    <div className="card card-plain h-100 bg-white">
                        <div className="p-3">
                            <div className="row">
                                <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                    <div>
                                        <h5 className="text-capitalize font-weight-bold mb-0">
                                            <span id="category"></span>
                                        </h5>
                                        <p className="mb-0 text-sm">Category</p>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                    <FontAwesomeIcon icon={faList} size="2x" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                    <div className="card card-plain h-100 bg-white">
                        <div className="p-3">
                            <div className="row">
                                <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                    <div>
                                        <h5 className="text-capitalize font-weight-bold mb-0">
                                            <span id="customer"></span>
                                        </h5>
                                        <p className="mb-0 text-sm">Customer</p>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                    <FontAwesomeIcon icon={faUsers} size="2x" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                    <div className="card card-plain h-100 bg-white">
                        <div className="p-3">
                            <div className="row">
                                <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                    <div>
                                        <h5 className="text-capitalize font-weight-bold mb-0">
                                            <span id="invoice"></span>
                                        </h5>
                                        <p className="mb-0 text-sm">Invoice</p>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                    <FontAwesomeIcon icon={faFileInvoice} size="2x" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                    <div className="card card-plain h-100 bg-white">
                        <div className="p-3">
                            <div className="row">
                                <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                    <div>
                                        <h5 className="text-capitalize font-weight-bold mb-0">
                                            $ <span id="total"></span>
                                        </h5>
                                        <p className="mb-0 text-sm">Total Sale</p>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                    <FontAwesomeIcon icon={faDollarSign} size="2x" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                    <div className="card card-plain h-100 bg-white">
                        <div className="p-3">
                            <div className="row">
                                <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                    <div>
                                        <h5 className="text-capitalize font-weight-bold mb-0">
                                            $ <span id="vat"></span>
                                        </h5>
                                        <p className="mb-0 text-sm">Vat Collection</p>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                    <FontAwesomeIcon icon={faMoneyBill} size="2x" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                    <div className="card card-plain h-100 bg-white">
                        <div className="p-3">
                            <div className="row">
                                <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                    <div>
                                        <h5 className="text-capitalize font-weight-bold mb-0">
                                            $ <span id="payable"></span>
                                        </h5>
                                        <p className="mb-0 text-sm">Total Collection</p>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                    <FontAwesomeIcon icon={faWallet} size="2x" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>);
}

export default Summary;