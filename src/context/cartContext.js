import React, {useState} from 'react'

export const CantContext = React.createContext([])

export const Cantidad = ({children})  => {

    const [cant, setCant] = useState([])

    return(
        <CantContext.Provider value={[cant, setCant]}>
            {children}
        </CantContext.Provider>
    )
}


