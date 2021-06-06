import { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    // Registered User
    const register = async (user) => {

    }

    // Login User
    const login = async ({email:identifier, password}) => {
        const res = await fetch(`${NEXT_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })

        const data = await res.json()

        if(res.ok) {

        } else {
            
        }
    }

    // Logout User
    const logout = async () => {
        
    }

    // Check if user is already logged in
    const checkUserLoggedIn = async (user) => {
        
    }

    return (
        <AuthContext.Provider value={{user, error, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext