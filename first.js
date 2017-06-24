
class MyToggle extends React.Component {

	constructor(props) {
		super(props);
		this.handleToggleClick = this.handleToggleClick.bind(this);
		this.state = {
			isToggleOn: false
		};
	}

	handleToggleClick(e) {

		this.setState(
			function(prevState) {
				return ({isToggleOn: !prevState.isToggleOn})
			}
		);
	}


	render() {
		let button = null;

		if(this.props.hide) {
			return null; // Return null stops the component from being rendered. 
		}

		if(this.props.showAsButton){
			button = <button onClick={this.handleToggleClick} >
					     {this.state.isToggleOn ? 'State: ON' : 'State: OFF'}
				     </button>;

		} else {

			button = <a href="#" onClick={this.handleToggleClick} >
					     {this.state.isToggleOn ? 'State: ON' : 'State: OFF'}
				     </a>;

		}

		return (<div> {button} </div>);

	}
}


//MyActionHandler Written using a function
var MyActionHandler = () => {

    //Function to handle the click event
	const handleClick = (e) => {
    	e.preventDefault();
    	console.log('The link was clicked. THIS: '+ this);
    };

	return (
		<a href="#" onClick={handleClick}>Click Me</a>
	);
};

//Written using a class. Note the this.handleClick call
class MyActionHandlerClass extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick1 = this.handleClick1.bind(this); //To ensure this get bound with handleclick1
	}
    
	handleClick1(e) {
    	e.preventDefault();
    	console.log('The link CLICK ME HERE was clicked. THIS: '+ this);
    }

    render() {
		return (
			<a href="#" onClick={this.handleClick1}>Click Me Here</a>
		);    	
    }
}


class MyClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	render() {
		return (
			<div>
				<h1> CLOCK TIME: {this.state.date.toLocaleTimeString()} </h1>
			</div>
			);
	}

	componentDidMount() {
		setInterval (  
			() => {this.tick()}, 
			1000);
	}

	tick() {
	    this.setState (
		    {
	    	  date: new Date()
	    	}
    	);
  	}	

}


class MyList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const numbers = this.props.numbers;
		const listItems = numbers.map(
							(x) => 
								<li key={x}> Value: {x} </li>
						   );

		return (
			<ul>
				{listItems}
			</ul>
			);
	}

}


class MyCuteLittleForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			nameOfPerson: 'Enter name here',
			address: 'Enter address here',
			state: '2'
		};

		this.handleOnChangeNameOfPerson = this.handleOnChangeNameOfPerson.bind(this);
		this.handleOnChangeAddress = this.handleOnChangeAddress.bind(this);
		this.handleOnChangeState = this.handleOnChangeState.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		alert("Form has been submitted, with name: "+ this.state.nameOfPerson + " address: "+ this.state.address);
		e.preventDefault();

	}

	handleOnChangeNameOfPerson(e) {
		this.setState({nameOfPerson: e.target.value.toUpperCase()});
	}

	handleOnChangeAddress(e) {
		this.setState({address: e.target.value.toUpperCase()});
	}

	handleOnChangeState(e) {
		this.setState({state: e.target.value});
	}


	render() {
		const formView = 
			<form onSubmit={this.handleSubmit}>

				<label> 
					Name: 
					<input type="text" value = {this.state.nameOfPerson} onChange = {this.handleOnChangeNameOfPerson} />
				</label>
				<br/>
			
				<label> 
					Address: 
					<br/>
					<textarea value = {this.state.address} onChange = {this.handleOnChangeAddress} />
				</label>
				<br/>

				<label> 
					State: 
					<br/>
					<select value = {this.state.state} onChange = {this.handleOnChangeState}>
						<option value="1">Maharashtra</option>
						<option value="2">UP</option>
						<option value="3">Tamil Nadu</option>
					</select>
				</label>
				
				<p/>
			
				<h4>Name: {this.state.nameOfPerson}</h4>
				<h4>Address: {this.state.address}</h4>
				<h4>State: {this.state.state}</h4>
			
				<input type="submit" value = "SUBMIT" />

			</form>

		return (
			<div>
				<hr/>
				{formView}
				<hr/>
			</div>
			);
	}


}


var MyHelloTag = () => {
	return(
		<div> 
			<h1>Hello Clock</h1> 
			<MyClock/> 
			<MyActionHandler/>
			<br/>
			<MyActionHandlerClass/>
			<br/>
			<br/>
			<MyToggle showAsButton={true} hide={false}/>
			<MyList numbers={["First","Second","Third","Fourth","Fifth"]}/>
			<MyCuteLittleForm/>
		</div>
		);
};
 

ReactDOM.render(
	<MyHelloTag/>,
	document.getElementById('root')
);
