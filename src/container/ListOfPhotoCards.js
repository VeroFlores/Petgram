
import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCard/index'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = withPhotos(categoryId)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ListOfPhotoCardsComponent data={data} />
  )
}

