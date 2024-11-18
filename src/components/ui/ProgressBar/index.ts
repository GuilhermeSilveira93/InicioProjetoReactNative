import { Bar } from './Bar'
import { ProgressBarRoot } from './Progress'

const ProgressBar = {
  ROOT: ProgressBarRoot,
  BAR: Bar,
} as const
export default ProgressBar
