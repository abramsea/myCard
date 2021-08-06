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
		"image": "images/analyzer.jpg",
		"lead":  "Проект Яндекс.Практикум.",
		"tech": "HTML, CSS, JS, Webpack"
	}
}`

const projectsInfo = JSON.parse( projectsJSON );

const cardList = Object.values( projectsInfo ).map( item => item );

console.log(cardList)

// (<li className="card" key={item}>
// 		<a className="card__pic-box" href={link} target="_blank">
//             <img className="card__pic" src={image} alt={title}></img>
//         </a>
//         <div className="card__darken">
//             <h3 className="card__title">{title}</h3>
//             <p className="card__tech">
//                 {lead}
//             </p>
//             <p className="card__tech">
//                 {tech}
//             </p>
//         </div>
//         <div className="card__info">
//             <a href={github} className="icon" target="_blank">
//                 <i className="fab fa-github"></i>
//             </a>
//             <a href={link} className="icon" target="_blank">
//                 <i className="fas fa-external-link-alt"></i>
//             </a>
//         </div>
//     </li>);

const projects = document.querySelector( '#projects' );

// ReactDOM.render( <ul className="cards">{cardList}</ul>, projects );
const timelineJSON = `{
	"1": {
		"date": "2019.01",
		"title": "Сам себе режиссёр",
		"lead": "Самостоятельное обучение на курсах HTML Academy, Stepik",
		"isLast": false
	},
	"2": {
		"date": "2019.09-2020.10",
		"title": "ООО «Пульт.ру»",
		"lead": "HTML-верстальщик",
		"isLast": false
	},
	"3": {
		"date": "2020.01-2020.08",
		"title": "Яндекс.Практикум",
		"lead": "Обучение на курсе Фронтенд-разработчик",
		"isLast": false
	},
	"4": {
		"date": "2020.11-2021.07",
		"title": "Студия М18",
		"lead": "Frontend Developer",
		"isLast": false
	},
	"5": {
		"date": "2021.08-н.в.",
		"title": "ООО «Сберлогистика»",
		"lead": "React Developer",
		"isLast": true
	}
}`

const timelineInfo = JSON.parse( timelineJSON );


const timelineRow = (
	<li className="growup-row" key={item}>
		<div className="growup-left-col">
			<p>
				{date}
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
						{title}
					</h3>
					<p>
						{lead}
					</p>
				</div>
			</div>
		</div>
	</li>
);

const timeline = document.querySelector( '#timeline' );

// ReactDOM.render( timelineRow, timeline );