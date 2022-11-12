import styled from 'styled-components'

export const Container = styled.footer`
  height: 200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3d4749;

  position: fixed;
  bottom: 0;
  width: 100%;

  > img {
    height: 30px;
    width: 176px;
    filter: invert(100%) sepia(0%) saturate(7487%) hue-rotate(213deg)
      brightness(100%) contrast(109%);
  }
`
