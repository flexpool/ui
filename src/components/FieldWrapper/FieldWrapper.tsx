import React from "react";
import styled from "styled-components";
// import { BaseFormFieldProps, getInputProps } from "./formikUtils";

export type BaseFormFieldProps = {
  placeholder?: string;
  label?: React.ReactNode;
  errorMessage?: React.ReactNode;
  desc?: React.ReactNode;
  name: string;
};

const SErrorWrapper = styled.div`
  color: var(--danger);
  margin-top: 0.5rem;
`;

const SLabel = styled.label`
  font-size: 0.875rem;
  text-transform: uppercase;
  color: ${(p) => p.theme.text.primary};
  font-weight: 700;
  display: inline-block;
  & + * {
    margin-top: 0.5rem;
  }
`;

const Wrapper = styled.div`
  *:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`;

const Desc = styled.div`
  margin-top: 0.5rem;
  line-height: 1.4;
`;

const FieldWrapper = <
  P extends BaseFormFieldProps & { children: React.ReactNode }
>(
  p: P
) => {
  const { label, children, errorMessage, desc, name } = p;
  return (
    <Wrapper>
      {label && <SLabel htmlFor={name}>{label}</SLabel>}
      {children}
      {desc && <Desc>{desc}</Desc>}
      {errorMessage && <SErrorWrapper>{errorMessage}</SErrorWrapper>}
    </Wrapper>
  );
};

export default FieldWrapper;
