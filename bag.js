var goods = {
    a1: {
        name: 'цинния',
        cost: 50,
        num: 0,
    },
    a2: {
        name: 'ромашка',
        cost: 30,
        num: 0,
    },
    a3: {
        name: 'тюльпан',
        cost: 70,
        num: 0,
    },
    a4: {
        name: 'роза',
        cost: 150,
        num: 0,
    }
};

var summa = 0;

function init(){
    var buts = document.getElementsByTagName('button');
        for(var i = 0; i < buts.length; i++) {
            var but = buts[i];
            but.onclick = buying;
        }
    }

function buying(eventObj) {
    var userBag = document.getElementById('user_bag');
    var eventBut = eventObj.target;
    var eventButId = eventBut.id.split("_");
    var i = eventButId[1];
    var divGood = document.getElementById('user_bag_good' + i);
    var divSumma = document.getElementById('user_summa');
    summa = summa + goods['a'+i].cost;
    if (goods['a'+i].num == 0) {
        goods['a'+i].num = goods['a'+i].num + 1;
        divGood.innerText = goods['a'+i].name + ' ' + goods['a'+i].num + ' шт. ' + goods['a'+i].cost + ' руб.';
    } else {
        goods['a'+i].num = goods['a'+i].num + 1;
        divGood.innerText = goods['a'+i].name + ' ' + goods['a'+i].num + ' шт. ' + goods['a'+i].cost * goods['a'+i].num + ' руб.';      
    }
    divSumma.innerText = 'Итого ' + summa + ' руб.';
}

function createCatalog() {
    var catalog = document.getElementById('catalog');
    var div = document.createElement('div');
    div.className = 'newGood';
    catalog.appendChild(div);
    div.innerHTML = goods['a' + i].name + ' по цене ' + goods['a' + i].cost + ' рублей';
    var but = document.createElement('button');
    but.className = 'buy';
    but.id = 'buy_' + i;
    but.innerText = 'Купи меня';
    catalog.appendChild(but);
}

function createBag() {
    var userBag = document.getElementById('user_bag');
    var divGood = document.createElement('div');
    divGood.className = 'user_bag_good';
    divGood.id = 'user_bag_good' + i;
    userBag.appendChild(divGood);
}

var count = 0;
for (var key in goods) {
    count++;
  }

for (i = 1; i <= count; i++) {
    createCatalog(i);
    createBag(i)
}

window.onload = init;


// let total = 0;
// let end = false;

// function Buy() {
//     let choice = prompt("Укажите товар. \n1. Меч \n2. Кинжал \n3. Молот \n4. Выход", "Вот здесь вводить");

//     if (choice == 1) {
//         total = total + sword.cost;
//         console.log(total);
//         return end;
//     } else if (choice == 2) {
//         total = total + dagger.cost;
//         return end;
//     } else if (choice == 3) {
//         total = total + hammer.cost;
//         return end;
//     } else {
//         end = true;
//         return end;
//     }
// }

// Buy();

// while (end == false) {
//     Buy();
// }

// console.log("Сумма: " + total);

