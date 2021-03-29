import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import { Link } from 'react-router-dom';

const _Header = ({ removeLogin, history }) => {
  return (
    <Header aria-label="Hello">
      <SkipToContent />
      <HeaderName element={Link} to="/" prefix="Xtress">
        Twins
      </HeaderName>
      <HeaderNavigation aria-label="Twins">
        <HeaderMenuItem element={Link} to="/Login">
          Repositories
        </HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Notifications">
          <Notification20 />
        </HeaderGlobalAction>
        {removeLogin ? null : (
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="User Avatar"
              onClick={() => {
                history.push('/login');
              }}>
              <UserAvatar20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        )}
        <HeaderGlobalAction aria-label="App Switcher">
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default _Header;
