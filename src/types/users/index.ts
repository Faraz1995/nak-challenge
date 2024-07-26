export type Status = 'active' | 'not_active' | null | ''

export interface User {
  id: string
  name: string
  username: string
  email: string
  phone: string
  status?: Status
}
