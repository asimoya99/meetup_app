import React, { useRef } from 'react'

import classes from '../styles/NewMeetupForm.module.css'
import Card from '../ui/Card'
const NewMeetupForm = (props) => {
  const titleInputRef = useRef()
  const addressInputRef = useRef()
  const imageInputRef = useRef()

  const descriptionInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredImage = imageInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const enteredAddress = addressInputRef.current.value
    const enteredTitle = titleInputRef.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    }
    props.onAddMeetup(meetupData)
  }
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Description</label>
          <textarea
            rows='5'
            required
            id='description'
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
