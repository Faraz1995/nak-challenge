import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { css } from '@emotion/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useParams } from 'react-router-dom'
import styles from './home.module.css'
import TextInput from '../components/TextInput'
import { userSchema } from '../types/userSchema'
import Button from '../components/Button'
import { mockData } from '../assets/mockData'

type status = 'Active' | 'Not Active' | null | undefined

const options = [
  { value: 'Active', label: 'active' },
  { value: 'Not Active', label: 'not active' }
]

const labelStyle = css`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

interface IUserFormInputs {
  name: string
  userName: string
  email: string
  phone: string
  status?: status
}

const Item = () => {
  const params = useParams()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid }
  } = useForm<IUserFormInputs>({
    resolver: yupResolver(userSchema),
    mode: 'onChange'
  })

  useEffect(() => {
    const editedItem = mockData.find(
      (item) => item.id.toString() === params.id?.toString()
    )

    console.log(editedItem)

    if (editedItem) {
      setValue('name', editedItem.name)
      setValue('userName', editedItem.username)
      setValue('email', editedItem.email)
      setValue('phone', editedItem.phone)
      setValue('status', editedItem.status)
    }
  }, [params.id, setValue])

  const onSubmit: SubmitHandler<IUserFormInputs> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <p className={styles.title}>
        <span className={styles.listTitle}>{params.id ? 'Edit' : 'Create'} </span>Item
      </p>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsContainer}>
            <div className={styles.row}>
              <TextInput
                name={'name'}
                label='Name'
                required={true}
                register={register('name')}
                error={errors.name}
              />
              <TextInput
                name={'username'}
                label='Username'
                required={true}
                register={register('userName')}
                error={errors.userName}
              />

              <TextInput
                name={'email'}
                label='Email'
                required={true}
                register={register('email')}
                error={errors.email}
              />
            </div>
            <div className={styles.divider} />
            <div className={styles.row}>
              <TextInput
                label='Phone'
                name='phone'
                required
                register={register('phone')}
                error={errors.phone}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.selectContainer}>
                <label css={labelStyle} htmlFor='status'>
                  Status
                </label>
                <select className={styles.select} id='status' {...register('status')}>
                  <option value=''>Select...</option>
                  <option value='Active'>Active</option>
                  <option value='Not Active'>Not Active</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button text='submit' type='submit' disabled={!isValid} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Item
