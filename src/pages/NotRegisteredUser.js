import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <RegisterMutation>
        {
          (register, { data = {}, loading, error }) => {
            const handleSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                console.log(data)
                const { signup } = data
                activateAuth(signup)
              })
            }
            const errorMsg = error && 'El usuario ya existe o hay algún problema'
            return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmint={handleSubmit} />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data = {}, loading, error }) => {
            const handleSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                console.log(data)
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'El usuario no existe o la contraseña es incorrecta'
            return <UserForm disabled={loading} error={errorMsg} title='Inicio de seción' onSubmint={handleSubmit} />
          }
        }
      </LoginMutation>
    </>
  )
}
