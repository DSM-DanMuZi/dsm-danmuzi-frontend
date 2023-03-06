export interface TextFieldType {
  text: string;
  type?: "text" | "password";
  name?: string;
  placeholder: string;
  value?: string;
  error?: boolean;
  errorMsg?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: number;
  height?: number;
}
