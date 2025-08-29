import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <ScrollToTop />
          <Header />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App