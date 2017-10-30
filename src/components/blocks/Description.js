// @flow
import React, { type Node } from 'react'
import Dd from '../elements/Dd'
import Dl from '../elements/Dl'
import Dt from '../elements/Dt'

const rowDlRule = {
  display: 'flex',
  flexFlow: 'row nowrap',
}

const rowDtRule = {
  minWidth: 192,
}

type Props = {
  children: Node,
  isRow?: boolean,
  term: string,
}

const Description = ({ children, isRow, term, ...props }: Props) => (
  <Dl {...(isRow === true ? rowDlRule : {})} {...props}>
    <Dt {...(isRow === true ? rowDtRule : {})} >{term}</Dt>
    <Dd>{children}</Dd>
  </Dl>
)

Description.defaultProps = {
  isRow: false,
}

export default Description