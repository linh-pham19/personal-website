import React from 'react'
import '../App.css'


function HomePage() {
  return (
    <div>
      <h1
        style={{
          color: 'red',
          textShadow: `0 1px #8da1ff, -1px 0 #c0cbff, -1px 2px #8da1ff, -2px 1px #c0cbff,
        -2px 3px #8da1ff, -3px 2px #c0cbff, -3px 4px #8da1ff, -4px 3px #c0cbff,
        -4px 5px #8da1ff, -5px 4px #c0cbff, -5px 6px #8da1ff, -6px 5px #c0cbff,
        -6px 7px #8da1ff, -7px 6px #c0cbff, -7px 8px #8da1ff, -8px 7px #c0cbff`
        }}
      >
        Hello World !
      </h1>
      <div className="circular--portrait">
      <img
          src="/src/assets/linhphamheadshot.png" alt="Photograph of Linh" />
      </div>
      <div className='text-box'>
      <p>My name is Linh Pham. I'm a full-stack developer with 2.5 years of experience. I enjoy coding in Javascript, especially using front-end libraries such as Svelte and React. 
        I also have experience with back-end technologies like Node.js and Express.js. I have a passion for learning new technologies and improving my skills. I am currently looking for a full-time position as a software engineer.</p> 
      <br/>
      <p>I'm currently working on a web app called SafeTravels, which allows user to subscribe to receive latest updates via email or WhatsApp regarding safety in different places in the world!
        Users can also share safety tips with others.
      </p>
      <br/>

      <p>In my free time, I enjoy hiking, reading, and exploring local eateries. I also love to travel and explore new places. I have a passion for photography and enjoy capturing moments from my travels.</p>
      <br/>
      <p>Feel free to contact me if you have any questions or would like to connect!</p>
      </div>
    </div>
  )
}

export default HomePage
