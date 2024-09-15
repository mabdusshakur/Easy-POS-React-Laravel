import React, { forwardRef, useEffect } from 'react';

const InvoiceContent = forwardRef((props, ref) => (
    <div className="container-fluid" ref={ref} id="invoice">
        <br />
        <div className="row">
            <div className="col-8">
                <span className="text-bold text-dark">BILLED TO </span>
                <p className="mx-0 my-1 text-xs">Name: <span id="CName"></span> </p>
                <p className="mx-0 my-1 text-xs">Email: <span id="CEmail"></span></p>
                <p className="mx-0 my-1 text-xs">User ID: <span id="CId"></span> </p>
            </div>
            <div className="col-4">
                <p className="text-bold text-dark mx-0 my-1">Invoice </p>
                <p className="mx-0 my-1 text-xs">Date: {new Date().toDateString()}</p>
            </div>
        </div>
        <hr className="bg-secondary mx-0 my-2 p-0" />
        <div className="row">
            <div className="col-12">
                <table className="w-100 table" id="invoiceTable">
                    <thead className="w-100">
                        <tr className="text-bold text-xs">
                            <td>Name</td>
                            <td>Qty</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody className="w-100" id="invoiceList">
                    </tbody>
                </table>
            </div>
        </div>
        <hr className="bg-secondary mx-0 my-2 p-0" />
        <div className="row">
            <div className="col-12">
                <p className="text-bold text-dark my-1 text-xs"> TOTAL: <i className="bi bi-currency-dollar"></i> <span id="total"></span></p>
                <p className="text-bold text-dark my-2 text-xs"> PAYABLE: <i className="bi bi-currency-dollar"></i> <span id="payable"></span></p>
                <p className="text-bold text-dark my-1 text-xs"> VAT(5%): <i className="bi bi-currency-dollar"></i> <span id="vat"></span></p>
                <p className="text-bold text-dark my-1 text-xs"> Discount: <i className="bi bi-currency-dollar"></i> <span id="discount"></span></p>
            </div>
        </div>
    </div>

));

export default InvoiceContent;
