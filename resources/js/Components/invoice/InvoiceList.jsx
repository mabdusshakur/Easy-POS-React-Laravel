import React, { useEffect, useRef } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import InvoiceDetails from './InvoiceDetails';
import InvoiceDelete from './InvoiceDelete'; import { Link } from '@inertiajs/inertia-react';
;

function InvoiceList() {
    const updateRef = useRef();

    useEffect(() => {
        getList();
    }, []);

    // ---------------- List Invoice function ----------------
    async function getList() {
        showLoader();
        let res = await axios.get("/api/invoices");
        res = res.data[0];

        hideLoader();

        let tableList = $("#tableList");
        let tableData = $("#tableData");

        tableData.DataTable().destroy();
        tableList.empty();

        res.forEach(function (item, index) {
            let row = `<tr>
                    <td>${index + 1}</td>
                    <td>${item['customer']['name']}</td>
                    <td>${item['customer']['mobile']}</td>
                    <td>${item['total']}</td>
                    <td>${item['vat']}</td>
                    <td>${item['discount']}</td>
                    <td>${item['payable']}</td>
                    <td>
                        <button data-id="${item['id']}" class="viewBtn btn btn-outline-dark text-sm px-3 py-1 btn-sm m-0"><i class="fa text-sm fa-eye"></i></button>
                        <button data-id="${item['id']}" class="deleteBtn btn btn-outline-danger text-sm px-3 py-1 btn-sm m-0"><i class="fa text-sm  fa-trash-alt"></i></button>
                    </td>
                 </tr>`
            tableList.append(row)
        })

        $('.viewBtn').on('click', async function () {
            let id = $(this).data('id');
            if (updateRef.current) {
                await updateRef.current.loadInvoiceDetails(id);
            } else {
                console.error("updateRef.current is undefined");
            }
        })

        $('.deleteBtn').on('click', function () {
            let id = $(this).data('id');
            document.getElementById('deleteID').value = id;
            new bootstrap.Modal(document.getElementById('delete-modal')).show();
        })

        DataTable.use(DT);
        tableData.DataTable({
            paging: true,
            pageLength: 5
        });
    }

    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                    <div className="card px-5 py-5">
                        <div className="row justify-content-between">
                            <div className="align-items-center col">
                                <h5>Invoices</h5>
                            </div>
                            <div className="align-items-center col">
                                <Link className="float-end btn btn-outline-success m-0" href="/sale">Create Sale</Link>
                            </div>
                        </div>
                        <hr className="bg-dark" />
                        <table className="table" id="tableData">
                            <thead>
                                <tr className="bg-light">
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Total</th>
                                    <th>Vat</th>
                                    <th>Discount</th>
                                    <th>Payable</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="tableList">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        {/* Invoice Details Component */}
        <InvoiceDetails ref={updateRef} getList={getList} />

        {/* Invoice Delete Component */}
        <InvoiceDelete getList={getList} />
    </>);
}

export default InvoiceList;