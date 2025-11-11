import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/profileimage.scss"

interface Options {
  src: string
  alt?: string
  size?: string
}

export default ((opts?: Options) => {
  const ProfileImage: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const src = opts?.src ?? "/assets/headshot.png"
    const alt = opts?.alt ?? "Profile image"
    const size = opts?.size ?? "140px"

    return (
      <div class={`${displayClass ?? ""} profile-image-container`}>
        <img
          src={src}
          alt={alt}
          class="profile-image"
          width={size}
          height={size}
        />
      </div>
    )
  }

  ProfileImage.css = style
  return ProfileImage
}) satisfies QuartzComponentConstructor
