import React from 'react'
import { Article, Img, ImgWrapper } from './styles'
import { FavButton } from '../FavButton/index'
import { Link } from '@reach/router'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  console.log(liked)

  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          {/* favButton es el children, ToggleLikeMutation es un render prop */}
          <ToggleLikeMutation>
            {
            (toggleLike) => {
              const handleFavClick = () => {
                !liked && toggleLike({ variables: { input: { id } } })
                setLiked(!liked)
              }
              return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
            }
            }

          </ToggleLikeMutation>

        </>}

    </Article>
  )
}
