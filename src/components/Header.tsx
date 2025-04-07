import Navigation from './Navigation'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Muhammad Agung Ferdiansyah</h1>
        <p className="tagline">Full Stack and Machine Learning Engineer</p>
      </div>
      <Navigation />
    </header>
  )
}

export default Header