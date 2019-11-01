import React from 'react';

function SideCard(props) {
	return (
		<div className="side-card-container" style={{ right: props.openAndClose }}>
			<div className="back-button-container">
				{/* closing the card to view home screen */}
				<button onClick={props.closeCard}>
					<span className="arrow">&#8592;</span> Back
				</button>
			</div>
			<div className="sub-side-card-container">
				<div className="flag-container side-card">
					<div className="side-card-flag">
						<img src={`${props.data.flag}`} alt="flag" />
					</div>
				</div>
				<div className="side-card">
					<div className="country-info-container">
						<div className="side-card-title">
							<h2>{props.data.name}</h2>
						</div>
						<div className="side-card-info-container">
							<div className="native-name-container">
								<p>
									Native Name: <span>{props.data.nativeName}</span>
								</p>
								<p>
									Population: <span>{parseInt(props.data.population).toLocaleString()}</span>
								</p>
								<p>
									Region: <span>{props.data.region}</span>
								</p>
								<p>
									Sub Region: <span>{props.data.subregion}</span>
								</p>
								<p>
									Capital: <span>{props.data.capital}</span>
								</p>
							</div>
							<div className="top-level-container">
								<p>
									Top Level Domain: <span>{props.data.topLevelDomain}</span>
								</p>
								<p>
									Numeric Code: <span>{props.data.numericCode}</span>
								</p>
								<p>Timezones: {props.data.timezones}</p>
								<p>
									Borders:{' '}
									<span>{props.data.borders == null ? 'N/A' : props.data.borders + ' '}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideCard;
