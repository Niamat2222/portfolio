import React, { useState } from 'react'

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>ClickCount {counter} time</p>
      <button onClick={() => setCounter(counter + 1)}>
      Click her
      </button>
    </div>
  )
}

export default ClickCount
