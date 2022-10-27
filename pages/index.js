/* eslint-disable*/
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRef, useState, useEffect } from 'react';
// import videoBg from '../public/assets/bg.mp4'


const useHorizontalScrollEvent = (callback) => {
  // const positionRef = React.useRef(0);
  const divRef = useRef();

  return (e) => {
      const x = e.currentTarget.scrollLeft;
      // console.log(x)
      if (x !== divRef.current) {
          divRef.current = x;
          callback(e);
      }
  };
};

export default function Home() {

 

  const testimonials = [
    {
      img: '',
      text: '',
      name: '',
      location: ""
    },
    {
      img: '/assets/img1.png',
      text: 'Hosting my studio changed my life and gifted me with memorable experiences and people.',
      name: 'Reka',
      location: "Milan"
    },
    {
      img: '/assets/img2.png',
      text: 'Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom',
      name: 'Darrel',
      location: "Atlanta"
    },
    {
      img: '/assets/img3.png',
      text: 'We have been able to keep our culture alive by hosting our pasta-making experience.',
      name: 'Nerina',
      location: "Palombara Sabina"
    },
    {
      img: '/assets/img4.png',
      text: 'Airbnb has allowed me to create my own job doing what I love — taking care of guests in our home.',
      name: 'Clair',
      location: "Chiang Mai"
    },
    {
      img: '/assets/img5.png',
      text: 'Hosting my studio changed my life and gifted me with memorable experiences and people.',
      name: 'Mohammed',
      location: "Wadi Rum"
    },
    {
      img: '',
      text: '',
      name: '',
      location: ""
    },

  ]
  const divRef = useRef();
  const heroRef = useRef()
  const [divWidth, setDivWidth] = useState(0)
  const [divIndex, setDivIndex] = useState(1)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const width = window.innerWidth
    if (width >= 768){
      // console.log(heroRef.current.clientHeight)
      window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY
        if (scrollPos > heroRef.current.clientHeight){
          setShowNav(true)
        } else {
          setShowNav(false)
        }
      })
      
      setDivWidth(width / 3)
    } else {
      setDivWidth(width)
    }
    divRef.current.scrollLeft += 3000    

  
  }, [])
 
  
  // const handleScroll = (e) => {
  //   const x = e.currentTarget.scrollLeft;
  //   if (x !== divRef.current) {
  //       divRef.current = x;
  //       console.log('Horizontal scroll event occurred ...');
  //   }
  // };
  const scroll = (x) => {
    divRef.current.scrollLeft += x
  }

  const changeIndex = (x) => {
    if (x === 'inc'){
      setDivIndex((prevDivIndex) => prevDivIndex + 1)
    } else {
      setDivIndex((prevDivIndex) => prevDivIndex - 1)
    }
  }
  // const handleScroll = useHorizontalScrollEvent((e) => {
  //   console.log('Horizontal scroll event occurred ...');
  // });

  const supportLinks = [
    'Help Center', 'AirCover', 'Safety information', 'Supporting people with disabilities', 'Cancellation options', 'Our COVID-19 Response', 'Report a neighborhood concern'
  ]

  const communityLinks = [
    'Airbnb.org: disaster relief housing', 'Support Afghan refugees', 'Combating discrimination'
  ]

  const hostingLinks = [
    'Try hosting', 'AirCover for Hosts', 'Explore hosting resources', 'Visit our community forum',
    'How to host responsibly'
  ]

  const airbnbLinks = [
    'Newsroom', 'Learn about new features', 'Letter from our founders', 'Careers', 'Investors', 'Gift cards'
  ]

  

  return (
    <div className={styles.container}>
      <Head>
        <title>AirBnB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={showNav? 'show-nav' : ''}>
          <span className='nav-logo desktop'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="Airbnb homepage" role="img" focusable="false" style={{ display: 'block', height: '36px', width: '36px', fill: 'rgb(0, 0, 0)'}}><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path></svg>
          </span>
          <div className='nav-host'>
            <div className='superhost'>
              <div className='avatars desktop'>
                <img src='/assets/av1.webp' />
                <img src='/assets/av2.webp' />
                <img src='/assets/av3.webp' />
              </div>
              <p>Ask a Superhost</p>
            </div>
            <a className='desktop'>Try hosting</a>
          </div>
          
        </nav>

        <div className='hero' ref={heroRef}>
          <div className='heroLeft'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className='logo' style = {{ height: '36px', width: "36px", fill: "#fff" }} aria-label="Airbnb homepage" role="img" focusable="false"><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z">
              </path>
            </svg>
            <h1>Open your door to hosting</h1>
            <a>Try hosting</a>
          </div>
          <div className='heroRight'>
            {/* <video src={videoBg} /> */}
            <video src='/assets/bg2.mp4' autoPlay loop muted />

          </div>
        </div>
        <div className='earn'>
          <h1 className='mobile'>Open your door <br/> to hosting</h1>
          <h2>Find out what you could earn as a host</h2>
          <div className='stats'>
            <div className='monthly'>
              <p>Hosts in your area earn an average of*</p>
              <span><span className='figures'>$948</span>/month</span>
            </div>
            <div className='daily'>
            <p>They earn</p>
            <span><span className='figures'>$79</span>/night</span>
            </div>
            <div className='booked'>
            <p>They're booked</p>
            <span><span className='figures'>12</span>nights/month</span>
            </div>
          </div>
          <h6>Tell us about your place</h6>
          <div className='map'></div>
          <a>*Learn how we estimate your earnings</a>
          
        </div>
        <div className='testimonials'>
          <h2>You can host <br/> anything, anywhere</h2>
          
          <div className='t-container' ref={divRef} >
            {testimonials.map((item, i) => (
              <div key={i} className={divIndex === i? 't-card i-card' : 't-card'} style={{minWidth: divWidth }} >
                <img src={item.img} style={{ width: `${divWidth * 80/100}px` }}/>
                <div>
                  <p className='larger-text'>{item.text}</p>
                  <p className='t-card-name'>{item.name}</p>
                  <p className=''>Host in {item.location}</p>
                </div>

              </div>
            ))}
          </div>
          <div className='button-grp'>
              <button disabled = {divIndex === 1? true : false} onClick={() => {
                scroll(-divWidth)
                changeIndex('dec')
              }}>{'<'}</button>
              <button disabled = {divIndex === testimonials.length - 2? true : false} onClick={() => {
                scroll(divWidth)
                changeIndex('inc')
              }}>{'>'}</button>
          </div>
        </div>
        
        <div className='banner-container'>
          <div className='ukr-banner'>
            <h2>Help house 100,000 refugees fleeing Ukraine</h2>
            <a>Learn more</a>
          </div>
        </div>

        <div className='banner-container'>
          <div className='sec-banner'>
            <h2>Question about hosting? <br/>ask a Superhost</h2>
            <a>Learn more</a>
          </div>
        </div>

        <div className='banner-container third'>
          <div className='third-banner'>
            <div className='mobile t-b-head'>
              <h1><span>air</span>cover</h1>
              <p>for Hosts</p>
            </div>
            
            <div className='t-b-details desktop'>
              <h1><span>air</span>cover</h1>
              <p>for Hosts</p>
              <h2>Top-to-bottom protection. <br/> Always included, always free. <br/> Only on Airbnb.</h2>
              <a>Learn more</a>
            </div>
            <img src='/assets/thirdbanner.webp' />
          </div>
          <div className='t-b-details mobile'>
            <h2>Top-to-bottom protection. <br/> Always included, always free. <br/> Only on Airbnb.</h2>
            <a>Learn more</a>
          </div>
          
          
        </div>

        <div className='v-banner'>
          <div className='v-b-video'>
            <video src='/assets/bg2.mp4' autoPlay loop muted />
          </div>
          <div className='v-b-cta'>
            <h2>Try hosting on <br/> Airbnb</h2>
            <p>Join us. We'll help you every <br/> step of the way</p>
            <a className='desktop'>Let's go</a>
          </div>
        </div>
        

      </main>
      <footer>
        <div className='footer-links'>
          <div className='support'>
            <p className='f-l-head'>Support</p>
            {supportLinks.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <div className='community'>
            <p className='f-l-head'>Community</p>
            {communityLinks.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <div className='hosting'>
            <p className='f-l-head'>Hosting</p>
            {hostingLinks.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <div className='airbnb'>
            <p className='f-l-head'>Airbnb</p>
            {airbnbLinks.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
        <hr/>
        <div className='copyright'>
          <p className='c-head'>English (US) $ USD</p>
          <p className='mobile'>© 2022 Airbnb, Inc.</p>
          <div className='c-links'>
            <p className='desktop'>© 2022 Airbnb, Inc.</p>

            <p>Privacy</p>
            <span>.</span>
            <p>Terms</p>
            <span>.</span>
            <p>Sitemap</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
