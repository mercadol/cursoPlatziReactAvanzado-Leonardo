import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { graphql } from 'graphql'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

/*
const withPhotos = graphql(gql`query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`)
const ListOfPhotoCardsComponent = ({data: {photos = []}}={}) =>{
    return(
        <ul>
            {photos.map(photo=> <PhotoCard key={photo.id} {...photo}
            />)}
        </ul>
    )
}


export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
*/
export const ListOfPhotoCards=()=>{
  return <Query query={gql`{
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }`}>
    {({loading, error, data})=>{
      if(loading) return <p>Loading...</p>
      if(error) return <p>Error!...</p>
      return(<ul>{data.photos.map(photo=>{
        return <PhotoCard key={photo.id} {...photo}/>
      })}</ul>)
    }}
  </Query>
}



