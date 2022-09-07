import React, { InputHTMLAttributes, CSSProperties } from 'react'
import { Container, Input, Label } from './styles'

type BaseInputProps = Pick<InputHTMLAttributes<HTMLInputElement>, "onBlur" | "onChange" | "onFocus" | "value" | "placeholder">

interface QueryInputProps extends BaseInputProps {
  containerStyle?: CSSProperties,
  labelStyle?: CSSProperties,
  inputStyle?: CSSProperties
}

const QueryInput: React.FC<QueryInputProps> = ({ containerStyle, labelStyle, inputStyle, ...props }) => {
  return (
    <Container style={containerStyle}>
      <Label style={labelStyle}>Query:</Label>
      <Input style={inputStyle} {...props} />
    </Container>
  )
}

export default QueryInput