export interface ButtonProps {
  title?: string;
  leftTitle?: string;
  leftContent?: BankAccountProps[];
  rightTitle?: string;
  rightContent?: BankAccountProps[];
  width?: string;
}

export interface BankAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
}