import React from 'react'
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Chat() {
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#Room-name</strong>
            </h4>
            <StarBorderIcon />
          </HeaderLeft>

          <HeaderRight>
            <p>
              <HelpOutlineIcon /> Details
            </p>
          </HeaderRight>

        </Header>
      </>
    </ChatContainer>
  )
}

export default Chat;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4{
    display: flex;
    text-transform: lowercase;
  }

  > h4 > .MuiSvgIcon-root{
    margin-left: 10px;
    font-size: 10px;
    margin-right: 10px;
  }
`;

const HeaderRight = styled.div`
  >p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon{
    margin-right: 5px !important;
    font-size: 16px;
  }
  
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;