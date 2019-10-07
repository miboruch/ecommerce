import { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuContext } from '../../contexts/MenuContext';

const ScrollTop = ({ children, location: { pathname } }) => {
  const { setMenuState } = useContext(MenuContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuState(false);
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollTop);
