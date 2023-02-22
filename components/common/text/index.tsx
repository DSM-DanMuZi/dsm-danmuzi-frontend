import styled from "@emotion/styled";

interface PropsType {
  type?: string;
  name?: string;
  placeholder: string;
  value?: string;
  error?: boolean;
  errorMsg?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  type,
  name,
  placeholder,
  value,
  error,
  errorMsg,
  onChange,
}: PropsType) => {
  return (
    <_Wrapper>
      <_InputWrapper value={value}>
        <_Input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </_InputWrapper>
      {error && <_ErrorText>{errorMsg}</_ErrorText>}
    </_Wrapper>
  );
};

export default TextField;

const _Wrapper = styled.div`
  width: 640px;
  height: 64px;
`;

const _InputWrapper = styled.div<{ value?: string }>`
  width: 640px;
  height: 64px;
  padding: 16px 21px;
  box-sizing: border-box;
  border: 1px solid
    ${({ theme, value }) => (value ? theme.color.main01 : theme.color.gray300)};
  border-radius: 10px;
  display: flex;
  align-items: center;
  :focus-within {
    border: 1px solid ${({ theme }) => theme.color.main01};
  }
`;

const _Input = styled.input`
  width: 100%;
  height: 32px;
  color: ${({ theme }) => theme.color.gray900};
  ${({ theme }) => theme.font.body2};
  line-height: 32px;
  ::placeholder {
    color: ${({ theme }) => theme.color.gray300};
    ${({ theme }) => theme.font.body2};
    line-height: 32px;
  }
`;

const _ErrorText = styled.span`
  ${({ theme }) => theme.font.body6};
  color: ${({ theme }) => theme.color.error};
  line-height: 22px;
`;
