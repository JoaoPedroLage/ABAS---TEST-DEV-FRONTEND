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

    const userStorage = JSON.parse(localStorage.getItem('userAccounts') || '[]');
    if (userStorage) {
      if (userStorage.length === 0) {
        setUserHasAccounts(false);
      } else {
        setUserHasAccounts(true);
        setUserAccounts(userStorage);
      }
    }
    else {
      setUserHasAccounts(false);
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
        !userHasAccounts || userAccounts.length === 0 ?
            <div className="not-found">
              <div className="not-found-text">
                <span>Usuário não tem contas cadastradas</span>
              </div>
            </div>
          :
          <InfiniteScroll
            className='cards-main-page'
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
