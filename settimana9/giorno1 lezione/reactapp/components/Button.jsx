import { useState } from 'react'

const Button = (props) => {

    const [count, setCount] = useState(props.count)

    return (
        <button onClick = {() => setCount((count) => count + 1 )}>
       il conteggio è {count}
      </button>
    )
}

export default Button