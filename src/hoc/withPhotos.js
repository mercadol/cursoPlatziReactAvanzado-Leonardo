import { gql } from 'apollo-boost'

export const getWithPhotos = gql`query ($categoryId:ID){
  photos(categoryId:$categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`
