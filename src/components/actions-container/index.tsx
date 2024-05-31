import { bemClass } from '@utils';
import React, { ReactElement, ReactPortal } from 'react'

import "./style.scss"

export interface actionContainerProps {
  children: string | number | ReactElement | ReactElement[] | ReactPortal | boolean | null | undefined
  className?: string
}

const blk = 'actions-container';
const ActionsContainer = ({ children, className }: actionContainerProps) => (
  <section className={bemClass([blk, {}, className])}>{children}</section>
);

export default ActionsContainer