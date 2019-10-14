import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Toggle from '../components/toggle'

const Home = () => (
  <div>
    <Head>
      <title>React patterns demo</title>
    
    </Head>

    <Nav />

    <div className="centered">
      <Toggle />
    </div>

    <style jsx>{`
      .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
