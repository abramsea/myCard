const projectsJSON = `{
	"pk1": {
		"title": "Петровская коса, 1",
		"link": "https://pk1.spb.ru",
		"github": null,
		"image": "images/pk1.png",
		"lead": "Различные компоненты сайта строительной компании",
		"tech": "HTML, CSS, JS"
	},
	"investtorg": {
		"title": "Инвестторг",
		"link": "https://investtorg.ru/",
		"github": null,
		"image": "images/investtorg.png",
		"lead": "Различные компоненты сайта строительной компании",
		"tech": "HTML, CSS, JS"
	},
	"plg": {
		"title": "PLG",
		"link": "https://plg.group",
		"github": null,
		"image": "images/plg.png",
		"lead": "Различные компоненты сайта строительной компании",
		"tech": "HTML, CSS, JS"
	},
	"hrh": {
		"title": "Hard Rock Hotel Davos",
		"link": "http://residencesathrhdavos.com/virtual-tours/",
		"github": null,
		"image": "images/hrh.png",
		"lead":  "Компонент «Виртуальные туры» и др.",
		"tech": "HTML, CSS, JS"
	},
	"diploma": {
		"title": "Анализатор новостей",
		"link": "https://abramsea.github.io/diploma/index.html",
		"github": "https://github.com/abramsea/diploma",
		"image": "images/analyzer.jpg",
		"lead":  "Дипломный проект Яндекс.Практикум.",
		"tech": "HTML, CSS, JS, Webpack"
	},
	"mesto": {
		"title": "Mesto",
		"link": "https://abramsea.github.io/spr11/index.htm",
		"github": "https://github.com/abramsea/spr11",
		"image": "images/mesto.jpg",
		"lead":  "Проект Яндекс.Практикум.",
		"tech": "HTML, CSS, JS, Webpack"
	}
}`

const projectsInfo = JSON.parse( projectsJSON );

const cards = Object.values( projectsInfo ).map( item => item );

function CardList( props ) {
	const cards = props.cards;
	const items = cards.map( function ( item, index ) {

		if ( item.github != null ) 
		{
			return (
				<li className="card" key={index++}>
					<picture className="card__pic-box">
						<img className="card__pic" src={item.image} alt={item.title}></img>
					</picture>
					<div className="card__darken">
						<h3 className="card__title">{item.title}</h3>
						<p className="card__tech">
							{item.lead}
						</p>
						<p className="card__tech">
							{item.tech}
						</p>
					</div>
					<div className="card__info">
						<a href={item.github} className="icon" target="_blank">
							<i className="fab fa-github"></i>
						</a>
						<a href={item.link} className="icon" target="_blank">
							<i className="fas fa-external-link-alt"></i>
						</a>
					</div>
				</li>
			)
		}
		else
		{
			return (
				<li className="card" key={index++}>
					<picture className="card__pic-box">
						<img className="card__pic" src={item.image} alt={item.title}></img>
					</picture>
					<div className="card__darken">
						<h3 className="card__title">{item.title}</h3>
						<p className="card__tech">
							{item.lead}
						</p>
						<p className="card__tech">
							{item.tech}
						</p>
					</div>
					<div className="card__info">
						<a href={item.link} className="icon" target="_blank">
							<i className="fas fa-external-link-alt"></i>
						</a>
					</div>
				</li>
			)
		}
	});

	return (
		<ul className="cards">{items}</ul>
	);
}

const projects = document.querySelector( '#projects' ); 

ReactDOM.render( <CardList cards={cards}/>, projects ); 


