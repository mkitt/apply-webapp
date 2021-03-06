// @flow
import React, { type Node } from 'react'
import { css } from 'glamor'
import Modal from 'react-modal'
import { isNotNil } from '../../lib/utils'
import { ZZZ } from '../../constants/theme'

type Props = {
  children: Node,
  isOpen: boolean,
  onRequestClose: () => {}
}

const overlayRules = css({
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: 32,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  zIndex: ZZZ.MODAL,
})

const modalRules = css({
  overflow: 'auto',
  backgroundColor: 'transparent',
  outline: 0,
})

// @see: https://github.com/reactjs/react-modal#app-element
if (isNotNil(document)) {
  Modal.setAppElement('body')
}

export default (props: Props) => (
  <Modal
    bodyOpenClassName="scrollIsDisabled"
    className={`${modalRules}`}
    contentLabel="Modal"
    overlayClassName={`${overlayRules}`}
    shouldReturnFocusAfterClose={false}
    {...props}
  >
    {props.children}
  </Modal>
)

