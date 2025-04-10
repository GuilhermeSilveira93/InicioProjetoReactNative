import { InputError } from '../Input/InputError'
import { InputLabel } from '../Input/InputLabel'
import SelectedROOT from './Selected'
import SelectedGROUP from './SelectedGroup'
import SelectedTrigger from './SelectedTrigger'

const Select = {
  ROOT: SelectedROOT,
  GROUP: SelectedGROUP,
  LABEL: InputLabel,
  TRIGGER: SelectedTrigger,
  ERROR: InputError,
}
export default Select
