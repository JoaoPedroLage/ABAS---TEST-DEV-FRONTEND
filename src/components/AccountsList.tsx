import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import InfiniteScroll from 'react-infinite-scroller';
import UserBankDataCard from './UserBankDataCard';

export default function AccountsList(): JSX.Element {
  const {
    userHasAccounts,
    setUserHasAccounts,
    userAccounts,
    setUserAccounts,
    numberOfScroll,
    setNumberOfScroll
  } = useContext(AppContext);

  function getAccountsList(): void {

    const userStorage = localStorage.getItem('userAccounts');
    if (!userStorage) {
      setUserHasAccounts(false);
    } else {
      setUserHasAccounts(true);
      setUserAccounts(JSON.parse(userStorage));
    }
  }

  function updateScrollBanksList() {
    const newScroll = userAccounts.slice(0, 10 * numberOfScroll);

    setUserAccounts(newScroll);
    setNumberOfScroll(numberOfScroll + 1);
  }

  useEffect(() => {
    getAccountsList();
  }, []);

  return (
    <>
      {
        !userHasAccounts ?
          <span>Usuário não tem contas cadastradas</span>
          :
          <InfiniteScroll
            className='Cards'
            loadMore={updateScrollBanksList}
            hasMore={true}
            threshold={50}
            initialLoad={false}
            style={{ width: '100%' }}
          >
            {
              userAccounts.map((bank: any, index: number) => (
                <UserBankDataCard
                  key={index}
                  bank={bank}
                />
              ))
            }
          </InfiniteScroll >
      }
    </>
  );
}