fetch( 'data/timeline.json' )
  .then(( res ) => res.json())
  .then(( data ) => {

	const timelineInfo = data;
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





