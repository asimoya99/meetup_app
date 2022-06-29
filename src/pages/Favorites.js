import React, { useContext } from 'react'

import FavoritesContext from '../store/favorite-context'

import MeetupList from '../components/meetup/MeetupList'

const Favorites = () => {
  const favoriteContext = useContext(FavoritesContext)
  let context

  if (favoriteContext.totalFavorites === 0) {
    context = <p>You got no favorites. Start adding some</p>
  } else {
    context = <MeetupList meetups={favoriteContext.favorites} />
  }
  return <section>{context}</section>
}

export default Favorites
