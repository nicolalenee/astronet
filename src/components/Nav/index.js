/** @jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import * as React from 'react';
import Icon from '../../assets/images/icon.png'

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-around
`;
const ListItem = styled.li`
  font-size: 12px;
  list-style: none;
  margin: 5px;
`
export default function Nav() {

  const [isLinkClicked, setLink] = React.useState(false);

  const handleClick = () => {
    setLink(!isLinkClicked);
  }
  const navElements=['Home', 'Services', 'Schedule a Service', 'Leave a Review'];

  return (
    <div>
      <NavWrap>
          <div className="nav-left">
            <img src={Icon} alt="header" width="200px" height="100px"/>
          </div>
          <div className="nav-right">
            <List>
             {navElements.map((element) => (
              <ListItem key={element}><a href={"#" + element.toLowerCase()}>{element}</a></ListItem>
             ))}
            </List>
          </div>
      </NavWrap>
    </div>
  )
}