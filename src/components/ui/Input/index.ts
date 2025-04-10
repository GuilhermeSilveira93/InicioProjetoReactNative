import Icon from '@components/ui/Icon'

import { InputRoot } from './Input'
import { InputError } from './InputError'
import { InputField } from './InputField'
import { InputGroup } from './InputGroup'
import { InputLabel } from './InputLabel'

const Input = {
  ROOT: InputRoot,
  GROUP: InputGroup,
  FIELD: InputField,
  ICON: Icon,
  LABEL: InputLabel,
  ERROR: InputError,
} as const
export default Input
