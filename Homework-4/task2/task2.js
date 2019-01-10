initialPage.onclick = function () {
    document.location.href = "home.html"
}
flexBox.onclick = function () {
    var elem = document.getElementById('content');
    elem.parentNode.removeChild(elem);
    var div = document.createElement('div');
    div.className = "flex-container";
    div.innerHTML = "<div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div> <div>6</div>";
    document.body.appendChild(div);
}