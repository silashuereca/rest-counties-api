import React from 'react';

function SideCard(props) {
	return (
		<div
			className="side-card-container"
			style={{ right: props.openAndClose, backgroundColor: `${props.backgroundColor}` }}
		>
			<div className="back-button-container">
				{/* closing the card to view home screen */}
				<button
					onClick={props.closeCard}
					style={{ color: `${props.color}`, backgroundColor: `${props.backButtonColor}` }}
				>
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
							<h2 style={{ color: `${props.color}` }}>{props.data.name}</h2>
						</div>
						<div className="side-card-info-container">
							<div className="native-name-container">
								<p style={{ color: `${props.color}` }}>
									Native Name:{' '}
									<span style={{ color: `${props.color}` }}>{props.data.nativeName}</span>
								</p>
								<p style={{ color: `${props.color}` }}>
									Population:{' '}
									<span style={{ color: `${props.color}` }}>
										{parseInt(props.data.population).toLocaleString()}
									</span>
								</p>
								<p style={{ color: `${props.color}` }}>
									Region: <span style={{ color: `${props.color}` }}>{props.data.region}</span>
								</p>
								<p style={{ color: `${props.color}` }}>
									Sub Region: <span style={{ color: `${props.color}` }}>{props.data.subregion}</span>
								</p>
								<p style={{ color: `${props.color}` }}>
									Capital: <span style={{ color: `${props.color}` }}>{props.data.capital}</span>
								</p>
							</div>
							<div className="top-level-container" style={{ color: `${props.color}` }}>
								<p style={{ color: `${props.color}` }}>
									Top Level Domain:{' '}
									<span style={{ color: `${props.color}` }}>{props.data.topLevelDomain}</span>
								</p>
								<p style={{ color: `${props.color}` }}>
									Numeric Code:{' '}
									<span style={{ color: `${props.color}` }}>{props.data.numericCode}</span>
								</p>
								<p style={{ color: `${props.color}` }}>Timezones: {props.data.timezones}</p>
								<p style={{ color: `${props.color}` }}>
									Borders:{' '}
									<span style={{ color: `${props.color}` }}>
										{props.data.borders == null ? 'N/A' : props.data.borders + ' '}
									</span>
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
