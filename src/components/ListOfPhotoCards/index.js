import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { getWithPhotos } from '../../hoc/withPhotos'
import { Query } from 'react-apollo'

export const ListOfPhotoCards = ({ categoryId }) => {
  return (
    <Query query={getWithPhotos} variables={{ categoryId }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error!...</p>
        return (
          <ul>
            {data.photos.map((photo) => {
              return <PhotoCard key={photo.id} {...photo} />
            })}
          </ul>
        )
      }}
    </Query>
  )
}
