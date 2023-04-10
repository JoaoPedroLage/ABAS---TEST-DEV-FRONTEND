import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Link from 'next/link';

export default function HeaderMainPage() {

  return (
    <Link href='/list-screen'>
      <BottomNavigation
        sx={{ width: 500, height: 200 }}
        showLabels={true}
      >
        <BottomNavigationAction
          label='Cadastrar uma nova conta bancária'
          icon={<AccountBalanceIcon />}
        />
      </BottomNavigation>
    </Link>
  );
}