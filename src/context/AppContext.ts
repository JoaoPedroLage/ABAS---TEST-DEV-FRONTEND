import { createContext, Context } from 'react';

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
  banksList: any;
  setBanksList: (banksList: any) => void;
  scrollBanksList: any;
  setScrollBanksList: (scrollBanksList: any) => void;
  numberOfScroll: number;
  setNumberOfScroll: (numberOfScroll: number) => void;
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
  banksList: [],
  setBanksList: () => { },
  scrollBanksList: [],
  setScrollBanksList: () => { },
  numberOfScroll: 1,
  setNumberOfScroll: () => { },
});

export default AppContext;