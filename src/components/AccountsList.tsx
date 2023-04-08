import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';

export default function AccountsList(): JSX.Element {
  const {
    userHasAccounts,
    setUserHasAccounts
  } = useContext(AppContext);

  function getAccountsList(): void {

    const userStorage = localStorage.getItem('userAccounts');
    if (!userStorage) {
      setUserHasAccounts(false);
    } else {
      setUserHasAccounts(true);
    }
  }

  useEffect(() => {
    getAccountsList();
  }, []);

  return (
    <>
      {
        userHasAccounts ?
          <span>Usuário tem contas cadastradas</span>
          :
          <span>Usuário não tem contas cadastradas</span>
      }
    </>
  );
}