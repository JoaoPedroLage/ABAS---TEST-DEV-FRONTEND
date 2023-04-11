import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import EditSVG from './bootstrapSVGs/EditSVG';
import DeleteSVG from './bootstrapSVGs/DeleteSVG';

export default function BankDataCard({ bank }: any): JSX.Element {
  const {
    setUserAccounts
  } = useContext(AppContext);

  const [newBankAgency, setNewBankAgency] = useState(bank.bankAgency);
  const [newBankAccount, setNewBankAccount] = useState(bank.bankAccount);
  const [isEditingAgency, setIsEditingAgency] = useState(false);
  const [isEditingAccount, setIsEditingAccount] = useState(false);

  const userAccountsData = JSON.parse(localStorage.getItem('userAccounts') || '[]');

  type Account = {
    bankAccount: string;
    bankCode: string;
  };

  const removeAccount = (): void => {
    const positionFound = userAccountsData.findIndex(
      (account: Account) => account.bankAccount === bank.bankAccount && account.bankCode === bank.bankCode
    );

    if (positionFound !== -1) {
      let filteredArray: Account[] = [];

      if (positionFound === 0) {

        filteredArray = userAccountsData.slice(1);
      } else {
        filteredArray = [
          ...userAccountsData.slice(0, positionFound),
          ...userAccountsData.slice(positionFound + 1)
        ];
      }
      
      localStorage.setItem('userAccounts', JSON.stringify(filteredArray));
      setUserAccounts(filteredArray);
    }
  };

  function editAgency() {
    const userAccountData = userAccountsData.filter((account: any) => {
      if (account.bankAgency === bank.bankAgency) {
        return account['bankAgency'] = newBankAgency;
      }
      return account;
    });

    localStorage.setItem('userAccounts', JSON.stringify(userAccountData));
    setUserAccounts(userAccountData);
    setIsEditingAgency(false);
  }

  function editAccount() {
    const userAccountData = userAccountsData.filter((account: any) => {
      if (account.bankAccount === bank.bankAccount) {
        return account['bankAccount'] = newBankAccount;
      }
      return account;
    });

    localStorage.setItem('userAccounts', JSON.stringify(userAccountData));
    setUserAccounts(userAccountData);
    setIsEditingAccount(false);
  }

  return (
    <>
      {
        <>
          <div
            className='card-main-page'
          >
            <br />
            <span>
              Banco: {bank.bankName}
            </span>
            <br />
            {
              bank.bankCode &&
              <span>
                Código: {bank.bankCode}
              </span>
            }
            <br />
            <div
              className='input-button'
            >
              {isEditingAgency ?
                <>
                  <span>
                    Agência: &nbsp;
                  </span>
                  <input
                    value={newBankAgency}
                    onChange={(e) => setNewBankAgency(e.target.value)}
                  >
                  </input>
                </>
                :
                <span>
                  Agência: {newBankAgency}
                </span>
              }
              {isEditingAgency ?
                <button
                  className='edit-button'
                  type='button'
                  onClick={() => editAgency()}
                >
                  OK
                </button>
                :
                <button
                  className='edit-button'
                  type='button'
                  onClick={() => setIsEditingAgency(true)}
                >
                  <EditSVG />
                </button>
              }
            </div>
            <br />
            <div
              className='input-button'
            >
              {isEditingAccount ?
                <>
                  <span>
                    Conta: &nbsp;
                  </span>
                  <input
                    value={newBankAccount}
                    onChange={(e) => setNewBankAccount(e.target.value)}
                  >
                  </input>
                </>
                :
                <span>
                  Conta: {newBankAccount}
                </span>
              }
              {isEditingAccount ?
                <button
                  className='edit-button'
                  type='button'
                  onClick={() => editAccount()}
                >
                  OK
                </button>
                :
                <button
                  className='edit-button'
                  type='button'
                  onClick={() => setIsEditingAccount(true)}
                >
                  <EditSVG />
                </button>
              }
            </div>
            <button
              className='delete-button'
              type='button'
              onClick={() => removeAccount()}
            >
              <DeleteSVG />
            </button>
          </div>
        </>
      }
    </>
  )
}
