import React from 'react';

function Header(props) {
	return (
		<div className="header-container" style={{ backgroundColor: `${props.backgroundColor}` }}>
			<div className="wrapper">
				<div>
					<div className="header-name-container">
						<h3 style={{ color: `${props.color}` }}>What in the world?</h3>
					</div>
				</div>
				<div>
					<div className="dark-mode-container">
						<h4 onClick={props.handleDarkMode} style={{ color: `${props.color}` }}>
							{props.darkOrLight}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
