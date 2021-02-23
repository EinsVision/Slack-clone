import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
  return (
    
      <HeaderContainer>
        {/* Header left */}
        <HeaderLeft>
          <HeaderAvatar
            // TODO: Add onClick
          />
          <AccessTimeIcon />
        </HeaderLeft>
        {/* Header Search */}

        {/* Header right */}

      </HeaderContainer>
    
  )
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  padding: 10px 0;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover{
    opacity: 0.8;
  }
`;

