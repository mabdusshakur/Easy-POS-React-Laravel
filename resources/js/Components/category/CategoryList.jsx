import React, { useEffect, useRef } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import CategoryCreate from './CategoryCreate';
import CategoryUpdate from './CategoryUpdate';
import CategoryDelete from './CategoryDelete';

function CategoryList() {
    const updateRef = useRef();

    useEffect(() => {
        getList();
    }, []);


    // ---------------- List Category function ----------------
    async function getList() {
        showLoader();
        let res = await axios.get("/api/categories");
        res = res.data[0];
        hideLoader();

        let tableList = $("#tableList");
        let tableData = $("#tableData");

        tableData.DataTable().destroy();
        tableList.empty();

        res.forEach(function (item, index) {
            let row = `<tr>
                         <td>${index + 1}</td>
                         <td>${item['name']}</td>
                         <td>
                             <button data-id="${item['id']}" class="btn editBtn btn-sm btn-outline-success">Edit</button>
                             <button data-id="${item['id']}" class="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                         </td>
                    </tr>`
            tableList.append(row)
        })

        $('.editBtn').on('click', async function () {
            let id = $(this).data('id');
            if (updateRef.current) {
                await updateRef.current.FillUpUpdateForm(id);
            } else {
                console.error("updateRef.current is undefined");
            }
            new bootstrap.Modal(document.getElementById('update-modal')).show();
        })

        $('.deleteBtn').on('click', function () {
            let id = $(this).data('id');
            new bootstrap.Modal(document.getElementById('delete-modal')).show();
            $("#deleteID").val(id);
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
                                <h4>Category</h4>
                            </div>
                            <div className="align-items-center col">
                                <button className="float-end btn btn-outline-success m-0" data-bs-toggle="modal" data-bs-target="#create-modal">Create</button>
                            </div>
                        </div>
                        <hr className="bg-secondary" />
                        <div className="table-responsive">
                            <table className="table" id="tableData">
                                <thead>
                                    <tr className="bg-light">
                                        <th>No</th>
                                        <th>Category</th>
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
        </div>

        {/* Category Create Component */}
        <CategoryCreate getList={getList} />

        {/* Category Update Component */}
        <CategoryUpdate ref={updateRef} getList={getList} />

        {/* Category Delete Component */}
        <CategoryDelete getList={getList} />
    </>);
}

export default CategoryList;