import { User } from '../types/users'

export const mockData: User[] = [
  {
    id: '1',
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    phone: '123-456-7890',
    status: 'active'
  },
  {
    id: '2',
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@example.com',
    phone: '234-567-8901',
    status: 'not_active'
  },
  {
    id: '4',
    name: 'Bob Brown',
    username: 'bobbrown',
    email: 'bob@example.com',
    phone: '456-789-0123'
  }
]
