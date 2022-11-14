var row = null;

function Submit() {
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    if (dataEntered == false) {
        msg.innerHTML = "Please insert data!";
    } else {
        if (row == null) {
            insert(readData);
            msg.innerHTML = "Data Inserted!"
    } else {
        update();
        msg.innerHTML = "Data Updated!"
    }
}   
document.getElementById("form").reset();
}

function retrieveData() {
    var firstname = document.getElementById("first").value;
    var lastname = document.getElementById("last").value;
    var emailadd = document.getElementById("email").value;
    var birth = document.getElementById("birthdate").value;
    var address = document.getElementById("address").value;
    var course = document.getElementById("course").value;
    var sex = document.getElementById("sex").value;

    var arr = [firstname, lastname, emailadd, birth, address, course, sex];
    if (arr.includes("")) {
        return false;
    } else {
        return arr;
    }

}

function readingDataFromLocalStorage(dataEntered) {
    var fn = localStorage.setItem("first", dataEntered[0]);
    var ln = localStorage.setItem("last", dataEntered[1]);
    var ea = localStorage.setItem("email", dataEntered[2]);
    var bi = localStorage.setItem("birthdate", dataEntered[3]);
    var ad = localStorage.setItem("address", dataEntered[4]);
    var cr = localStorage.setItem("course", dataEntered[5]);
    var sx = localStorage.setItem("sex", dataEntered[6]);

    var fn1 = localStorage.getItem("first", fn);
    var ln1 = localStorage.getItem("last", ln);
    var ea1 = localStorage.getItem("email", ea);
    var bi1 = localStorage.getItem("birthdate", bi);
    var ad1 = localStorage.getItem("address", ad);
    var cr1 = localStorage.getItem("course", cr);
    var sx1 = localStorage.getItem("sex", sx);

    var arr = [fn1, ln1, ea1, bi1, ad1, cr1, sx1];
     return arr;
}

function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = readData[3];
    row.insertCell(4).innerHTML = readData[4];
    row.insertCell(5).innerHTML = readData[5];
    row.insertCell(6).innerHTML = readData[6];
    row.insertCell(7).innerHTML = "<button onclick = edit(this)>Edit</button><button onclick = remove(this)>Delete</button>";
}

function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("first").value = row.cells[0].innerHTML;
    document.getElementById("last").value = row.cells[1].innerHTML;
    document.getElementById("email").value = row.cells[2].innerHTML;
    document.getElementById("birthdate").value = row.cells[3].innerHTML;
    document.getElementById("address").value = row.cells[4].innerHTML;
    document.getElementById("course").value = row.cells[5].innerHTML;
    document.getElementById("sex").value = row.cells[6].innerHTML;
}

function update() {
    row.cells[0].innerHTML = document.getElementById("first").value;
    row.cells[1].innerHTML = document.getElementById("last").value;
    row.cells[2].innerHTML = document.getElementById("email").value;
    row.cells[3].innerHTML = document.getElementById("birthdate").value;
    row.cells[4].innerHTML = document.getElementById("address").value;
    row.cells[5].innerHTML = document.getElementById("course").value;
    row.cells[6].innerHTML = document.getElementById("sex").value;
    row = null;
}

function remove(td) {
    var ans = confirm("Do you want to delete this record?");
    if (ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }
    
}