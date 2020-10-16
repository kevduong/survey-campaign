import { connect } from 'react-redux'
import React, { Component } from 'react'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding'      
      case false:
        return 'im logged out'
      default:
        return 'im logged in'
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">Survey Campaign</a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)