import {useState, useEffect} from 'react'

export default function useBrowserWidth(minPixel) {

    const [desktop, setDesktop] = useState(false)
    
    const [size,setSize] = useState(window.innerWidth)

        useEffect(()=>{
            window.addEventListener("resize",(()=>{
                setSize(window.innerWidth)
            }))
        },[])
    
        useEffect(()=>{
            if(size >= minPixel){
                setDesktop(true)
            } else{
                setDesktop(false)
            }
        },[size])

        return desktop
}

