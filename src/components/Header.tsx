import Navigation from './Navigation'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Muhammad Agung Ferdiansyah</h1>
        <p className="tagline">Machine Learning Engineer & Backend Developer</p>
      </div>
      <Navigation />
    </header>
  )
}

export default Header