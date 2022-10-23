import { createContext } from 'react'
import { IAccount } from './types'

const AccountContext = createContext<IAccount | null>(null)

export default AccountContext
