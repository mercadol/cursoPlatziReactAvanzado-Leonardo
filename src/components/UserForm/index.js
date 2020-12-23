/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Error, Form, Input, Title } from './styles'

export const UserForm = ({ error, diseabled, onSubmint, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmint({
      email: email.value,
      password: password.value
    })
  }
  return (
    <>
      <Title>{title}</Title>
      <Form diseabled={diseabled} onSubmint={handleSubmit}>
        <Input
          diseabled={diseabled}
          placeholder='Email'
          value={email.value}
          onChange={email.onChange}
        />
        <Input
          diseabled={diseabled}
          placeholder='Passord'
          type='password'
          value={password.value}
          onChange={password.onChange}
        />
        <Button diseabled={diseabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
