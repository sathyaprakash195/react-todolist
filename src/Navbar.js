import React , {useState} from 'react'

export default function Navbar() {
    const[navstatus , setnavstatus]=useState(0)
    const[divwidth , setdivwidth]=useState('')
    function opennav() {
        if(!navstatus)
        {
             setdivwidth('0px')
             setnavstatus(1)
        }
        else{
            setdivwidth('100%')
            setnavstatus(0)
        }
    }
    return (
        <div>
            <div class="maindiv" style={{width:divwidth}}>

                <button onClick={opennav}><i class="fas fa-bars"></i></button>
                <ul class="mynav">

                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact US</li>

                </ul>

            </div>
        </div>
    )
}
