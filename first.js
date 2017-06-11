
  // var MyHelloTag = React.createClass({
  // 		render: function() {
  // 			return(<div> <h1>Hello Tag</h1> </div>);
  // 		}
  // });

  var MyChildTag = () => {
  	return(<div> Child Tag</div>);
  };


  var MyHelloTag = () => {
  	return(<div> <h1>Hello Tag1</h1> <MyChildTag/> </div>);
  };

  ReactDOM.render(
    <MyHelloTag/>,
    document.getElementById('root')
  );
