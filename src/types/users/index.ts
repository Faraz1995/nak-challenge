export type Status = 'active' | 'not_active' | null | undefined

export interface User {
  id: string
  name: string
  username: string
  email: string
  phone: string
  status?: Status
}
