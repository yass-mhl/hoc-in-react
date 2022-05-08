import React, { Component } from 'react'
import goku from "./goku.webp"
import handleClicks from "./handleClicks"


class Goku extends Component {


  render() {
    const { backGround, clickHandler } = this.props;

    return (
      <div className='col'>
        <img onClick={clickHandler} src={goku} alt="image de Goku" className={`img-thumbnail ${backGround}` }/><br />
      </div>

    )
  }
}

export default handleClicks(Goku)
