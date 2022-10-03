import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdullahi | Full-Stack Developer</title>
        <meta name="description" content="I’m a full-stack software engineer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
