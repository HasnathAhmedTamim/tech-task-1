import './App.css'
import FAQSection from './components/FAQSection'
import GetInTouchSection from './components/GetInTouchSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <FAQSection />
      <GetInTouchSection />
      <Footer />
    </div>
  )
}

export default App
