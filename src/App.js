import React from 'react'
import styled from 'styled-components'
import victims from './victims.json'
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
  display: flex;
  flex-direction: column;
`

const RotateWrapper = styled.div`
  z-index: 1;
  @media (orientation: portrait) {
    transform: rotate(90deg) translateX(2vh);
  }
`

const JumboWrapper = styled.div`
  & > ${JumboText} {
    font-size: ${props => 100 / props.lines || 25}vh;
    user-select: none;
    pointer-events: none;
    @media (orientation: portrait) {
      font-size: ${props => 100 / props.lines || 25}vw;
    }
  }
  
`
const Name = styled.span`
  font-size: ${props => props.fontSize}px;
  color: lightgray;
  & a {
    color: lightgray;
  }
`

const BGWrapper = styled.div`
  font-family: monospace;
  z-index: 0;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0; left:0; right:0;bottom: 0;
  box-sizing: border-box;
  justify-content: space-between;
`

const ExtLink = ({ children, ...props }) => {
  return (
    <a
      {...props}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}

const NamesBG = (props) => {
  const chars = victims.reduce((acc, cur) => acc + cur.length, 0)
  const { innerWidth, innerHeight } = window
  const fontSize = Math.sqrt((innerWidth * innerHeight) / chars)
  return (
    <BGWrapper>
      {victims.map((name) => {
        return <Name fontSize={fontSize} key={name}>{name}</Name>
      })}
      <Name fontSize={fontSize}>
        <ExtLink href='https://mappingpoliceviolence.org/'>and</ExtLink>
      </Name>
      <Name fontSize={fontSize}>
        <ExtLink href='https://twitter.com/samswey/status/1259254114606886913'>countless</ExtLink>
      </Name>
      <Name fontSize={fontSize}>
        <ExtLink href='https://apps.npr.org/documents/document.html?id=6933593-NPR-CodeSwitch-Saytheirnameslistv3'>more</ExtLink>
      </Name>
      <Name fontSize={fontSize}>
        <ExtLink href='https://ebwiki.org/'>lives</ExtLink>
      </Name>
    </BGWrapper>
  )
}

function App () {
  return (
    <AppWrapper>
      <NamesBG />
      <RotateWrapper>
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
      </RotateWrapper>
    </AppWrapper>
  )
}

export default App
