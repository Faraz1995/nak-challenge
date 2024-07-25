type status = 'Active' | 'Not Active' | null | undefined

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  status?: status
}
