import React from 'react'
import styled from 'styled-components'
const JumboText = styled.p`
  text-transform: uppercase;
  text-align: left;
  margin: 0;
  line-height: 90%;
  font-family: 'Arial Black', Arial, Helvetica, sans-serif;
  font-weight: bolder;
`

const HashA = styled.a`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  text-align: left;
  padding-left: 2vh;
  color: rgb(27, 149, 224);
  font-weight: bold;
`

const A = styled.a`
  font-family: courier, monospace;
  text-align: left;
  padding-left: 2vh;
  color: blue;
  font-weight: bold;
`

const AppWrapper = styled.div`
  @media (orientation: portrait) {
    transform: rotate(90deg) translateX(2vh);
  }
`

const JumboWrapper = styled.div`
  & > ${JumboText} {
    font-size: ${props => 100 / props.lines || 25}vh;
    @media (orientation: portrait) {
      font-size: ${props => 100 / props.lines || 25}vw;
    }
  }
  
`

function App () {
  return (
    <AppWrapper>
      <JumboWrapper lines={3}>
        <JumboText>black</JumboText>
        <JumboText>lives</JumboText>
        <JumboText>matter</JumboText>
      </JumboWrapper>
      <HashA
        target='_blank'
        rel='noopener noreferrer'
        href='https://twitter.com/hashtag/BlackLivesMatter'
      >#BlackLivesMatter
      </HashA>
      <A
        target='_blank'
        rel='noopener noreferrer'
        href='https://blacklivesmatters.carrd.co/'
      >
        how to help
      </A>
    </AppWrapper>
  )
}

export default App
