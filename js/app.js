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
	const items = cards.map(( item, index ) => 
		(
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
					{ item.github !== null ? 
						<a href={item.github} className="icon" target="_blank">
							<i className="fab fa-github"></i>
						</a> : null }
					<a href={item.link} className="icon" target="_blank">
						<i className="fas fa-external-link-alt"></i>
					</a>
				</div>
			</li>
		)
	);

	return (
		<ul className="cards">{items}</ul>
	);
}

const projects = document.querySelector( '#projects' ); 

ReactDOM.render( <CardList cards={cards}/>, projects ); 




const timelineJSON = `{
	"1": {
		"date": "2019.01",
		"title": "Сам себе режиссёр",
		"lead": "Самостоятельное обучение на курсах HTML Academy, Stepik"
	},
	"2": {
		"date": "2019.09-2020.10",
		"title": "ООО «Пульт.ру»",
		"lead": "HTML-верстальщик"
	},
	"3": {
		"date": "2020.01-2020.08",
		"title": "Яндекс.Практикум",
		"lead": "Обучение на курсе Фронтенд-разработчик"
	},
	"4": {
		"date": "2020.11-2021.07",
		"title": "Студия М18",
		"lead": "Frontend Developer"
	},
	"5": {
		"date": "2021.08-н.в.",
		"title": "ООО «Сберлогистика»",
		"lead": "React Developer"
	}
}`

const timelineInfo = JSON.parse( timelineJSON );

const timelineRows = Object.values( timelineInfo ).map( item => item );

function TimelineList( props ) {
	const timelines = props.timelines;
	const items = timelines.map(( item, index ) => 

		<li className="growup-row" key={index}>
			<div className="growup-left-col">
				<p>
					{item.date}
				</p>
			</div>
			<div className="growup-right-col">
				<div className="growup-right-col-wrapper">
					<div className="timeline-line"></div>
					<div className="timeline-wrapper">
						<div className="timeline-circle-wrapper">
							<div className="timeline-circle"></div>
						</div>
					</div>
					<div className="growup-text-wrapper">
						<h3 className="growup-title">
							{item.title}
						</h3>
						<p>
							{item.lead}
						</p>
					</div>
				</div>
			</div>
		</li>

	);
	
	return (
		<ul className="growup-wrapper">{items}</ul>
	);
}

const timeline = document.querySelector( '#timeline' ); 

ReactDOM.render( <TimelineList timelines={timelineRows}/>, timeline ); 

