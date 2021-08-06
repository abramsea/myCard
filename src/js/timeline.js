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

