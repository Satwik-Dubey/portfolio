import { profile } from "../data"

export default function Footer() {
  return (
    <footer>
      <p className="big" aria-hidden="true">S:\&gt;satwik_dubey</p>
      <div className="fine">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed as a personal OS</span>
      </div>
    </footer>
  )
}
