import React from 'react'
import type { Props } from 'payload/components/views/Cell'

import './styles.css';

const Logo: React.FC<Props> = (props) => {

  return <img className='customlogo-img' src="/assets/logo.jpg" alt="logo" />
}

export default Logo