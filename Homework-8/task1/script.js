// function expandRequest() {
//     var xhr = new XMLHttpRequest();
//     url = "https://services.odata.org/V4/TripPinServiceRW/People?$expand=Trips($filter=Name eq 'Trip in US')";
//     xhr.open('GET', url, false);
//     xhr.send();
//     if (xhr.status != 200) {
//         alert(xhr.status + ': ' + xhr.statusText);
//     } else {
//         var array = JSON.parse(xhr.responseText);
//         var table = '<table>';
//         table += '<th>Username</th><th>FirstName</th><th>LastName</th><th>Gender</th><th>Concurrency</th>';
//         for (var i in array) {
//             table += '<tr><td>' + array[i].username + '</td><td>' +  array[i].firstname + '</td><td>' +  array[i].lastname + '</td><td>' +  array[i].gender + '</td><td>' +  array[i].concurrency + '</td></tr>';

//         }
//         table += '</table>';
//         document.getElementById('main').innerHTML = table;
//     }
// }

function countRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://services.odata.org/V4/TripPinServiceRW/People/$count', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        alert(xhr.responseText);

    }
}


function expandRequest() {
    var xhr = new XMLHttpRequest();
    url="https://services.odata.org/V4/TripPinServiceRW/People?$expand=Trips($filter=Name eq 'Trip in US')"
    xhr.open('GET',url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        document.getElementById('main').innerHTML = xhr.responseText;

    }
}

function topRequest() {
    var xhr = new XMLHttpRequest();
    url="https://services.odata.org/V4/TripPinServiceRW/People?$top=2"
    xhr.open('GET',url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        document.getElementById('main').innerHTML = xhr.responseText;

    }
}


function orderbyRequest() {
    var xhr = new XMLHttpRequest();
    url="https://services.odata.org/V4/TripPinServiceRW/People('scottketchum')/Trips?$orderby=EndsAt desc"
    xhr.open('GET',url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        document.getElementById('main').innerHTML = xhr.responseText;

    }
}


function skipRequest() {
    var xhr = new XMLHttpRequest();
    url="https://services.odata.org/V4/TripPinServiceRW/People?$skip=18 "
    xhr.open('GET',url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        document.getElementById('main').innerHTML = xhr.responseText;

    }
}


function searchRequest() {
    var xhr = new XMLHttpRequest();
    url="https://services.odata.org/V4/TripPinServiceRW/People?$search=Boise "
    xhr.open('GET',url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        document.getElementById('main').innerHTML = xhr.responseText;

    }
}


function filterRequest() {
    var xhr = new XMLHttpRequest();
    url="https://services.odata.org/V4/TripPinServiceRW/People?$filter=FirstName eq 'Scott'"
    xhr.open('GET',url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        document.getElementById('main').innerHTML = xhr.responseText;

    }
}


function selectRequest() {
    var xhr = new XMLHttpRequest();
    url="https://services.odata.org/V4/TripPinServiceRW/Airports?$select=Name, IcaoCode"
    xhr.open('GET',url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        document.getElementById('main').innerHTML = xhr.responseText;

    }
}