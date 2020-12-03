/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmint }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form onSubmint={onSubmint}>
      <input
        placeholder='Email'
        value={email.value}
        onChange={email.onChange}
      />
      <input
        placeholder='Passord'
        type='password'
        value={password.value}
        onChange={password.onChange}
      />
      <button>Iniciar Sesión</button>
    </form>
  )
}
