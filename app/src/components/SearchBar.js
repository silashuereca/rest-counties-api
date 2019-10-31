import React from 'react';
import Select from 'react-select';
// setting the styles for select box
const customStyles = {
	control: styles => ({
		// none of react-select's styles are passed to <Control />
		...styles,
		width: 300,
		backgroundColor: 'white',
		color: '#fff',
		border: 'none',
	}),
	singleVale: base => ({
		...base,
		color: '#fff',
	}),
	input: base => ({
		...base,
		color: '#fff',
	}),
};

function SearchBar(props) {
	return (
		<div className="main-search-container">
			<div className="search-wrapper">
				<div className="search-container">
					<input
						onChange={props.search}
						style={{ backgroundColor: 'hsl(209, 23%, 22%)' }}
						type="text"
						placeholder="Search for a country..."
					/>
				</div>
				<div className="select-container">
					<select onChange={props.handleChange}>
						<option value="africa">Africa</option>
						<option value="americas">America</option>
						<option value="asia">Asia</option>
						<option value="europe">Europe</option>
						<option value="oceania">Oceania</option>
					</select>
					{/* <Select
						name="Regions"
						placeholder="Filter by region.."
						styles={customStyles}
						onChange={props.handleChange}
						options={props.options}
					/> */}
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
