import React, { useContext } from 'react'
import classes from '../styles/MeetupItem.module.css'
import Card from '../ui/Card'

import FavoritesContext from '../../store/favorite-context'
const MeetupItem = (props) => {
  const favoritesContext = useContext(FavoritesContext)

  const itemsIsFavorite = favoritesContext.itemIsFavorite(props.id)
  function toggleFavoritesStatusHandler() {
    if (itemsIsFavorite) {
      favoritesContext.removeFavorite(props.id)
    } else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      })
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3> {props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemsIsFavorite ? 'Remove From Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
