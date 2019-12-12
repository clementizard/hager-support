import React, { useState, useEffect, memo, useCallback } from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  Inner,
} from './Styles';
import { propTypes, defaultProps } from './Props';

import LayoutFull from '../LayoutFull';
import AppBar from './AppBar';
import InstallPanel from './InstallPanel';

const LayoutUser = ({ children }) => {
  // const router = useRouter();
  // const { id } = router.query;
  
  // const [drawerOpen, setDrawerOpen] = useState(Boolean(id));
  // const handleDrawerOpen = useCallback(state => () => setDrawerOpen(state), []);
  // useEffect(() => {
  //   setDrawerOpen(Boolean(id));
  // }, [id]);

  const [detailsOpen, setDetailsOpen] = useState(-1);
  const handleDetailsOpen = detailsId => () => {
    if (detailsOpen === detailsId) setDetailsOpen(-1);
    else setDetailsOpen(detailsId);
  };
  
  return (
    <Container
      // drawerOpen={drawerOpen}
      detailsOpen={detailsOpen !== -1}
    >
      <AppBar
        // drawerOpen={drawerOpen}
        // drawerDisabled={!Boolean(id)}
        // onOpenDrawer={handleDrawerOpen(true)}
        detailsOpen={detailsOpen}
        onOpenDetails={handleDetailsOpen}
      />
      {/*<InstallPanel open={drawerOpen} onClose={handleDrawerOpen(false)} />*/}
      <Inner>
        {children}
      </Inner>
    </Container>
  );
};
LayoutUser.getLayout = page => (
  <LayoutFull>{page}</LayoutFull>
);
LayoutUser.propTypes = propTypes;
LayoutUser.defaultProps = defaultProps;
LayoutUser.whyDidYouRender = true;

export default memo(LayoutUser);
