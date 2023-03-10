import React, { useState } from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../Dropdown.module.css';

function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="outlined" 
      onClick={handleOpenMenu} 
      sx={{ height: 40, width: 40, borderRadius: 2, border: 1, borderColor: 'grey.500' }}
      className={styles.dropdownButton}
      >
      
        <MenuIcon/>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        className={styles.dropdownButton}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Link href="#useState">useState</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link href="#useEffect">useEffect</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link href="#useRef">useRef</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link href="#useContext">useContext</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link href="#useReducer">useReducer</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link href="#useCallback">useCallback</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link href="#useMemo">useMemo</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link href="#useLayoutEffect">useLayoutEffect</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link href="#useDebugValue">useDebugValue</Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Dropdown;
