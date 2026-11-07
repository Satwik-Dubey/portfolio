import { useEffect, useState } from "react"
import { GridIcon } from "./icons"
import { sections } from "../data"

const istTime = () =>
  new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false })

/** The site nav, styled as an OS taskbar. Highlights the section in view. */
export default function Taskbar() {
  const [current, setCurrent] = useState("home")
  const [time, setTime] = useState(istTime)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    const t = setInterval(() => setTime(istTime()), 15000)
    return () => { io.disconnect(); clearInterval(t) }
  }, [])

  return (
    <nav className="taskbar" aria-label="Sections">
      <a className="start" href="#home"><GridIcon size={14} /><span>Start</span></a>
      <div className="tasks">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} aria-current={current === s.id ? "true" : undefined}>{s.label}</a>
        ))}
      </div>
      <span className="clock"><span className="live" />{time} IST</span>
    </nav>
  )
}
