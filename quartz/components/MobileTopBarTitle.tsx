import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/mobileTopBarTitle.scss"
// @ts-ignore
import script from "./scripts/mobileTopBarTitle.inline"

interface Options {
  text: string
}

export default ((opts: Options) => {
  const MobileTopBarTitle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return <div class={classNames(displayClass, "mobile-home-title")}>{opts.text}</div>
  }

  MobileTopBarTitle.css = style
  MobileTopBarTitle.afterDOMLoaded = script
  return MobileTopBarTitle
}) satisfies QuartzComponentConstructor<Options>
