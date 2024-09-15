import { Inertia } from '@inertiajs/inertia';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import InvoiceContent from './InvoiceContent';


const InvoiceDetails = forwardRef((props, ref) => {

    const invoiceRef = useRef();

    useImperativeHandle(ref, () => ({
        loadInvoiceDetails
    }));

    // ---------------- Details Invoice function ----------------
    async function loadInvoiceDetails(inv_id) {

        showLoader()
        let res = await axios.get(`/api/invoices/${inv_id}`);
        res = res.data[0];
        hideLoader();

        document.getElementById('CName').innerText = res['customer']['name']
        document.getElementById('CId').innerText = res['customer']['user_id']
        document.getElementById('CEmail').innerText = res['customer']['email']
        document.getElementById('total').innerText = res['total']
        document.getElementById('payable').innerText = res['payable']
        document.getElementById('vat').innerText = res['vat']
        document.getElementById('discount').innerText = res['discount']


        let invoiceList = $('#invoiceList');
        $('#invoiceList').empty();

        res['invoice_products'].forEach(function (item, index) {
            let row = `<tr class="text-xs">
                        <td>${item['product']['name']}</td>
                        <td>${item['quantity']}</td>
                        <td>${item['sale_price']}</td>
                     </tr>`
            invoiceList.append(row)
        });

        new bootstrap.Modal(document.getElementById('details-modal')).show();
    }


    const handlePrint = useReactToPrint({
        content: () => invoiceRef.current,
        documentTitle: 'Invoice',
        onAfterPrint: () => {
            const modalElement = document.getElementById('details-modal');
            if (modalElement) {
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }
        },
    });
    function PrintPage() {
        let printContents = document.getElementById('invoice').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;

        setTimeout(function () {
            Inertia.visit('/dashboard')
        }, 500);
    }

    return (<>
        <div className="modal animated zoomIn" id="details-modal" aria-labelledby="exampleModalLabel" aria-hidden="true" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Invoice</h1>
                        <button className="btn-close" data-bs-dismiss="modal" type="button" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-3" id="invoice">

                        {/* Invoice Details List Component */}
                        <InvoiceContent ref={invoiceRef} />

                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-outline-dark" data-bs-dismiss="modal" type="button">Close</button>
                        <button className="btn btn-outline-success" onClick={handlePrint}>Print</button>
                    </div>
                </div>
            </div>
        </div>

    </>);
});

export default InvoiceDetails;