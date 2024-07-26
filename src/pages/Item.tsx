import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './home.module.css'
import TextInput from '../components/TextInput'
import { userSchema } from '../types/userSchema'
import Button from '../components/Button'
import { mockData } from '../assets/mockData'
import { useUserStore } from '../store/useStore'
import { Status } from '../types/users'
import Select from '../components/CustomSelect'

const options = [
  { value: '', label: 'Select...' },
  { value: 'active', label: 'Active' },
  { value: 'not_active', label: 'Not Active' }
]

interface IUserFormInputs {
  name: string
  username: string
  email: string
  phone: string
  status?: Status
}

const Item = () => {
  const params = useParams()
  const users = useUserStore((state) => state.users)
  const setUsers = useUserStore((state) => state.setUsers)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid }
  } = useForm<IUserFormInputs>({
    resolver: yupResolver(userSchema),
    mode: 'onChange'
  })

  useEffect(() => {
    const editedItem = mockData.find(
      (item) => item.id.toString() === params.id?.toString()
    )

    if (editedItem) {
      setValue('name', editedItem.name)
      setValue('username', editedItem.username)
      setValue('email', editedItem.email)
      setValue('phone', editedItem.phone)
      setValue('status', editedItem.status)
    }
  }, [params.id, setValue])

  const onSubmit: SubmitHandler<IUserFormInputs> = (data) => {
    if (params.id) {
      //edit mode
      const item = users.find((item) => item.id.toString() === params.id?.toString())
      if (item) {
        const editedItem = { id: params.id, ...data }
        const updatedArray = users.map((item) =>
          item.id === editedItem.id ? editedItem : item
        )
        setUsers(updatedArray)
      }
      navigate('/')
    } else {
      //create mode
      const newItem = {
        id: (Number(users[users?.length - 1].id) + 1).toString(),
        ...data
      }
      const newUsers = [...users, newItem]
      setUsers(newUsers)
      reset()
    }
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
                register={register('username')}
                error={errors.username}
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
              <Select
                label='Status'
                name='status'
                options={options}
                register={() => register('status')}
              />
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
