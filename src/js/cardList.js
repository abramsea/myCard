fetch( 'data/cardList.json' )
  .then(( res ) => res.json())
  .then(( data ) => {
   
	const projectsInfo = data;
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


