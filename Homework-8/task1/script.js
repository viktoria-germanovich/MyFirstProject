function countRequest() {
    url = 'https://services.odata.org/V4/TripPinServiceRW/People/$count'
    $.get(url, function (data) {
        alert("Total number of records:" + data);
    }).fail(function () {
        alert("Fail!");
    });;
}

function expandRequest() {
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$expand=Trips", function (data) {
        console.log(data);
        alert('This request returns People and all their trips.Go to console to see it.');
        showTable(data.value);
    }).fail(function () {
        alert("Fail!");
    });;
}



function topRequest() {
    url = "https://services.odata.org/V4/TripPinServiceRW/People?$top=2";
    $.get(url, function (data) {
        console.log(data);
        alert("First 2 records:");
        showTable(data.value);
    }).fail(function () {
        alert("Fail!");
    });;

}


function orderbyRequest() {
    url = "https://services.odata.org/V4/TripPinServiceRW/People?$orderby=FirstName"
    $.get(url, function (data) {
        console.log(data);
        alert("Order By FirstName:");
        showTable(data.value);
    }).fail(function () {
        alert("Fail!");
    });;
}


function skipRequest() {
    url = "https://services.odata.org/V4/TripPinServiceRW/People?$skip=15 "
    $.get(url, function (data) {
        console.log(data);
        alert('Scip of 15 records');
        showTable(data.value);
    }).fail(function () {
        alert("Fail!");
    });;
}


function searchRequest() {
    url = "https://services.odata.org/V4/TripPinServiceRW/People?$search=Boise "
    $.get(url, function (data) {
        console.log(data);
        alert('Search record with City Name:Boise. Go to console to see it.');
        showTable(data.value);
    }).fail(function () {
        alert("Fail!");
    });;
}


function filterRequest() {
    url = "https://services.odata.org/V4/TripPinServiceRW/People?$filter=FirstName eq 'Scott'"
    $.get(url, function (data) {
        console.log(data);
        alert('Filter with First Name :Scott');
        showTable(data.value);
    }).fail(function () {
        alert("Fail!");
    });;
}
function combFilterRequest() {
    url="https://services.odata.org/V4/TripPinServiceRW/People?$filter=startswith(FirstName,'" + 'R' + "') or startswith(FirstName,'" + 'C' + "') or startswith(FirstName,'" + 'K' + "')"
        $.get(url, function (data) {
            console.log(data);
            alert('Request with FirstName first letters:R,C,K.');
            showTable(data.value);
        }).fail(function () {
            alert("Fail!");
        });;
}


function combStringRequest() {
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$select=FirstName&$top=7&$orderby=FirstName desc", function (data) {
        console.log(data);
        showTable(data.value, 'NAME_ONLY');
        alert('Select:FirstName   Top:7   Order By FirstName desc');
    }).fail(function () {
        alert("Fail!");
    });;
}

function selectRequest() {
    url = "https://services.odata.org/V4/TripPinServiceRW/People?$select=FirstName"
    $.get(url, function (data) {
        console.log(data);
        alert('Select FirstName:');
        showTable(data.value, 'NAME_ONLY');
    }).fail(function () {
        alert("Fail!");
    });;
}

function showTable(data, mode) {
    var myHTMLStr = '<table>';
    if (mode == 'NAME_ONLY') {
        myHTMLStr += '<th>FirstName</th>';
        if (Array.isArray(data)) {
            for (var i in data) {
                myHTMLStr += '<tr><td>' + data[i]['FirstName'] + '</td></tr>';
            }
        } else {
            myHTMLStr += '<tr><td>' + data.FirstName + '</td></tr>';
        }
    } else {
        myHTMLStr += '<th>FirstName</th><th>Gender</th><th>LastName</th><th>UserName</th>';
        if (Array.isArray(data)) {
            for (var i in data) {
                myHTMLStr += '<tr><td>' + data[i]['FirstName'] + '</td><td>' +
                    data[i]['Gender'] + '</td><td>' +
                    data[i]['LastName'] + '</td><td>' +
                    data[i]['UserName'] + '</td></tr>';
            }
        } else {
            myHTMLStr += '<tr><td>' + data.FirstName + '</td><td>' +
                data.Gender + '</td><td>' +
                data.LastName + '</td><td>' +
                data.UserName + '</td></tr>';
        }
    }
    myHTMLStr += '</table>';
    document.getElementById('main').innerHTML = myHTMLStr;
}