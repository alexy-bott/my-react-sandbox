import { useState } from 'react'
export function PhoneNumberInputTask() {
  const [digits, setDigits] = useState('')
  const parts = [
    digits.slice(0, 3),
    digits.slice(3, 6),
    digits.slice(6, 8),
    digits.slice(8, 10),
  ]
  const formatted = digits
    ? '+7 (' +
      parts[0] +
      (parts[1] ? ') ' + parts[1] : '') +
      (parts[2] ? '-' + parts[2] : '') +
      (parts[3] ? '-' + parts[3] : '')
    : ''
  return (
    <label>
      Номер{' '}
      <input
        type="tel"
        value={formatted}
        onChange={(e) =>
          setDigits(
            e.target.value
              .replace(/^\+7\s*/, '')
              .replace(/\D/g, '')
              .slice(0, 10),
          )
        }
      />
    </label>
  )
}
