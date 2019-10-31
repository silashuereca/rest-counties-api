import React from 'react';
import BackButton from './BackButton';

function SideCard(props) {
	return (
		<div className="side-card-container">
			<BackButton />
			<div className="sub-side-card-container">
				<div className="flag-container"></div>
				<div className="country-info-container"></div>
			</div>
		</div>
	);
}

export default SideCard;
