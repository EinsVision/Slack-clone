import React from 'react'
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Hodny Coding Fam HQ</h2>
          <h3>
            <FiberManualRecordIcon/>
            Einsvision
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width:260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div`

`;

const SidebarInfo = styled.div`

`;