import React, { ElementType, HTMLAttributes, memo, ReactElement } from 'react'

import { bemClass } from '@utils';

import './style.scss'

const blk = 'text'

export interface TextProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag: ElementType
  children: ReactElement | ReactElement[] | string | number | null | undefined
  typography?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl'
  fontWeight?: 'thinnest' | 'thin' | 'normal' | 'semi-bold' | 'bold'
  color?: 'black' | 'gray-darker' | 'gray-dark' | 'gray' | 'gray-light' | 'white' | 'primary' | 'secondary' | 'warning'
  className?: string
}

const Text = ({ tag: Tag, children, typography = 'm', fontWeight = 'normal', color = 'gray-dark', className = '' }: TextProps) => {
  const eltClass = bemClass([
    blk,
    {
      [color]: !!color,
      [fontWeight]: !!fontWeight,
      [typography]: !!typography,
    },
    className,
  ])

  return (
    <Tag
      className={eltClass}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

export default memo(Text)
