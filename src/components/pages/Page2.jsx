import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default class Page2 extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <title>page2</title>
          <meta
            name='description'
            content='This is page2This is page2This is page2This is page2This is page2This
          is page2This is page2This'
          />
        </Helmet>
        <Link to={'/'}>back</Link>
        <h1>This is page2</h1>
        <p>
          This is page2This is page2This is page2This is page2This is page2This
          is page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2This is page2This is page2This is
          page2This is page2This is page2
        </p>
      </div>
    )
  }
}
