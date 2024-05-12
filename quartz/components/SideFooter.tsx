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
		  
		<br></br>
		<div><a target="_blank" href="https://kwize.com/quote-of-the-day/"><img id="img-preview" style="width:100%; max-width:300px; min-height:185px;" src="/pics/Quote-of-the-Day-3-0.jpg" alt="Quote of the Day"></a><a style="display:block; font-size:12px; color:black;" href="https://kwize.com/quote-of-the-day/">Quote of the day @Kwize</a></div>
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
