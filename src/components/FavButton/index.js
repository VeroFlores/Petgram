import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Button } from './styles'
import Proptypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? AiFillHeart : AiOutlineHeart
  return (
    <Button onClick={onClick}>
      <Icon size='32px' />{likes}likes!
    </Button>
  )
}
FavButton.propTypes = {
  liked: Proptypes.bool.isRequired,
  likes: Proptypes.number.isRequired,
  onClick: Proptypes.func.isRequired
}
