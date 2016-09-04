import React from 'react';
import classnames from 'classnames';
import Logo from './image/inndevers-logo-black.png';

// Grid
class Grid extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var cells = [

      {id:5, icon:"fa-github", bg:"bg-red" },
      {id:6, icon:"fa-codepen", bg:"bg-purple" },
      {id:7, icon:"fa-git", bg:"bg-green" },
      {id:8, icon:"fa-stack-overflow", bg:"bg-cyan" },

      {id:1, icon:"fa-css3", bg:"bg-brown" },
      {id:2, icon:"fa-html5", bg:"bg-blue" },

      {id:3, icon:"fa-android", bg:"bg-orange" },
      {id:4, icon:"fa-apple", bg:"bg-yellow" },
      
      {id:9, icon:"fa-chrome", bg:"bg-orange" },
      {id:10, icon:"fa-edge", bg:"bg-blue" },
      {id:11, icon:"fa-firefox", bg:"bg-green" },
      {id:12, icon:"fa-safari", bg:"bg-purple" },
      
      {id:13, icon:"fa-trello", bg:"bg-red" },
      {id:14, icon:"fa-slack", bg:"bg-brown" },

      {id:15, icon:"fa-wordpress", bg:"bg-orange" },
      {id:16, icon:"fa-opencart", bg:"bg-yellow" },

      {id:17, icon:"fa-linux", bg:"bg-purple" },
      {id:18, icon:"fa-windows", bg:"bg-blue" },


      {id:19, icon:"fa-font-awesome", bg:"bg-green" },
      {id:20, icon:"fa-bitcoin", bg:"bg-orange" }
    ];

    var cellNodes = cells.map(function(cell) {
      return (  
        <Cell key={cell.id} icon={cell.icon} bg={cell.bg} />
      );
    });

    return (
      <div className="inn-grid">
        <CompanyCell />
        {cellNodes}
      </div>
    );
  
  }

}

// Cell
class Cell extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className={classnames('inn-cell', this.props.bg)}>
        <i className={classnames('fa', this.props.icon)}></i>
      </div>
    );
  }

}

class CompanyCell extends React.Component {
  
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="inn-cell">
        <img className="inn-logo" src={Logo} />
      </div>
    )
  }


}

export default Grid;