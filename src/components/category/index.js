import React from 'react'
import { Link, Image } from './styles'
// usar link para evitar recargar la página

export const Category = ({ id, cover, emoji }) => (
  <Link to={`/pet/${id}`}>
    <Image src={cover} />
    {emoji}
  </Link>
)
