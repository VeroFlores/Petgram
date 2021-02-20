import React from 'react'
import { PhotoCardWithQuery } from '../container/photoCardWithQuery'
import { Layout } from '../components/Layout/index'
export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>

  )
}
