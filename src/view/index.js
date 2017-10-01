import React from 'react'

import { Menu, Card } from 'semantic-ui-react'

import Console from './console'
import Editor from './editor'
import Navbar from './navbar'
import Visualizer from './visualizer'

import './styles/index.scss'

export default class Interpreter extends React.Component {
  render() {
    return (
      <div className="main-view" >
        <div style={{height: '100%'}}>
          <div style={{float: 'left', width: '50%', height: '100%', paddingRight: '15px'}}>
            <div style={{height: '7%'}}> <Navbar /> </div>
            <div style={{height: '93%', paddingTop: '15px'}}> <Editor /> </div>
          </div>
          <div style={{float: 'right', width: '50%', height: '100%'}}>
            <div style={{height: '70%'}}>
              <Visualizer />
            </div>
            <div style={{height: '30%', paddingTop: '15px'}}>
              <Console />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
