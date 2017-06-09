
  var MyHelloTag = React.createClass({
  		render: function() {
  			return(<div> <h1>Hello Tag</h1> </div>);
  		}
  });

  var element = React.createElement(MyHelloTag, {});


  ReactDOM.render(
    element,
    document.getElementById('root')
  );
