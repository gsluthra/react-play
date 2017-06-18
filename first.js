

//Written using a function
var MyActionHandler = () => {

    //Function to handle the click event
	const handleClick = (e) => {
    	e.preventDefault();
    	alert('The link was clicked.');
    };

	return (
		<a href="#" onClick={handleClick}>Click Me</a>
	);
};

//Written using a class. Note the this.handleClick call
class MyActionHandlerClass extends React.Component {

    
	handleClick(e) {
    	e.preventDefault();
    	console.log('The link CLICK ME HERE was clicked.');
    }

    render() {
		return (
			<a href="#" onClick={this.handleClick}>Click Me Here</a>
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
		</div>
		);
};
 

ReactDOM.render(
	<MyHelloTag/>,
	document.getElementById('root')
);
