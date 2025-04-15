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
        Hello World!
      </h1>
      <div className="circular--portrait">
      <img
          src="/LinhPhamPic.jpg" alt="Photograph of Linh" />
          
      </div>
      <div className='text-box'>
      <p>Hi, I’m Linh Pham, a full-stack software engineer with 3 years of experience building scalable web applications in enterprise environments. I work mainly with JavaScript, TypeScript, React, Redux, Svelte, Node.js, and Python—and I love turning complex problems into user-friendly solutions.
      </p> 
      <br/>
      <p>I'm currently working on a web app called SafeTravels, which allows user to subscribe to receive latest updates via email or WhatsApp regarding safety in different places in the world!
        Users can also share safety tips with others. I got this idea from my own experience of traveling solo to 30 countries during my sabbatical from September 2023 till January 2025!
      </p>
      <br/>

      <p>When I’m not coding, you can usually find me out on a hiking trail, lost in a good book, or discovering new local spots to eat. I’m also passionate about travel and photography, and I always have a camera (or at least my phone) ready to capture the moments that make a trip unforgettable.</p>
      <br/>
      <p>Feel free to contact me if you have any questions or would like to connect!</p>
      </div>
    </div>
  )
}

export default HomePage
