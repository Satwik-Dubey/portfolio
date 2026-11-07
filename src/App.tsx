import Scene from "./components/Scene"
import Whoami from "./components/Whoami"
import Ticker from "./components/Ticker"
import Projects from "./components/Projects"
import Stack from "./components/Stack"
import Journey from "./components/Journey"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Taskbar from "./components/Taskbar"

export default function App() {
  return (
    <>
      <Scene />
      <main className="wrap">
        <Whoami />
        <Ticker />
        <Projects />
        <Stack />
        <Journey />
        <Contact />
        <Footer />
      </main>
      <Taskbar />
    </>
  )
}
