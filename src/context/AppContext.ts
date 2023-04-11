import { createContext, Context } from 'react';

type selectedBankData = {
  ispb: string;
  name: string;
  code: string
  fullName: string;
};

type AppContextType = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  name: string;
  setName: (name: string) => void;
  token: string;
  setToken: (token: string) => void;
  invalidUser: boolean;
  setInvalidUser: (invalidUser: boolean) => void;
  userHasAccounts: boolean;
  setUserHasAccounts: (userHasAccounts: boolean) => void;
  userAccounts: [] | any;
  setUserAccounts: (userAccounts: [] | any) => void;
  banksList: any;
  setBanksList: (banksList: any) => void;
  scrollBanksList: any;
  setScrollBanksList: (scrollBanksList: any) => void;
  numberOfScroll: number;
  setNumberOfScroll: (numberOfScroll: number) => void;
  code: number;
  setCode: (code: number) => void;
  selectedBank: selectedBankData | any
  setSelectedBank: (selectedBank: selectedBankData) => void;
  bankAgency: string;
  setBankAgency: (bankAgency: string) => void;
  bankAccount: string;
  setBankAccount: (account: string) => void;
};

const AppContext: Context<AppContextType> = createContext<AppContextType>({
  email: '',
  setEmail: () => { },
  password: '',
  setPassword: () => { },
  visible: false,
  setVisible: () => { },
  name: '',
  setName: () => { },
  token: '',
  setToken: () => { },
  invalidUser: false,
  setInvalidUser: () => { },
  userHasAccounts: false,
  setUserHasAccounts: () => { },
  userAccounts: [],
  setUserAccounts: () => { },
  banksList: [],
  setBanksList: () => { },
  scrollBanksList: [],
  setScrollBanksList: () => { },
  numberOfScroll: 1,
  setNumberOfScroll: () => { },
  code: 0,
  setCode: () => { },
  selectedBank: {
    ispb: 0,
    name: '',
    code: 0,
    fullName: '',
  },
  setSelectedBank: () => { },
  bankAgency: '',
  setBankAgency: () => { },
  bankAccount: '',
  setBankAccount: () => { }
});

export default AppContext;