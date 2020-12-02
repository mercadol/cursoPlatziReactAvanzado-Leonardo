import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from 'react-apollo'
import { GET_SINGLE_PHOTO } from '../hoc/singlePhoto'



const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!...</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
  {renderProp}
  </Query>
)

