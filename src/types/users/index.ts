export type status = 'Active' | 'Not Active' | null | undefined

export interface User {
  id: string
  name: string
  username: string
  email: string
  phone: string
  status?: status
}
