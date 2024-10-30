import './App.css'
import Nav from '@/components/custom/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@/components/pages/Home'
import Contact from '@/components/pages/Contact'
import Pricing from '@/components/pages/Pricing'
import { ThemeProvider } from 'next-themes'

function App() {

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
