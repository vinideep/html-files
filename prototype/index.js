let demo = document.getElementById("demo");

function Juices(orange,apple,mango,pomegranate,lemon){
    this.orange = orange;
    this.apple = apple;
    this.mango = mango;
    this.pomegranate = pomegranate;
    this.lemon = lemon;
}

Juices.prototype.kiwi = 20;
var prices = new Juices(40,50,45,55,20);
let show = document.getElementById("demo");
show.innerHTML = `<h2>Orange: ${prices.orange}<br>
Apple: ${prices.apple}<br>
Mango: ${prices.mango}<br>
pomegranate: ${prices.pomegranate}<br>
lemon: ${prices.lemon}<br>
kiwi: ${prices.kiwi}</h2>`
show.style.textAlign = "left"
