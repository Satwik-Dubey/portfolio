/** Renders text, showing any "[ ... ]" part in amber as a spot still to fill in. */
export default function Fill({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]*\])/g).filter(Boolean)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") ? <span key={i} className="fill">{p}</span> : <span key={i}>{p}</span>,
      )}
    </>
  )
}
