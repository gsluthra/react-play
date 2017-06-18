
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
			(prevState) => ({isToggleOn: !prevState.isToggleOn})
		);
	}


	render() {
		return (
			<button onClick={this.handleToggleClick} >
				{this.state.isToggleOn ? 'State: ON' : 'State: OFF'}
			</button>
			);
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
			<MyToggle/>
		</div>
		);
};
 

ReactDOM.render(
	<MyHelloTag/>,
	document.getElementById('root')
);
