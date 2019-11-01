import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import SideCard from './components/SideCard';

class App extends Component {
	state = {
		options: [
			{ value: 'Africa', label: 'Africa' },
			{ value: 'Americas', label: 'America' },
			{ value: 'Asia', label: 'Asia' },
			{ value: 'Europe', label: 'Europe' },
			{ value: 'Oceania', label: 'Oceania' },
		],
		region: '',
		receiveData: [],
		newData: [],
		searchInput: '',
		cardData: [],
		openAndClose: true,
	};

	componentDidMount() {
		fetch(`https://restcountries.eu/rest/v2/all`)
			.then(result => result.json())
			.then(data => {
				this.setState({ receiveData: data });
			});
	}

	//handle change from select drop down box
	changeRegion = option => {
		let filterRegion = this.state.receiveData.filter(item => item.region === option.value);

		this.setState({
			region: option,
			newData: filterRegion,
		});
	};

	//handle different values from search box
	handleSearchInput = e => {
		this.setState({
			searchInput: e.target.value,
		});
	};

	//filter out data using search
	filterItems = () => {
		let filter = this.state.newData.filter(item => {
			return item.name.toLowerCase().includes(this.state.searchInput.toLocaleLowerCase());
		});

		return filter;
	};

	//open card with inform with click
	openCard = data => {
		this.setState({
			cardData: data,
			openAndClose: false,
		});
		console.log(data.name);
	};

	//slide card back out when clicked
	closeCard = () => {
		this.setState({
			openAndClose: true,
		});
	};

	render() {
		console.log(this.state.receiveData);
		return (
			<div className="App">
				<Header />
				<SearchBar
					data={this.filterItems()}
					search={this.handleSearchInput}
					options={this.state.options}
					handleChange={this.changeRegion}
				/>
				<Card items={this.filterItems()} openCard={this.openCard} />
				<SideCard
					closeCard={this.closeCard}
					data={this.state.cardData}
					openAndClose={this.state.openAndClose == true ? '-2000px' : '0px'}
				/>
			</div>
		);
	}
}

export default App;
