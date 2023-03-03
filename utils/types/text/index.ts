export interface TextFieldType {
  type?: "text" | "password";
  name?: string;
  placeholder: string;
  value?: string;
  error?: boolean;
  errorMsg?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
