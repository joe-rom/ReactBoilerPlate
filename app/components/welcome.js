import React from 'react';

export default class Welcome extends React.Component {

  render(){
    return (
      <section className='welcome'>
        <div className='wrapper-text-welcome'>
          <h1 className='welcome-bg'>Welcome</h1>
          <p className='welcome-sm'>Hello</p>
        </div>
      </section>
    )
  }
}
