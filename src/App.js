import React, { Component } from 'react'
import Slider from './components/slider'

const data = [
  {
    img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/103A6/production/_99707466_tinky2_bbc.jpg',
    link: 'https://en.wikipedia.org/wiki/Teletubbies'
  },
  {
    img: 'https://www0.dek-d.com/assets/homepage/images/2015/desktop/dd_logo.gif',
    link: 'https://www.dek-d.com/'
  },
  {
    img: 'http://bhojasolutions.com/wp-content/uploads/2017/05/reactjs.jpg',
    link: 'https://reactjs.org/'
  },
  {
    img: 'https://www.thairath.co.th/media/hBbh9CaTZ6uQMQNI4HGSJCCDZL3mm4BpGezogvEaLjGmGamIcWwQv1DGHKatYEzCdOzl2y2.jpg',
    link: 'https://www.thairath.co.th/novel/ChuamongTong/synopsis'
  }
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Slider</h2>
        <Slider
          list={data}
          target='_blank'
          height='300px'
        />
        <hr/>
        <h2>Slider with interval 3000ms</h2>
        <Slider
          list={data}
          target='_blank'
          interval='3000'
        />
      </div>
    )
  }
}

export default App;
