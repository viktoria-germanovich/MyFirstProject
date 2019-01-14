var friends = ['Петя', 'Кеша', 'Гриша', 'Ден', 'Вася', 'Паша', 'Сашка', 'Алёша'];
var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti, earum vitae sunt adipisci quisquam ab officiis inventore, ex officia perspiciatis, eligendi aperiam. Quis recusandae consectetur soluta minus eos. Itaque?';

for (var i = 0; i < friends.length; i++) {
    var el = document.createElement("div");
    el.classList.add("list-item");
    el.id = friends[i];
    el.setAttribute('onclick', 'openChat(this)');
    el.innerHTML = '<img src="images/' + friends[i] + '.jpg" class="list-img"><div class="name">' + friends[i] + '</div>';
    var cont = document.getElementById("list");
    cont.appendChild(el);
}

function openChat(friend) {
    var cont = document.getElementById("messages");
    cont.innerHTML = '';

    var hi = document.createElement("div");
    hi.classList.add("answer");
    hi.innerHTML = '<div class="answer-text">Привет, ' + friend.id + '</div><img src="images/Сашка.jpg" class="message-img">';
    var cont = document.getElementById("messages");
    cont.appendChild(hi);

    for (var i = 0; i < 10; i++) {
        var mes = document.createElement("div");
        mes.classList.add("message");
        mes.innerHTML = '<img src="images/' + friend.id + '.jpg" class="message-img"><div class="message-text">' + text + '</div>';
        var cont = document.getElementById("messages");
        cont.appendChild(mes);

        var ans = document.createElement("div");
        ans.classList.add("answer");
        ans.innerHTML = '<div class="answer-text">' + text + '</div><img src="images/Сашка.jpg" class="message-img">';
        var cont = document.getElementById("messages");
        cont.appendChild(ans);
    }   
}