main.onclick = function () {
    window.open('https://leverx.ru/', '_self');
}
for (var i = 0; i < 5; i++) {
    var el = document.createElement("div");
    el.classList.add("card");
    el.innerHTML = '<div class="card-head"><img src="winter1.jpg"><div class="card-header">Winter<div class="short-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, odio. Repudiandae dolores fuga praesentium quos, eligendi excepturi nobis rem ratione odit blanditiis unde, doloremque commodi illum atque ipsa accusantium adipisci.</div></div></div><button class="card-button">Try</button>';
    var cont = document.getElementById("main-content");
    cont.appendChild(el);
}