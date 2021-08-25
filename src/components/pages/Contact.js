import React from 'react'

export default function Contact(){

    return(
        <form className='contact'>
            <label htmlFor='name'>
                Nombre
                <input id='name'></input>
            </label>
            
            <label htmlFor='email'>
                Email
                <input id='email'></input>
            </label>
            
            <label htmlFor='message'>
                Mensaje
                <input type='textarea' id='message'></input>
            </label>
            <button type='submit'>CONTACTAR</button>
        </form>
    )
}