import React, { Component } from 'react'
import frieza from "./frieza.png"
import handleClicks from "./handleClicks"


class Frieza extends Component {

  render() {
    const { backGround, clickHandler } = this.props;

    return (
      <div className='col'>
        <img onClick={clickHandler} src={frieza} className={`img-thumbnail ${backGround}`}/><br />
      </div>

    )
  }
}

export default handleClicks(Frieza)
