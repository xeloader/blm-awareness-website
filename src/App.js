import React from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
const JumboText = styled.p`
  text-transform: uppercase;
  text-align: left;
  margin: 0;
  line-height: 90%;
  font-family: 'Arial Black', Arial, Helvetica, sans-serif;
  font-weight: bolder;
`

const JumboWrapper = styled.div`
  & > ${JumboText} {
    font-size: ${props => 100 / props.lines || 25}vh;
  }
`

function App () {
  return (
    <div className='App'>
      <JumboWrapper lines={3}>
        <JumboText>black</JumboText>
        <JumboText>lives</JumboText>
        <JumboText>matter</JumboText>
      </JumboWrapper>
    </div>
  )
}

export default App
