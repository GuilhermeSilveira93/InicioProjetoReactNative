import { useState } from 'react'

const useToggle = () => {
  const [value, setValue] = useState(false)

  const ToggleValue = () => {
    setValue((prev) => !prev)
  }
  return [value, ToggleValue] as const
}
export default useToggle
