// const cardsContainer = document.querySelector( 'div.cards' );

// const readTextFile = ( file, callback ) => {
//     const rawFile = new XMLHttpRequest();

//     console.log( rawFile );

//     rawFile.overrideMimeType( 'application/json' );
//     rawFile.open( 'GET', file, true );
//     rawFile.onreadystatechange = () => {
//         if ( rawFile.readyState === 4 && rawFile.status == '200' ) {
//             callback( rawFile.responseText );
//         }
//         rawFile.send( null );
//     }

//     console.log( rawFile );
// }

// const cardsInfo = readTextFile( '../data/cards.json', ( text ) => {
//     return JSON.parse( text );
// })

// console.log( cardsInfo );


const json = `{ 
    "cards" : [{
        "title" : "акустика Jamo",
        "lead" : "Landing page",
        "tech" : "HTML, CSS, JS",
        "link" : "https://abramsea.github.io/jamo",
        "image_src" : "img/jamo.jpg",
        "github": "https://github.com/abramsea/jamo"
    },
    {
        "title" : "акустика Jamo",
        "lead" : "Landing page",
        "tech" : "HTML, CSS, JS",
        "link" : "https://abramsea.github.io/jamo",
        "image_src" : "img/jamo.jpg",
        "github": "https://github.com/abramsea/jamo"
    }
]}`
const cards = JSON.parse( json );
console.log(cards);

