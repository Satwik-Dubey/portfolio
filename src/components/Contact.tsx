import { useState } from "react"
import { profile, socials } from "../data"

export default function Contact() {
  const [copied, setCopied] = useState<"" | "Copied" | "Selected">("")

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied("Copied")
    } catch {
      // clipboard blocked: select the address so it can be copied by hand
      const el = document.getElementById("mail")
      if (el) {
        const r = document.createRange()
        r.selectNodeContents(el)
        const sel = window.getSelection()
        sel?.removeAllRanges()
        sel?.addRange(r)
      }
      setCopied("Selected")
    }
    setTimeout(() => setCopied(""), 1600)
  }

  return (
    <section id="contact" data-sec className="contact">
      <span className="tag">/contact</span>
      <h2>Have an idea or an internship? Let's talk.</h2>
      <p>Email is the fastest way to reach me. You can also find me on LinkedIn and X.</p>
      <div className="mailrow">
        <a id="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        <button type="button" onClick={copy}>{copied || "Copy"}</button>
      </div>
      <div className="links">
        {socials.map((s) => (
          <a key={s.label} className="btn" href={s.href} target="_blank" rel="noopener noreferrer">{s.label} ↗</a>
        ))}
        <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
      </div>
    </section>
  )
}
