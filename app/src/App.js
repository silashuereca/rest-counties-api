import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import SideCard from './components/SideCard';

class App extends Component {
	state = {
		options: [
			{ value: 'africa', label: 'Africa' },
			{ value: 'americas', label: 'America' },
			{ value: 'asia', label: 'Asia' },
			{ value: 'europe', label: 'Europe' },
			{ value: 'oceania', label: 'Oceania' },
		],
		region: 'africa',
		receiveData: [],
		searchInput: '',
	};

	componentDidMount() {
		fetch(`https:restcountries.eu/rest/v2/region/${this.state.region}`)
			.then(result => result.json())
			.then(data => {
				this.setState({ receiveData: data });
			});
	}

	componentDidUpdate() {
		// fetch(`https:restcountries.eu/rest/v2/region/${this.state.region}`)
		// 	.then(result => result.json())
		// 	.then(data => {
		// 		this.setState({ recieveData: data });
		// 	})
		// 	.catch(console.log);
	}

	//handle different values from search box
	handleSearchInput = e => {
		this.setState({
			searchInput: e.target.value,
		});
	};

	//handle change from select drop down box
	handleChange = e => {
		this.setState({
			region: e.target.value,
		});
		console.log(this.state.receiveData);
	};

	//filter out data using search
	filterItems = () => {
		let filter = this.state.receiveData.filter(item => {
			return item.name.toLowerCase().includes(this.state.searchInput.toLocaleLowerCase());
		});

		return filter;
	};

	render() {
		console.log(this.state.region);
		return (
			<div className="App">
				<Header />
				<SearchBar
					data={this.filterItems()}
					search={this.handleSearchInput}
					options={this.state.options}
					handleChange={this.handleChange}
				/>
				<Card />
				<SideCard />
			</div>
		);
	}
}

export default App;
