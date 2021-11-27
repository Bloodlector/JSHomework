
function getResult() {
    var menu = document.getElementsByClassName('menu');
    var price = 0;
    var kkal = 0;
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].checked) {
            price += parseFloat(menu[i].getAttribute('date-cost'));
            kkal += parseFloat(menu[i].getAttribute('date-kkal'));

        }
    }
    document.getElementById('price').innerHTML = price;
    document.getElementById('kkal').innerHTML = kkal;
    console.log(price + kkal)
}

