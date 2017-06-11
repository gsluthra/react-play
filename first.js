
var MyLabelControl = (props) => {
	return(
		<h2 style={{fontSize: "250px"}}> 
			{props.value} 
		</h2>
		);
};


var MyHelloTag = () => {
	let time = new Date().toLocaleTimeString();
	return(
		<div> 
			<h1>Hello Tag1</h1> 
			<MyLabelControl value={time}/> 
		</div>
		);
};
 
function tick() {
	  ReactDOM.render(
	    <MyHelloTag/>,
	    document.getElementById('root')
	  );
}
  
setInterval(tick, 1000); //Note how in inspect element only the time element of the DOM is updated.
