import React from 'react'
import { PhotoCardWithQuery } from '../container/photoCardWithQuery'
export const Detail = ({ detailId }) => {
  return (
    <PhotoCardWithQuery id={detailId} />
  )
}
