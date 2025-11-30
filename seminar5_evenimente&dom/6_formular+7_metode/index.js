const apiUrl = 'http://localhost:8000/api/'

async function get(url) {
    return (await axios.get(url)).data
}

async function post(url, body) {
    return (await axios.post(url, body)).data
}

async function put(url, body) {
    return (await axios.put(url, body)).data
}

async function del(url) {
    return (await axios.delete(url)).data
}

async function loadTable() {
    let data = await get(apiUrl + "getList")
    let tableDiv = document.getElementById('tableData')

    if (!tableDiv) return;

    let myHtmlCode = []
    myHtmlCode.push("<table id='myTable' border='1' cellpadding='5'>")
    myHtmlCode.push('<thead>')
    myHtmlCode.push('<tr> <th> Id </th> <th> Nume </th> <th> Varsta </th> <th> Actiuni </th> </tr>')
    myHtmlCode.push('</thead>')
    myHtmlCode.push('<tbody>')

    for (let item of data) {
        myHtmlCode.push(`
            <tr> 
                <td> ${item.id} </td> 
                <td> ${item.name} </td> 
                <td> ${item.age} </td>
                <td>
                    <button onclick="deleteItem(${item.id})" >Sterge</button>
                    <button onclick="updateItem(${item.id})" >Modifica</button>
                </td>
            </tr>
        `)
    }

    myHtmlCode.push('</tbody>')
    myHtmlCode.push('</table>')

    tableDiv.innerHTML = myHtmlCode.join("")
}

async function sendData() {
    let name = document.getElementById('inputName').value
    let age = document.getElementById('inputAge').value

    if (!name || !age) {
        alert('Completeaza numele si varsta!')
        return
    }

    await post(apiUrl + "postList", { name, age })
    await loadTable()
    
    document.getElementById('inputName').value = ''
    document.getElementById('inputAge').value = ''
}

async function searchById() {
    let id = document.getElementById('searchIdInput').value;
    let resultDiv = document.getElementById('searchResult');

    if (!id) return;

    try {
        let result = await get(apiUrl + "getResource/" + id);
        resultDiv.innerHTML = `Gasit: ${result.name}, ${result.age} ani`;
        resultDiv.style.color = "green";
    } catch (e) {
        resultDiv.innerHTML = "Nu exista acest ID.";
        resultDiv.style.color = "red";
    }
}



async function deleteItem(id) {
    if(confirm("Esti sigur ca vrei sa stergi ID-ul " + id + "?")) {
        await del(apiUrl + "deleteList/" + id);
        await loadTable();
    }
}

async function updateItem(id) {
    let newName = prompt("Introdu noul nume:");
    let newAge = prompt("Introdu noua varsta:");

    if (newName && newAge) {
        await put(apiUrl + "updateList/" + id, {
            name: newName,
            age: parseInt(newAge)
        });
        await loadTable();
    }
}

loadTable()