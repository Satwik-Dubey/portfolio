import Win from "./Win"
import { profile, socials } from "../data"

export default function Whoami() {
  return (
    <Win title="/whoami" className="whoami">
      <div className="win-body">
        <pre className="term">
          <span className="p">$</span> whoami{"\n"}
          <span className="o">{profile.name.toLowerCase()}</span>{"\n"}
          <span className="p">$</span> cat about.txt{"\n"}
          <span className="o">{profile.about}</span>{"\n"}
          <span className="p">$</span> status{"\n"}
          <span className="live">{profile.status}</span>
        </pre>
        <div className="links">
          <a className="btn" href="#projects">See my work</a>
          {socials.map((s) => (
            <a key={s.label} className="btn ghost" href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </Win>
  )
}
