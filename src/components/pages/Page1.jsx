import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default class Page1 extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <title>page1</title>
          <meta
            name='description'
            content="Amid AOC pressure, Pelosi suggests impeachment back on the table to
          address 'grave new chapter of lawlessness'Amid AOC pressure"
          />
        </Helmet>
        <Link to={'/page2'}>Page 2</Link>
        <h1>This is page1</h1>
        <p>
          Amid AOC pressure, Pelosi suggests impeachment back on the table to
          address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi
          suggests impeachment back on the table to address 'grave new chapter
          of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on
          the table to address 'grave new chapter of lawlessness'Amid AOC
          pressure, Pelosi suggests impeachment back on the table to address
          'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests
          impeachment back on the table to address 'grave new chapter of
          lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
          table to address 'grave new chapter of lawlessness'Amid AOC pressure,
          Pelosi suggests impeachment back on the table to address 'grave new
          chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment
          back on the table to address 'grave new chapter of lawlessness'Amid
          AOC pressure, Pelosi suggests impeachment back on the table to address
          'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests
          impeachment back on the table to address 'grave new chapter of
          lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
          table to address 'grave new chapter of lawlessness'Amid AOC pressure,
          Pelosi suggests impeachment back on the table to address 'grave new
          chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment
          back on the table to address 'grave new chapter of lawlessness'
        </p>
      </div>
    )
  }
}
