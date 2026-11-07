import { useRef, useState, type KeyboardEvent } from "react"
import Win from "./Win"
import { AppIcon, FolderIcon, PuzzleIcon } from "./icons"
import { projects } from "../data"

/** A file explorer: pick a file on the left, its preview opens on the right. */
export default function Projects() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const p = projects[active]

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return
    e.preventDefault()
    const n = (active + (e.key === "ArrowDown" ? 1 : -1) + projects.length) % projects.length
    setActive(n)
    tabs.current[n]?.focus()
  }

  return (
    <Win id="projects" title="/projects" icon={<FolderIcon />}>
      <div className="win-body head ruled">
        <span className="path">C:\satwik\projects — {projects.length} items</span>
        <h2>Things I've built and shipped. Pick one to open it.</h2>
      </div>

      <div className="explorer">
        <ul className="files" role="tablist" aria-label="Projects" onKeyDown={onKey}>
          {projects.map((proj, i) => (
            <li key={proj.file}>
              <button
                ref={(el) => { tabs.current[i] = el }}
                role="tab"
                id={`tab-${i}`}
                aria-selected={i === active}
                aria-controls="preview"
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
              >
                {proj.file.endsWith(".crx") ? <PuzzleIcon /> : <AppIcon />}
                <span className="fn">
                  {proj.file}
                  {proj.isNew && <span className="new">NEW</span>}
                </span>
                <span className="meta">{proj.kind}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="preview" role="tabpanel" id="preview" aria-labelledby={`tab-${active}`}>
          <a className="shot" href={p.links[0].href} target="_blank" rel="noopener noreferrer">
            <img key={p.img} src={p.img} alt={`Screenshot of ${p.title}`} loading="lazy" />
            <span className="hint">Hover for colour</span>
          </a>
          <div className="pv">
            <h3>
              {p.title}
              <small>{p.tagline}</small>
            </h3>
            <p>{p.desc}</p>
            {p.stack.length > 0 && (
              <div className="chips">
                {p.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
            )}
            <div className="links">
              {p.links.map((l, k) => (
                <a key={l.label} className={`btn${k ? " ghost" : ""}`} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Win>
  )
}
