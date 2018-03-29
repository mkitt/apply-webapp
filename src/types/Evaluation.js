// @flow
import type { Criterion } from './Criterion'

export type Evaluation = {
  criteria: Array<Criterion>,
  id: ID,
  title: string,
}
