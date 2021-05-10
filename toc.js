import React, { useRef, useState, useEffect } from 'react'
import { throttle } from 'lodash'


export default function Toc({ headingSelector, getTitle, getDepth, ...rest }) {
   
  const accumulateOffsetTop = (el, totalOffset = 0) => {
      while (el) {
        totalOffset += el.offsetTop - el.scrollTop + el.clientTop
        el = el.offsetParent
      }
      return totalOffset
    }
 
  const { throttleTime = 200, tocTitle = `Contents` } = rest

  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
    minDepth: 0,
  })

  
const [open, setOpen] = useState(false)

const [active, setActive] = useState()


useEffect(() => {

  const selector =
    headingSelector || Array.from({ length: 6 }, (_, i) => `main h` + (i + 1))
  const nodes = Array.from(document.querySelectorAll(selector))
  const titles = nodes.map(node => ({
    title: getTitle ? getTitle(node) : node.innerText,
    depth: getDepth ? getDepth(node) : Number(node.nodeName[1]),
  }))
  
  const minDepth = Math.min(...titles.map(h => h.depth))
  setHeadings({ titles, nodes, minDepth })
}, [headingSelector, getTitle, getDepth])


useEffect(() => {
 
  const scrollHandler = throttle(() => {
    const { titles, nodes } = headings
  
    const offsets = nodes.map(el => accumulateOffsetTop(el))
    const activeIndex = offsets.findIndex(
      offset => offset > window.scrollY + 0.8 * window.innerHeight
    )
    setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1)
  }, throttleTime)
  window.addEventListener(`scroll`, scrollHandler)
  return () => window.removeEventListener(`scroll`, scrollHandler)
}, [headings])

return (
  
  <nav>

  {headings.titles.map(({ title, depth }, index) => (
    <div
      key={title}
      active={active === index}
      depth={depth - headings.minDepth}
    >
      {title}
    </div>
  ))}

</nav>

)

}