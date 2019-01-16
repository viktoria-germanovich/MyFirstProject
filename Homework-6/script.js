function loadXMLRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        createTable(xhr);
    }
}

function createTable(xhr) {
    var array = JSON.parse(xhr.responseText);
    var table = '<table>';
    table += '<th>User ID</th><th>ID</th><th>Title</th><th>Body</th>';
    for (var i in array) {
        table += '<tr><td>' +
            array[i]['userId'] + '</td><td>' +
            array[i]['id'] + '</td><td>' +
            array[i]['title'] + '</td><td>' +
            array[i]['body'] + '</td></tr>';
    }
    table += '</table>';
    document.getElementById('main').innerHTML = table;
}