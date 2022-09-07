import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid gray;
  padding: 4px;
  font-size: 1.2rem;

  :focus {
    border-bottom-color: blue;
  }
`

export const Label = styled.div`
  font-size: 1.2rem;
  color: gray;
  margin-bottom: 5px;
`