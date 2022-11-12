import styled from 'styled-components'

export const Container = styled.header`
  grid-area: content;
  max-width: 1080px;
  margin: auto;
  height: 116px;
  padding: 32px 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Menu = styled.nav`
  > img {
    height: 30px;
    width: 176px;
   filter: invert(26%) sepia(93%) saturate(1469%) hue-rotate(341deg) brightness(114%) contrast(84%);
  }
  display: flex;
  flex-direction: row;
  gap: 60px;

  > button {
    background: none;
    border: none;

    font-size: 16px;
    font-weight: bold;

    display: flex;
    gap: 20px;
    align-items: center;

    svg {
      height: 30px;
      width: 30px;
    }
  }
`
