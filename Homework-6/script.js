function getRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        var array = JSON.parse(xhr.responseText);
        var table = '<table>';
        table += '<th>User ID</th><th>ID</th><th>Title</th><th>Body</th><th>Delete</th>';
        for (var i in array) {
            table += '<tr><td>' +
                array[i]['userId'] + '</td><td>' +
                array[i]['id'] + '</td><td>' +
                array[i]['title'] + '</td><td>' +
                array[i]['body'] + '</td><td><button id=delete>Delete</button></td></tr>';
                
        }
        table += '</table>';
        document.getElementById('main').innerHTML = table;
    }
}


function postRequest() {

    var xhr = new XMLHttpRequest();

    var obj = {};
    obj.userID =  document.getElementById('userID').value;
    obj.title =  document.getElementById('title').value;
    obj.body =  document.getElementById('body').value;
    var json = JSON.stringify(obj);
  
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
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

