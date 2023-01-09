// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 120px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    width: 48%;
    margin-left: 5px;
  }
`

export const DirectionButton = styled.button`
  width: 100%;
  color: ${props => (props.isActive ? '#334155' : ' #1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-bottom: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
`
