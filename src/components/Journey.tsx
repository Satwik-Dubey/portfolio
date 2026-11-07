import Win from "./Win"
import Fill from "./Fill"
import { facts, journey, profile } from "../data"

export default function Journey() {
  return (
    <Win id="journey" title="/retro_resume">
      <div className="win-body">
        <div className="head" style={{ marginBottom: 22 }}>
          <span className="path">C:\satwik\journey</span>
          <h2>The journey so far.</h2>
        </div>

        <div className="resume">
          <div className="pic"><img src="/me.png" alt="" width={480} height={480} loading="lazy" /></div>
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}:</dt>
                <dd><Fill text={f.value} /></dd>
              </div>
            ))}
            <div>
              <dt>Status:</dt>
              <dd><span className="live">{profile.status}</span></dd>
            </div>
          </dl>
        </div>

        <div className="log">
          <div className="lh">git log --journey</div>
          <ol>
            {journey.map((j, i) => (
              <li key={i}>
                <span><Fill text={j.what} /></span>
                <span><Fill text={j.when} /></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Win>
  )
}
