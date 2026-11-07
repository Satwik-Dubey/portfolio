import Win from "./Win"
import { GridIcon } from "./icons"
import { stack } from "../data"

export default function Stack() {
  return (
    <Win id="stack" title="/stack" icon={<GridIcon />}>
      <div className="win-body head ruled">
        <span className="path">C:\satwik\stack</span>
        <h2>The tools I reach for.</h2>
      </div>
      <div className="dirs">
        {Object.entries(stack).map(([dir, items]) => (
          <div className="dir" key={dir}>
            <h3>{dir}</h3>
            <div className="keys">
              {items.map((s) => <span className="key" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Win>
  )
}
