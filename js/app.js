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
		"title" : "PLG",
		"lead" : "Различные компоненты сайта строительной компании",
		"tech" : "HTML, CSS, JS",
		"link" : "https://plg.group",
		"image_src" : "images/plg.png",
		"github": ""
	},
	{
		"title" : "Инвестторг",
		"lead" : "Различные компоненты сайта строительной компании",
		"tech" : "HTML, CSS, JS",
		"link" : "https://investtorg.ru",
		"image_src" : "images/investtorg.png",
		"github": ""
	},
	{
		"title" : "Hard Rock Hotel Davos",
		"lead" : "Компонент &#34;Виртуальные туры&#34;",
		"tech" : "HTML, CSS, JS",
		"link" : "https://investtorg.ru",
		"image_src" : "images/investtorg.png",
		"github": ""
	},
	{
		"title" : "Галерея Назаров",
		"lead" : "Сайт компании",
		"tech" : "HTML, CSS, JS, Bitrix",
		"link" : "https://nazarov-gallery.ru/",
		"image_src" : "images/nazarov.jpg",
		"github": ""
	},
	{
		"title" : "Анализатор новостей",
		"lead" : "Дипломный проект Яндекс.Практикум.",
		"tech" : "HTML, CSS, JS, Webpack",
		"link" : "https://abramsea.github.io/diploma/index.html",
		"image_src" : "images/analyzer.jpg",
		"github" : "https://github.com/abramsea/diploma"
	},
	{
		"title" : "Mesto",
		"lead" : "Проект Яндекс.Практикум.",
		"tech" : "HTML, CSS, JS, Webpack",
		"link" : "https://abramsea.github.io/spr11/index.html",
		"image_src" : "images/mesto.jpg",
		"github" : "https://github.com/abramsea/nzrv"
	},
	{
		"title" : "Игровые гарнитуры",
		"lead" : "Landing page",
		"tech" : "HTML, CSS, JS",
		"link" : "https://abramsea.github.io/pult-wows",
		"image_src" : "images/wows.jpg",
		"github" : "https://github.com/abramsea/pult-wows"
	},
	{
		"title" : "проекторы Vivitek",
		"lead" : "Landing page",
		"tech" : "HTML, CSS, JS",
		"link" : "https://abramsea.github.io/vivitek",
		"image_src" : "images/vivitek.jpg",
		"github" : "https://github.com/abramsea/vivitek"
	},
	{
		"title" : "акустика Jamo",
		"lead" : "Landing page",
		"tech" : "HTML, CSS, JS",
		"link" : "https://abramsea.github.io/jamo",
		"image_src" : "images/jamo.jpg",
		"github" : "https://github.com/abramsea/jamo"
	}
]}`

const parsed = JSON.parse( json );
const cardList = document.querySelector( 'ul.cards' );

const addCard = ( card ) => {
	const template = `<li class="card">
						<a class="card__pic-box" href="${card.link}" target="_blank">
							<img class="card__pic"
								src="${card.image_src}"
								alt="${card.title}">
						</a>
						<div class="card__darken">
							<h3 class="card__title">${card.title}</h3>
							<p class="card__tech">
								${card.lead}
							</p>
							<p class="card__tech">
								${card.tech}
							</p>
						</div>
						<div class="card__info">
							<!-- <a href="${card.github}" class="icon" target="_blank">
								<i class="fab fa-github"></i>
							</a> -->
							<a href="${card.link}" class="icon" target="_blank">
								<i class="fas fa-external-link-alt"></i>
							</a>
						</div>
					</li>`

	cardList.insertAdjacentHTML( 'beforeend', template );
}

parsed.cards.forEach( ( card ) => {
	addCard( card );
});