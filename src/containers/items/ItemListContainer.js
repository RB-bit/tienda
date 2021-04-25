import React from 'react'

const itemListContainer = () => {

    const task = new Promise((resolve, reject) => {
        resolve(5)
    })

    task.then((res) => {
        console.log("res", res)
    })

    return (
        <div>
            Hola
        </div>
    )
}

export default itemListContainer

