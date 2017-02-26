const List = require('./List.jsx');
const React = require('react');

var ListManager = React.createClass({

  getInitialState:function() {
    return {items:[], newItemText:''};
  },

  handleSubmit:function (e) {
    e.preventDefault();
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({items: currentItems, newItemText:''});
  },

  onChange: function (e) {
    this.setState({newItemText: e.target.value});
  },

  render : function() {
    var divStyle = {
      marginTop : 10
    }

    var headingStyle = {

    }

    if(this.props.headingColor){
      headingStyle.background = this.props.headingColor;
    }
    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading" style={headingStyle}>
            <h3>
              {this.props.title}
            </h3>
          </div>
          <div className="row panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="col-sm-9">
                <input className="form-control" onChange={this.onChange} value={this.state.newItemText}/>
              </div>
              <div className="col-sm-2">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>  
          </div>
          <List items={this.state.items}></List>
    </div>
    </div>
    );
  }
});

module.exports = ListManager;
