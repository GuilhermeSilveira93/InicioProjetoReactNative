import { InputRoot } from './Input'
import { InputError } from './InputError'
import { InputField } from './InputField'
import { InputGroup } from './InputGroup'
import { InputIcon } from './InputIcon'
import { InputLabel } from './InputLabel'

const Input = {
  ROOT: InputRoot,
  GROUP: InputGroup,
  FIELD: InputField,
  ICON: InputIcon,
  LABEL: InputLabel,
  ERROR: InputError,
} as const
export default Input
