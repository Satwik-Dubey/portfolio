import type { ReactNode } from "react"
import { TerminalIcon } from "./icons"

type Props = {
  id?: string
  title: string
  icon?: ReactNode
  className?: string
  children: ReactNode
}

/** A window with a title bar and min / max / close buttons. */
export default function Win({ id, title, icon = <TerminalIcon />, className = "", children }: Props) {
  return (
    <section id={id} className={`win ${className}`}>
      <div className="win-bar">
        <span className="t">
          {icon}
          <span className="cursor">{title}</span>
        </span>
        <span className="ctl" aria-hidden="true">
          <i><svg viewBox="0 0 14 14"><path d="M2 11h10" stroke="currentColor" strokeWidth="2" /></svg></i>
          <i><svg viewBox="0 0 14 14"><rect x="2.5" y="2.5" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg></i>
          <i><svg viewBox="0 0 14 14"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="2" /></svg></i>
        </span>
      </div>
      {children}
    </section>
  )
}
