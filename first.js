
var MyTimer = () => {
	return(<div> It is {new Date().toLocaleTimeString()} </div>);
};


var MyHelloTag = () => {
	return(<div> <h1>Hello Tag1</h1> <MyTimer/> </div>);
};
 
function tick() {
	  ReactDOM.render(
	    <MyHelloTag/>,
	    document.getElementById('root')
	  );
}
  
setInterval(tick, 1000); //Note how in inspect element only the time element of the DOM is updated.
