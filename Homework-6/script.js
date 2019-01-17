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
                '</td><td><button id="' + array[i]['id'] + '" onclick="delRequest(this)">Delete</button></td>' +
                '</td><td><button id="' + array[i]['id'] + '" onclick="putRequest(this)">Edit</button></td></tr>';

        }
        table += '</table>';
        document.getElementById('main').innerHTML = table;
    }
}

function delRequest(obj) {
var url = "http://localhost:3000/posts";
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url, true);
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(null);
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


function putRequest() {
    // var url = "http://localhost:3000/posts";

    // var obj = {};
    // obj.userId = document.getElementById('userId').value;
    // obj.title = document.getElementById('title').value;
    // obj.body = document.getElementById('body').value;
    // var json = JSON.stringify(obj);

    // var xhr = new XMLHttpRequest();
    // xhr.open("PUT", url + '/12', true);
    // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // xhr.send(json);
    // xhr.onload = function () {
    //     if (xhr.readyState == 4 && xhr.status == "201") {
    //         alert(xhr.responseText);
    //     }
    // }
    // xhr.onerror = function () {
    //     alert('Ошибка:' + xhr.status);
    // }
    
}