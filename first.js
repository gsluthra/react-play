
  var MyHelloTag = React.createClass({
  		render: function() {
  			return(<div> <h1>Hello Tag</h1> </div>);
  		}
  });

  ReactDOM.render(
    <MyHelloTag/>,
    document.getElementById('root')
  );
