import React from 'react';

function Header(props) {
	return (
		<div className="header-container">
			<div className="wrapper">
				<div>
					<div className="header-name-container">
						<h3>What in the world?</h3>
					</div>
				</div>
				<div>
					<div className="dark-mode-container">
						<h4>Dark Mode</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
