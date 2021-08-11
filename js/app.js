fetch('../data/cardList.json')
  .then(( res ) => res.json())
  .then(( data ) => {
   
	const projectsInfo = JSON.parse( data );
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
});




fetch('../data/timeline.json')
  .then(( res ) => res.json())
  .then(( data ) => {
    
	const timelineInfo = JSON.parse( data );
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

	const timeline = document.getElementById( 'timeline' ); 

	ReactDOM.render( <TimelineList timelines={timelineRows}/>, timeline ); 
});





