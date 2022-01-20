//myApp.tsx
import React, { useState } from 'react'
import Greeting from './greeting';

type MyAppProps = {

}

const MyApp: React.FC<MyAppProps> = () => {

  // useState hooks for name & lastName
  const [name, setName] = useState<string>('Jaakko');
  const [lastName, setLastName] = useState<string>('Kulta');

  return (
    <div>

      {/* input for name */}
      <label>
        name:
        <input
          type='text'
          /* set input value to value of name */
          value={name}
          /* using onChange event to set name, every time whent value of input has changed */
          onChange={ (event) => setName(event.target.value) }
        />
      </label>

      {/* input for lastName */}
      <label>
        last name:
        <input
          type='text'
          value={lastName}
          onChange={ (event) => setLastName(event.target.value) }
        />
      </label>

      {/* dispaly greetings */}
      {/* here we use greeting-component props like a HTML attributes */}
      <Greeting name={name} lastName={lastName} />

    </div>
  )
}

export default MyApp