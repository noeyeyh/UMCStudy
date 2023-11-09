import { useState } from "react"

export const Home = () => {
    const [isVisible,setIsVisible] = useState(false)
    return (
      <div>
        {isVisible &&<img src="/Untitled.svg" alt="Test"/>}
        <button onClick={()=>setIsVisible(!isVisible)}>광고</button>
      </div>
    )
  }