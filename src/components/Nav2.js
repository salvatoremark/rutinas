import React from 'react';

class Nav extends React.Component {
  constructor() {
    super();

    this.goToPage = this.goToPage.bind(this);
    this.setMenuItemActive = this.setMenuItemActive.bind(this);

    this.state = {
       nav: {
           info: false,
           stats: false,
           routines: false,
           new: false
       }
    }
  }

  componentWillMount() {
    //this.setMenuItemActive();
  }

  goToPage(e) {
    e.preventDefault();
    const page = e.target.dataset.page;
    this.setMenuItemActive(page);
    this.context.router.transitionTo(`/${page}`);
  }

  setMenuItemActive(item) {
    console.log("page: ", item);
    let nav = {...this.state.nav};
    console.log("nav: ", nav);
    nav[item] = true;
    console.log("nav[", item, "] = ", true);

    this.setState({ nav }, function(){
        console.log("state: ", this.state.nav);
    });
    
  }

  render() {
    return (
    	<div className="Nav">
    	  <div onClick={(e) => this.goToPage(e)} className={this.state.nav.info ? 'Nav-item active' : 'Nav-item'} data-page="info">Info</div>
    	  <div onClick={(e) => this.goToPage(e)} className={this.state.nav.stats ? 'Nav-item active' : 'Nav-item'} data-page="stats">Stats</div>
    	  <div onClick={(e) => this.goToPage(e)} className={this.state.nav.routines ? 'Nav-item active' : 'Nav-item'} data-page="routines">Routines</div>
    	  <div onClick={(e) => this.goToPage(e)} className={this.state.nav.new ? 'Nav-item active' : 'Nav-item'} data-page="new">+ New</div>
    	</div>
    )
  }
}

Nav.contextTypes = {
  router: React.PropTypes.object
}

export default Nav;
