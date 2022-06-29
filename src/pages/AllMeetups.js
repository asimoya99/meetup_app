import React, { useState, useEffect } from 'react'
import MeetupList from '../components/meetup/MeetupList'

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    fetch('https://meetup-app-ffa26-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const meetups = []

        // use spread operator to copy the keys
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }
          meetups.push(meetup)
        }
        setIsLoading(false)
        setLoadedMeetups(meetups)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>AllMeetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetups
