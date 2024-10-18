import React from 'react'
import { useForm } from 'react-hook-form'

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultvalues: {
      country: '',
      terms: false
    }
  })
  const country = watch('country')
  const submit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor='username'> enter your username</label>
          <input
            type='text'
            id='username'
            {...register('username', {
              required: 'introdusca username'
            })}
          />
          {errors.username && (
            <p style={{ color: 'red' }}>{errors.username.message}</p>
          )}
          <label htmlFor='email'>enter your mailid</label>
          <input
            type='email'
            id='email'
            {...register('email', {
              required: 'please enter your email id',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'the mail id should conatain @ sign'
              },
              minLength: {
                value: 6,
                message: 'shouldcontain minimum '
              }
            })}
            style={{ borderColor: errors.email ? 'red' : 'black' }}
          />
          {errors.email && (
            <p style={{ color: 'rebeccapurple' }}>{errors.email.message}</p>
          )}
          <label htmlFor='password'>enter your password</label>
          <input type='password' id='password' {...register('password')} />
          <label>please select your country</label>
          <select id='country' {...register('country')}>
            <option value='-'>-</option>
            <option value='spain'>spain</option>
            <option value='others'>others</option>
          </select>
          <br></br>
          {country === 'spain' ? (
            <>
              <input type='checkbox' id='terms' {...register('terms')} />
              <label htmlFor='checknox' id='terms'>
                {' '}
                accepto los condicciones
              </label>
            </>
          ) : null}

          <button>enviar</button>
        </form>
      </div>
    </div>
  )
}
