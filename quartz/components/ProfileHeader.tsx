import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/profileheader.scss"

interface Options {
  src: string
  name: string
  subtitle: string
  alt?: string
}

export default ((opts: Options) => {
  const ProfileHeader: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <section class={`${displayClass ?? ""} profile-header`} aria-label="Profile">
        <img src={opts.src} alt={opts.alt ?? opts.name} class="profile-header-image" />
        <div class="profile-header-text">
          <div class="profile-header-name">{opts.name}</div>
          <p class="profile-header-subtitle">{opts.subtitle}</p>
        </div>
      </section>
    )
  }

  ProfileHeader.css = style
  return ProfileHeader
}) satisfies QuartzComponentConstructor<Options>
