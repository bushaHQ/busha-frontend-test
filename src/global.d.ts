interface AcountType {
  id: string;
  currency: string;
  hold: string;
  pending_balance: string;
  balance: string;
  name: string;
  type: string;
  deposit: boolean;
  payout: boolean;
  imgURL: string;
}

interface WalletType {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
}
interface AccountHookType {
  isLoading: boolean;
  accounts: AcountType[];
  err: boolean;
  getAccounts: () => Promise<void>;
  addAccount: (data: any, cb: any) => Promise<void>;
  setAccounts: React.Dispatch<React.SetStateAction<AcountType[]>>;
  setErr: React.Dispatch<React.SetStateAction<boolean>>;
}
interface WalletHookType {
  isLoading: boolean;
  wallets: WalletType[];
  err: boolean;
  getWallets: () => Promise<void>;
}

interface WalletModalType {
  closeNav: (bool: boolean) => void;
  setAccounts: any;
  accounts: AcountType[];
}

interface sideLinkType {
  link: string;
  name: string;
}