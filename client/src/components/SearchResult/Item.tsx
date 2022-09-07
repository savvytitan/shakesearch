import React, { CSSProperties, HTMLAttributes } from 'react'
import { ItemContainer, Text, Query } from './styles'

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  query: string;
  style?: CSSProperties;
}

const Item: React.FC<ItemProps> = ({ text, query, style }) => {
  const firstIndex = text.toLowerCase().indexOf(query.toLowerCase());
  const matched = text.slice(firstIndex, firstIndex + query.length);

  return (
    <ItemContainer style={style}>
      <Text>{text.slice(0, firstIndex)}<Query>{matched}</Query>{text.slice(firstIndex + query.length)}</Text>
    </ItemContainer>
  )
}

export default Item