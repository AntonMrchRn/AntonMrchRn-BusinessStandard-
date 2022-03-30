import { TextInputProps } from 'react-native';

export interface iCustomInput extends TextInputProps {
  placeholder: string;
  type: string;
  email?: string;
  password?: string;
  onChangeLogin?: (value: string) => void;
  onChangePassword?: (value: string) => void;
}
