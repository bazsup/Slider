import React, { Component } from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
  width: ${props => props.width || '500px'};
  position: relative;
  min-height: ${props => props.height || '200px'};
  margin-bottom: 15px;
  overflow-x: hidden;

  @media (max-width: 576px) {
    width: 100%;
  }
`

const GroupButton = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  button {
    outline: none;
    padding: 10px;
    height: 100%;
    max-height: 90%;
    transition: all 0.3s;
    background: rgba(0,0,0,0.2);
    border: 0;
    z-index: 1;
    cursor: pointer;
    
    &:hover {
      background: rgba(0,0,0,0.4);

      span {
        border-color: orange;
      }
    }

    span {
      border: solid #fff;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
    }
  }
`

const PrevButton = styled.button`
  span {
    transform: rotate(135deg);
  }
`

const NextButton = styled.button`
  span {
    transform: rotate(-45deg);
  }
`

const ControlBar = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`

const range = '13px'

const ControlItem = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  display: inline-block;
  min-height: ${range};
  max-height: ${range};
  min-width: ${range};
  max-width: ${range};
  margin: 0 8px;
  border-radius: 50%;
  transition: all 0.2s;
  background: ${props => props.active ? 'orange' : 'lightgray'};
`

const SliderItem = styled.img`
  width: 100%;
  max-height: 100%;
`

const Link = styled.a`
  left:${props => props.left * -100}%;
  width: 100%;
  height: 90%;
  max-height: 90%;
  position: absolute;
  z-index: 1;
  transition: left .3s;
`

export default class Slider extends Component {

  state = {
    active: 0,
    list: [],
    start: 0,
    end: 0
  }

  componentWillMount = () => {
    this.setState({
      list: this.props.list
    })
  }

  componentDidMount = () => {
    const { interval } = this.props
    if (interval) {
      try {
        setInterval(() => {
          this.next()
        }, +interval)
      } catch (err) {
        /* ignore error */
      }
    }
  }

  prev = () => {
    let position = this.state.active - 1
    this.setState(prevState => ({
      active: position < 0 ? prevState.list.length -1 : position
    }))
  }

  next = () => {
    this.setState(prevState => ({ active: (prevState.active + 1) % prevState.list.length }))
  }

  setPosition = (position) => {
    this.setState({ active: position })
  }

  touchStart = (e) => {
    this.setState({start: e.changedTouches[0].screenX})
  }

  touchEnd = (e) => {
    this.setState({end: e.changedTouches[0].screenX})
    this.handleGesture()
  }

  handleGesture = () => {
    const { start, end }= this.state
    console.log(start, end)
    if (start > end && start - end > 50) {
      this.next()
    } else if(end > start && end - start > 50) {
      this.prev()
    }
  }

   render() {
    const { list, active } = this.state
    return (
      <SliderContainer
        onTouchStart={this.touchStart}
        onTouchEnd={this.touchEnd}
        height={this.props.height}
        width={this.props.width}
      >
        {
          list.map((data, key) => (
            <Link 
              key={key}
              href={data.link}
              target={this.props.target}
              title={this.props.title}
              left={active - key}
              active={active === key}
            >
              <SliderItem src={data.img} alt={data.alt} />
            </Link>
          ))
        }
        <GroupButton>
          <PrevButton
            onClick={this.prev}
          >
            <span />
          </PrevButton>
          <NextButton
            onClick={this.next}
          >
            <span />
          </NextButton>
        </GroupButton>
        <ControlBar>
          {
            list.map((_, key) => (
              <ControlItem
                key={key}
                active={active === key}
                onClick={() => this.setPosition(key)}
              />
            ))
          }
        </ControlBar>
      </SliderContainer>
    )
   }
}