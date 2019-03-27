import React from 'react'
import { SlideInUp } from '@xyo-network/tool-storybook-react/dist/lib/Animate'
import cx from 'classnames'

export default ({ className, text, icon }) => (
  <div className={cx('mb-4', className)}>
    <div className='text-center pt-5'>
      <SlideInUp>{icon}</SlideInUp>
      <SlideInUp timer={200}>
        <h4 className='mb-0 text-capitalize-first'>{text}</h4>
      </SlideInUp>
    </div>
  </div>
)