import React from 'react';

function Card(props) {
	// card information
	let cards = props.items.map((item, i) => {
		return (
			<div key={i} className="sub-card-container">
				<div onClick={props.openCard} className="country" style={{ backgroundColor: 'hsl(209, 23%, 22%)' }}>
					<div className="flag">
						<img src={`${item.flag}`} />
					</div>
					<div className="country-title-container card-info">
						<h4>{item.name}</h4>
					</div>
					<div className="country-info card-info">
						<p>Population: {parseInt(item.population).toLocaleString()}</p>
						<p>Region: {item.region}</p>
						{/* for any countries that don't have a capital */}
						<p>Capital: {item.capital.length < 1 ? 'N/A' : item.capital}</p>
					</div>
				</div>
			</div>
		);
	});

	return <div className="card-container">{cards}</div>;
}

export default Card;
