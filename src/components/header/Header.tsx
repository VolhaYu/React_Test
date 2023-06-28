import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.scss';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

function Header() {
  const location = useLocation();

  function showLocation() {
    let pageName = 'NOT FOUND';
    if (location.pathname.split('/')[1] === '') {
      pageName = 'PRODUCT LIST PAGE';
    }
    if (location.pathname.split('/')[1] === 'form') {
      pageName = 'PRODUCT PAGE';
    }
    return pageName;
  }

  return (
    <AppBar position="static" style={{ background: '#FFCC26' }}>
      <Container maxWidth="xl">
        <Toolbar variant="regular" className="toolbar">
          <Typography variant="h4" color="textPrimary">
            {showLocation()}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
