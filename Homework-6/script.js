function getRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/posts', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        var array = JSON.parse(xhr.responseText);
        var table = '<table>';
        table += '<th>User ID</th><th>ID</th><th>Title</th><th>Body</th><th>Delete</th><th>Edit</th>';
        for (var i in array) {
            table += '<tr><td>' +
                array[i]['userId'] + '</td><td>' +
                array[i]['id'] + '</td><td>' +
                array[i]['title'] + '</td><td>' +
                array[i]['body'] +
                '</td><td><button id="' + array[i]['id'] + '" onclick="delRequest(this.id)">Delete</button></td>' +
                '</td><td><button id="' + array[i]['id'] + '" onclick="putRequest(this.id)">Edit</button></td></tr>';

        }
        table += '</table>';
        document.getElementById('main').innerHTML = table;
    }
}

function postRequest() {

    var xhr = new XMLHttpRequest();

    var obj = {};
    obj.userId = document.getElementById('userId').value;
    obj.title = document.getElementById('title').value;
    obj.body = document.getElementById('body').value;
    var json = JSON.stringify(obj);

    xhr.open('POST', 'http://localhost:3000/posts');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(json);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "201") {
            alert(xhr.responseText);
        }
    }
    xhr.onerror = function () {
        alert('Ошибка:' + xhr.status);
    }
}

function delRequest(row_id) {
    var url = "http://localhost:3000/posts/" + row_id;
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);
    xhr.send();

    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            getRequest();
        }
    }

    xhr.onerror = function () {
        alert('Ошибка ' + xhr.status);
    }
}

function putRequest(row_id) {
    var url = "http://localhost:3000/posts/" + row_id;
    var xhr = new XMLHttpRequest();
    var put_obj = {};
    put_obj.userId = document.getElementById('userId').value;
    put_obj.title = document.getElementById('title').value;
    put_obj.body = document.getElementById('body').value;
    var json = JSON.stringify(put_obj);
    xhr.open("PUT", url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(json);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            alert(xhr.responseText);
        }
    }
    xhr.onerror = function () {
        alert('Ошибка:' + xhr.status);
    }

}