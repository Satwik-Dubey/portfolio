import { profile, sections } from "../data"

/** Home: your monitor picture, with the nav and name drawn inside its screen. */
export default function Scene() {
  return (
    <section className="scene" id="home" data-sec>
      <div className="stage">
        <img
          className="bg"
          src="/hero_one.png"
          srcSet="/hero_one.png 1200w, /hero_one.png 2400w"
          sizes="(max-width: 700px) 700px, 100vw"
          alt=""
          width={2400}
          height={1397}
          fetchPriority="high"
        />

        {/* sits exactly on the monitor's screen in hero.jpg */}
        <div className="screen">
          <header className="snav">
            <a className="logo" href="#home" aria-label={`${profile.name}, home`}>
              <b>S:\&gt;</b>
              <span>satwik<br />dubey</span>
            </a>
            <nav aria-label="Sections">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className={s.id === "home" ? "on" : undefined}>
                  {s.id === "home" ? "< home >" : s.label.toLowerCase()}
                </a>
              ))}
            </nav>
            <a className="sbtn" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </header>

          <div className="say">
            <small className="cursor">{profile.role}</small>
            <h1>{profile.name}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
