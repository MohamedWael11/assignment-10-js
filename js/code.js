var siteName = document.getElementById("siteName");
var websiteUrl = document.getElementById("websiteUrl");
var btnAdd = document.getElementById("btnAdd");
var taskAll = [];

if (localStorage.getItem("taskAll") != null) {
    taskAll = JSON.parse(localStorage.getItem("taskAll"));
    display(taskAll);
}

function addTask() {
    if (siteName.value.trim() === "" || websiteUrl.value.trim() === "") {
        alert("Both Site Name and URL are required!🚨");
        return;
    }
    var task = {
        name: siteName.value.trim(),
        url: websiteUrl.value.trim(),
    };
    taskAll.push(task);
    setAtlocal();
    display(taskAll);
    clear();
}

function display(taskAll) {
    var cartona = ``;
    if (taskAll.length == 0) {
        document.getElementById("AllTask").innerHTML = `<tr>
                        <td colspan="4" class="fw-bold">Task List is Empty!</td>
        </tr>`;
    } else {
        for (var i = 0; i < taskAll.length; i++) {
            cartona += `<tr class="fw-normal">
        <td>${i + 1}</td>
        <td>
            <span>${taskAll[i].name} </span>
        </td>
        <td>
            <button onclick="vist(${i})" style="cursor: pointer;" class="btn btn-primary"><i class="fa-solid fa-eye "></i>Visit</button>
        </td>
        <td>
            <button onclick="deletelist(${i})" style="cursor: pointer;" class="btn btn-danger px-3"><i class="fa-solid fa-trash-can"></i>Delete</button>
        </td>
    </tr>`;
        }
        document.getElementById("AllTask").innerHTML = cartona;
    }
}

function deletelist(index) {
    taskAll.splice(index, 1);
    setAtlocal();
    display(taskAll);
}

function clear() {
    siteName.value = "";
    websiteUrl.value = "";
}

function setAtlocal() {
    localStorage.setItem("taskAll", JSON.stringify(taskAll));
}

function valition(element){
    
    var ragex={
        siteName:/^[a-zA-Z0-9]{3,}$/,
        websiteUrl:/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z]{2,6}(\b|\/[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    }
    
    
    if(ragex[element.id].test(element.value)==true){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        console.log("matchy");
        element.nextElementSibling.classList.add("d-none")
    }
    else{
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        console.log("not");
        element.nextElementSibling.classList.remove("d-none")
    }
}

function vist(index) {
    var go=taskAll[index].url;
    window.open(go, "_blank");
    setAtlocal();
}
