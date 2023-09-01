import './App.css'
import Header from './components/header/header'
import Home from './components/home/home'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/portfolio'
import Resume from './components/resume/Resume'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <main className="main">
      <Header />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Blog />
      <Contact  />
      <Footer />
    </main>
  )
}

export default App
