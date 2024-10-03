import { InputError } from '../Input/InputError'
import { SelectROOT } from './Select'
import { SelectContent } from './SelectContent'
import { SelectLabel } from './SelectLabel'
import { SelectTriggerCustom } from './SelectTrigger'

export const Select = {
  ROOT: SelectROOT,
  TRIGGER: SelectTriggerCustom,
  CONTENT: SelectContent,
  LABEL: SelectLabel,
  ERROR: InputError,
}
