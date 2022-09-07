import styled from 'styled-components'

export const Container = styled.div`
  max-height: calc(100vh - 50px);
  overflow-y: scroll;
`

export const ItemContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  width: 800px;
  min-height: 30px;
`

export const Text = styled.div`
  flex: 1;
  font-size: 1rem;
  color: gray;
`

export const Query = styled.b`
  font-size: 1rem;
  color: red;
  text-decoration: underline;
`