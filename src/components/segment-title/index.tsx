import React from 'react'

import { Text } from '@base'
import { bemClass } from '@utils'

import './style.scss'

interface segmentTitleProps {
  align?: 'left' | 'right' | 'center'
  className?: string
  subTitleClassName?: string
  children: string | number
  subTitle?: string
  color?: 'black' | 'gray-darker' | 'gray-dark' | 'gray' | 'gray-light' | 'white' | 'primary' | 'secondary' | 'warning'
}

const blk = 'segment-title'
const SegmentTitle = ({ children, align = 'left', className = '', subTitle = '', subTitleClassName = '', color = 'gray-darker' }: segmentTitleProps) => {
  const eltClassName = bemClass([blk, { [`align-${align}`]: !!align }, className])
  return (
    <div className={eltClassName}>
      <Text
        tag="h2"
        fontWeight="bold"
        color={color}
        typography="xxxxl"
      >
        {children}
      </Text>
      {!!subTitle && (
        <Text
          tag="h3"
          typography="xl"
          color={color}
          fontWeight="thin"
          className={bemClass([blk, 'sub', { [`align-${align}`]: !!align }, subTitleClassName])}
        >
          {subTitle}
        </Text>
      )}
    </div>
  )
}

export default SegmentTitle
