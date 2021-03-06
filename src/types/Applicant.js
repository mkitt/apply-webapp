// @flow
import { camelize } from 'humps'
import { compose, head, last, prop, split } from 'ramda'
import { isNotNil } from '../lib/utils'
import type { Application } from './Application'

export default undefined

export type Applicant = {
  id: ID,
  applications: Array<Application>,
  birthDate: ?string,
  createdAt: DateTime,
  email: string,
  githubId: string,
  facebookId: string,
  login: string,
  name: string,
  referredBy: ?string,
  startDate: ?DateTime,
  updatedAt: DateTime,
  // derived...
  firstName: string,
  lastName: string,
  loginLink: ?string,
}

// -------------------------------------
// Derived helpers

export const deriveFirstName = compose(
  head,
  split(' '),
  prop('name'),
)

export const deriveLastName = compose(
  last,
  split(' '),
  prop('name'),
)

export const deriveLoginLink = (applicant: Applicant) => {
  if (isNotNil(applicant.githubId)) {
    return `https://github.com/${applicant.login}`
  } else if (isNotNil(applicant.facebookId)) {
    return `https://facebook.com/${applicant.login}`
  }
  return null
}

// -------------------------------------
// For testing content
export const stub = (props: Applicant) => {
  const firstName = (props != null && props.firstName) || 'Kenny'
  const lastName = (props != null && props.lastName) || 'Bania'
  const name = `${firstName} ${lastName}`
  const camel = camelize(name)
  const applicant = {
    id: camel,
    applications: [],
    birthDate: '06/06/2006',
    createdAt: '2010-10-31T12:12:12.000Z',
    email: 'kenny.bania@example.com',
    githubId: '1000',
    facebookId: null,
    login: camel,
    name,
    referredBy: 'Simon Taranto',
    startDate: null,
    updatedAt: '2010-12-24T24:24:24.000Z',
    // derived data...
    firstName,
    lastName,
    loginLink: `https://github.com/${camel}`,
  }
  return {
    ...applicant,
    ...props,
  }
}
