import React from 'react'

export const MainApp = () => {

   /*  const user = { 
        id: 1234,
        name: 'Fernando',
        email: 'usuario.usuario@gmail.com'
    } */
    const [user, setUser] = useState({
       
    })

    return (
        <UserContext.Provider value ={ {
            // regreso un objeto donde pongo la info que necesito
            user,
            setUser,
            tempora: 1234,
        } } >
            <AppRouter />

        </UserContext.Provider>
    )
}
