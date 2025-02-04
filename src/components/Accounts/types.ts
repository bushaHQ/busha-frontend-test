// components/Accounts/types.ts
export interface Account {
    id: string;
    imgURL: string;
    currency: string;
    name: string;
    balance: string;
  }
  
  export interface Wallet {
    currency: string;
    name: string;
  }
  
  export interface AccountsProps {
    showToast: (message: string, type: "success" | "error") => void;
  }
  