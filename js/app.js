const json = `{
	"pk1": {
		"title": "pk1",
		"link": "https://pk1.spb.ru",
		"github": null,
		"image": "images/pk1.png",
		"lead": "lorem ipsum test testingson",
		"tech": "HTML, CSS, JS"
	},
	"pk2": {
		"title": "pk2",
		"link": "https://pk1.spb.ru",
		"github": null,
		"image": "images/pk1.png",
		"lead": "lorem ipsum test testingson",
		"tech": "HTML, CSS, JS"
	}
}`

const info = JSON.parse( json );

const card = (
    <li className="card">
		<a className="card__pic-box" href={info[pk1].link} target="_blank">
            <img className="card__pic" src={info[pk1].image} alt={title}></img>
        </a>
        <div className="card__darken">
            <h3 className="card__title">{info[pk1].title}</h3>
            <p className="card__tech">
                {info[pk1].lead}
            </p>
            <p className="card__tech">
                {info[pk1].tech}
            </p>
        </div>
        <div className="card__info">
            <a href={info[pk1].github} className="icon" target="_blank">
                <i className="fab fa-github"></i>
            </a>
            <a href={info[pk1].link} className="icon" target="_blank">
                <i className="fas fa-external-link-alt"></i>
            </a>
        </div>
    </li>);

const cardList = document.querySelector( 'ul.cards' );

ReactDOM.render( card, cardList );