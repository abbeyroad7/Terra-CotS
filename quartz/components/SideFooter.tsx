import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { classNames } from "../util/lang"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  linksSide: Record<string, string>
}

export default ((opts?: Options) => {
  const SideFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    
    const linksSide = opts?.linksSide ?? []
    return (
      <sidefooter class={classNames(displayClass, "side-footer")}>
		<h3>Next Session: Tuesday, May 14 @6:30pm CT</h3>
		<br></br>
		<h4>Navigation</h4>
          {Object.entries(linksSide).map(([text, linksSide]) => (
              <br><a href={linksSide}>{text}</a></br>
          ))}
		  
		<br></br><br></br>
		<iframe frameBorder="0" width="400" height="75" src="https://kwize.com/quote-of-the-day/embed/&txt=0"></iframe>

      </sidefooter>
    )
  }

SideFooter.css = `
.side-footer {
  margin-top: -2rem;
  margin-left: -8rem;
  line-height: 55%;
  
  h3 {
	  line-height: 130%;
  }
}
`

  return SideFooter
}) satisfies QuartzComponentConstructor
