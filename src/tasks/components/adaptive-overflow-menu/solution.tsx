import { useLayoutEffect, useRef, useState, type HTMLAttributes } from 'react'
import { Dropdown } from './Dropdown'
import { menuItems } from './data'
import { MenuItem } from './MenuItem'
import './Menu.css'

export function Menu({
  className,
  style,
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  const element = useRef<HTMLUListElement>(null)
  const sample = useRef<HTMLUListElement>(null)
  const [count, setCount] = useState(menuItems.length)
  useLayoutEffect(() => {
    const menu = element.current
    const row = sample.current
    if (!menu || !row) return
    function measure() {
      if (!menu || !row) return
      const css = getComputedStyle(menu)
      const available =
        menu.clientWidth -
        parseFloat(css.paddingLeft) -
        parseFloat(css.paddingRight)
      const gap = parseFloat(css.columnGap) || 0
      const widths = Array.from(
        row.children,
        (node) => node.getBoundingClientRect().width,
      )
      const trigger = widths.pop() ?? 0
      const total =
        widths.reduce((sum, w) => sum + w, 0) +
        Math.max(0, widths.length - 1) * gap
      if (total <= available) {
        setCount(widths.length)
        return
      }
      let used = trigger
      let visible = 0
      for (const width of widths) {
        if (used + gap + width > available) break
        used += gap + width
        visible++
      }
      setCount(visible)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(menu)
    for (const child of row.children) observer.observe(child)
    return () => observer.disconnect()
  }, [menuItems])
  return (
    <div style={{ position: 'relative' }}>
      <ul
        {...props}
        ref={element}
        className={'Menu ' + (className ?? '')}
        style={{ ...style, flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
      >
        {menuItems.slice(0, count).map((item) => (
          <MenuItem key={item.id} menuItem={item} />
        ))}
        {count < menuItems.length && (
          <li>
            <Dropdown menuItems={menuItems.slice(count)} />
          </li>
        )}
      </ul>
      {/* Измеряем все пункты даже после их переноса в dropdown. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          visibility: 'hidden',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <ul
          ref={sample}
          className={'Menu ' + (className ?? '')}
          style={{
            ...style,
            width: 'max-content',
            flexWrap: 'nowrap',
            whiteSpace: 'nowrap',
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.id} menuItem={item} />
          ))}
          <li>
            <Dropdown menuItems={[]} />
          </li>
        </ul>
      </div>
    </div>
  )
}
