import React from 'react'

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  return (
    <div>
      <p>ClickCount {ClickCount} time</p>
      <button onClick={() => ClickCount}>
      Click me
      </button>
    </div>
  )
}

export default ClickCount
