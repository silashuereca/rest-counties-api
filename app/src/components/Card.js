import React from 'react';

function Card(props) {
	// card information
	let cards = props.items.map((item, i) => {
		return (
			<div key={i} className="sub-card-container">
				<div
					// click to open up card information
					onClick={() => props.openCard(item)}
					className="country"
					style={{ backgroundColor: `${props.backgroundColor}`, color: 'black' }}
				>
					<div className="flag">
						<img src={`${item.flag}`} alt="country flag" />
					</div>
					<div className="country-title-container card-info" style={{ color: `${props.color}` }}>
						<h4>{item.name}</h4>
					</div>
					<div className="country-info card-info" style={{ color: `${props.color}` }}>
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
