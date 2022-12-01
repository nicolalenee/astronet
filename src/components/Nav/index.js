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
  justify-content: space-around;
`;
const ListItem = styled.li`
  font-size: 12px;
  list-style: none;
  margin: 5px;
`
const Anchor = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #ECD4FF;
  &:hover {
    color: #FFD4E2;
  };
  
  transition: color .4s ease-in-out;
`
export default function Nav(props) {
  const {
    tabs =[],
    setCurrentTab,
    currentTab
  } = props;
  const [isLinkClicked, setLink] = React.useState(true);

  const handleClick = () => {
    setLink(!isLinkClicked);
  }
  

  return (
    <div>
      <NavWrap>
          <div className="nav-left">
            <img src={Icon} alt="header" width="200px" height="100px"/>
          </div>
          <div className="nav-right">
            <List>
             {tabs.map((tab) => (
              <ListItem key={tab}>
                <Anchor 
                  href={"#" + tab.toLowerCase()} 
                  onClick={() => setCurrentTab(tab)}>
                    {tab}
                </Anchor>
              </ListItem>
             ))}
            </List>
          </div>
      </NavWrap>
    </div>
  )
}