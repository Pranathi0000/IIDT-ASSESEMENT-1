import React, { useState } from 'react';

function Form() {
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${userName}!`);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={userName} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default Form;
