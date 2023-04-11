import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

export default function HeaderMainPage() {
  const useStyles = makeStyles({
    label: {
      height: 50,
      width: 200,
      paddingTop: 10,
      fontSize: '1rem',
    }
  });

  const classes = useStyles();

  return (
    <Link href='/list-screen'>
      <BottomNavigation
        className='navbar-button-background'
        sx={{ width: 500, height: 200 }}
        showLabels={true}
      >
        <BottomNavigationAction
          className='navbar-button'
          label='Cadastrar uma nova conta bancária'
          classes={{
            label: classes.label
          }}
          icon={<AccountBalanceIcon fontSize='large' />}
        />
      </BottomNavigation>
    </Link>
  );
}
