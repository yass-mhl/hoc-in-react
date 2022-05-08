import React, { Component } from 'react'
import vegeta from "./vegeta.png"
import handleClicks from "./handleClicks"

class Vegeta extends Component {



  render() {
    const { backGround, clickHandler } = this.props;
    return (

      <div className={`col`}>
        <img onClick={clickHandler} src={vegeta} className={`img-thumbnail ${backGround}` }></img><br />
      </div>

    )
  }
}

export default handleClicks(Vegeta)
