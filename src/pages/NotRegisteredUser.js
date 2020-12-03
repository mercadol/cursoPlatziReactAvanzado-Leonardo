import React from 'react'
import Context from '../Context'


export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) =>{
        return (
          <form onSubmint={activateAuth}>
            <button>Iniciar Sesión</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)