
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
		</div>
		);
};
 

ReactDOM.render(
	<MyHelloTag/>,
	document.getElementById('root')
);
