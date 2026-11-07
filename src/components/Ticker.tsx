import { ticker } from "../data"

export default function Ticker() {
  // the list is rendered twice so the loop scrolls without a gap
  const items = [...ticker, ...ticker]
  return (
    <div className="ticker" aria-hidden="true">
      <div>
        {items.map(([k, v], i) => (
          <span key={i}><b>{k}:</b> {v}<em>✶</em></span>
        ))}
      </div>
    </div>
  )
}
