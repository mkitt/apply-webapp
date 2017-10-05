// @flow
import React from 'react'
import { Div } from 'glamorous'
import ApplicantEvaluationContainer from '../containers/ApplicantEvaluationContainer'
import PageTitle from '../components/blocks/PageTitle'

export default() => (
  <Div>
    <PageTitle>Values Evaluation</PageTitle>
    <ApplicantEvaluationContainer />
  </Div>
)
