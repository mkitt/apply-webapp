// @flow
import { compose, prop, replace } from 'ramda'
import { capitalize } from '../lib/utils'
import type { Applicant } from './Applicant'
import type { Evaluator } from './Evaluator'

export type Application = {
  id: ID,
  applicant: Applicant,
  complete: boolean,
  evaluators: ?Array<Evaluator>,
  scoreLogicEvaluation: ?Int,
  scoreOnlineLogicTest: ?Int,
  scoreValuesEvaluation: ?Int,
  status: string,
  // derived...
  statusLabel: string,
}

// -------------------------------------
// Derived helpers

export const deriveStatusLabel = compose(
  capitalize,
  replace(/_/gi, ' '),
  prop('status'),
)

// -------------------------------------
// For testing content
export const stub = (props: Application) => {
  const application = {
    id: '1',
    complete: false,
    evaluators: null,
    scoreLogicEvaluation: 20,
    scoreOnlineLogicTest: 40,
    scoreValuesEvaluation: 20,
    status: 'pending',
    statusLabel: 'Pending',
  }
  return {
    ...application,
    ...props,
  }
}

export default undefined
