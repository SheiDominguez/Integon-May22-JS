function addAuthor()
{
    //alert("ok");
    let html = `<tr>
                    <td>
                    <div class="d-flex px-2 py-1">
                        <div>
                        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1">
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">John Michael</h6>
                        <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                        </div>
                    </div>
                    </td>

                    <td>
                    <p class="text-xs font-weight-bold mb-0">Manager</p>
                    <p class="text-xs text-secondary mb-0">Organization</p>
                    </td>

                    <td class="align-middle text-center text-sm">
                    <span class="badge badge-sm bg-gradient-success">Online</span>
                    </td>

                    <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                    </td>

                    <td class="align-middle">
                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                        Edit
                    </a>
                    </td>
                </tr>`;
    let table = document.getElementById("AuthorsTable");
    let tbody = table.children[1];
    //tbody.innerHTML += html;

    let newAuthor = tbody.insertRow(0);
    let name = newAuthor.insertCell(0);
    name.innerHTML = `
    <div class="d-flex px-2 py-1">
        <div>
        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1">
        </div>
        <div class="d-flex flex-column justify-content-center">
        <h6 class="mb-0 text-sm">John Michael</h6>
        <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
        </div>
    </div>`;

    let funcion = newAuthor.insertCell(1);
    funcion.innerHTML = `
    <p class="text-xs font-weight-bold mb-0">Manager</p>
    <p class="text-xs text-secondary mb-0">Organization</p>`;
    
    let status = newAuthor.insertCell(2);
    status.innerHTML = `<span class="badge badge-sm bg-gradient-success">Online</span>`;
    status.className = "align-middle text-center text-sm";

    let employed = newAuthor.insertCell(3);
    employed.innerHTML = `<span class="text-secondary text-xs font-weight-bold">23/04/18</span>`;
    employed.className = "align-middle text-center";

    let edit = newAuthor.insertCell(4);
    edit.innerHTML = `
    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Edit
    </a>`;
    edit.className = "align-middle";
}