// CLASSIC FOR LOOPS

//1
for (let i = 0; i <= 1000; i++) {
    console.log("Lapnumber is " + [i]);
}

//2
for (let i = 100; i >= 0; i--) {
    console.log("Lapnumber is " + [i]);
}

//3
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    console.log(i + ". "+ fruits[i]);
}

//4
for (let i = 0; i < fruits.length; i++) {
    console.log(i + ". "+ fruits[i]);
}

//FOR OF LOOPS

//6
let things = ['hammer', 'nails', 'ruler', 'srewdriver', 'screws', 'saw'];

for(let x of things) {
    console.log(x);
}

//FOR EACH LOOPS

//7
things.forEach(function(thing) {
    console.log(thing);
})

//8
things.forEach(function(thing, index) {
    console.log(`${thing} has index ${index}`);
})

//WHILE LOOPS

//9
let i = 0;
while (i <= 1000) {
    console.log('varv ' + i);
    i++;
}

//LOOP DA LOOPS

//10
let suite = ['hearts', 'diamonds', 'clubs', 'spades'];

for (let i = 0; i < suite.length; i++) {
    for (let j = 2; j <= 14; j++) {
        console.log(suite[i] + j);
    }
}

//11
let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

friends.forEach(friend => {
    console.log(friend.name + ' likes: ');
    friend.likes.forEach(like => {
        console.log(like);
    })
})



