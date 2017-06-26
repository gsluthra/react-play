
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

		this.handleOnChangeValue = this.handleOnChangeValue.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		alert("Form has been submitted, with name: "+ this.state.nameOfPerson + " address: "+ this.state.address);
		e.preventDefault();

	}

	handleOnChangeValue(e) {
		const controlName = e.target.name;
		this.setState({[controlName]: e.target.value});
	}


	render() {
		const formView = 
			<form onSubmit={this.handleSubmit}>
				<fieldset>
					<legend> Enter details </legend>
					Name: 
					<br/>
					<input name="nameOfPerson" type="text" value = {this.state.nameOfPerson} onChange = {this.handleOnChangeValue} />
			
					<br/>
					Address: 
					<br/>
					<textarea name="address" value = {this.state.address} onChange = {this.handleOnChangeValue} />

					<br/>
					State:
					<br/>
					<select name="state" value = {this.state.state} onChange = {this.handleOnChangeValue}>
						<option value="1">Maharashtra</option>
						<option value="2">UP</option>
						<option value="3">Tamil Nadu</option>
					</select>
				
				<p/>
			
				<input type="submit" value = "SUBMIT" />
				</fieldset>

				<fieldset>
					<legend> DETAILS </legend>
					
					Name: {this.state.nameOfPerson} <br/>
					Address: {this.state.address} <br/>
					State: {this.state.state} <br/>
				</fieldset>
			

			</form>

		return (
			<div>
				{formView}
			</div>
			);
	}


}



class MyTemperatureEnteringComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const name = this.props.type;
		
		let control = 
			<form>
				<fieldset> 
					<legend> Enter temperature in {name} </legend>
					<input type="number" name={name} value={this.props.temperatureValue} onChange={this.props.onChangeFunction}/> 
				</fieldset>
			</form>;


		return ( <div> {control} </div>	);
	}

}


class MyTemperatureEnteringWidget extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			c_temp : 0
		};

		this.handleOnChangeValue = this.handleOnChangeValue.bind(this);

	}

	convertCtoF(tempInC){
		return (tempInC * 9 / 5) + 32.0;
	}

	convertFtoC(tempInF){
		return (tempInF - 32) * 5 / 9;	
	}

	handleOnChangeValue(e) {
		const controlName = e.target.name;
		const temperature = e.target.value;
		
		if(temperature === ''){
			this.setState({
				c_temp : ''
			});				
			return;
		}
		
		let celcius_temp = 0; //some arbitary value

		if(controlName === "celcius"){
			console.log('temperature entered in celcius control. recvd value = '+ temperature);
			celcius_temp = temperature;
		} else if (controlName === 'farenheit') {
			console.log('temperature entered in farenheit control. recvd value = '+ temperature);
			celcius_temp = this.convertFtoC(temperature);
		} else {
			console.log('WTF. Which control did this come from? Control Name: '+ controlName);
		}

		this.setState({
			c_temp : [celcius_temp]
		});				

	}

	render() {

        const celcius_temp = this.state.c_temp;
        const farenheit_temp = (celcius_temp === '')? '': this.convertCtoF(celcius_temp);

		return (
			<div>
				<fieldset>
					<legend> TEMP CONTROL </legend>
					<MyTemperatureEnteringComponent type='celcius' temperatureValue={celcius_temp} onChangeFunction={this.handleOnChangeValue}/>
					<MyTemperatureEnteringComponent type='farenheit' temperatureValue={farenheit_temp} onChangeFunction={this.handleOnChangeValue}/>

				</fieldset>
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
			<br/>
			<MyList numbers={["First","Second","Third","Fourth","Fifth"]}/>
			<br/>
			<MyCuteLittleForm/>
			<br/>
			<MyTemperatureEnteringWidget/>
		</div>
		);
};
 

ReactDOM.render(
	<MyHelloTag/>,
	document.getElementById('root')
);
