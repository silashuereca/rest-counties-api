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
		darkMode: true,
	};

	componentDidMount() {
		fetch(`https://restcountries.eu/rest/v2/all`)
			.then(result => result.json())
			.then(data => {
				this.setState({ receiveData: data });
			});
	}

	//updating the body background color based on darkMode boolian
	componentDidUpdate() {
		let body = document.body;

		this.state.darkMode === true
			? (body.style.backgroundColor = 'hsl(207, 26%, 17%)')
			: (body.style.backgroundColor = 'hsl(0, 0%, 90%)');
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
	};

	//slide card back out when clicked
	closeCard = () => {
		this.setState({
			openAndClose: true,
		});
	};

	//switch dark mode
	handleDarkMode = () => {
		if (this.state.darkMode === true) {
			return this.setState({
				darkMode: false,
			});
		} else {
			this.setState({
				darkMode: true,
			});
		}
	};

	render() {
		return (
			<div className="App">
				<Header
					handleDarkMode={this.handleDarkMode}
					backgroundColor={this.state.darkMode === true ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'}
					color={this.state.darkMode === true ? 'white' : 'black'}
					darkOrLight={this.state.darkMode === true ? 'Light Mode' : 'Dark Mode'}
				/>
				<SearchBar
					data={this.filterItems()}
					search={this.handleSearchInput}
					options={this.state.options}
					handleChange={this.changeRegion}
					backgroundColor={this.state.darkMode === true ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'}
					color={this.state.darkMode === true ? 'white' : 'black'}
				/>
				<Card
					items={this.filterItems()}
					openCard={this.openCard}
					backgroundColor={this.state.darkMode === true ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'}
					color={this.state.darkMode === true ? 'white' : 'black'}
				/>
				<SideCard
					closeCard={this.closeCard}
					data={this.state.cardData}
					openAndClose={this.state.openAndClose === true ? '-2000px' : '0px'}
					backgroundColor={this.state.darkMode === true ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 90%)'}
					color={this.state.darkMode === true ? 'white' : 'black'}
					backButtonColor={this.state.darkMode === true ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'}
				/>
			</div>
		);
	}
}

export default App;
