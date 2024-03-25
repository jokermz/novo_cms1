import React from 'react'
import type { Props } from 'payload/components/views/Cell';

import './styles.css';

const Icon: React.FC<Props> = (props) => {

  return <img className='customicon-img' src="/assets/logo.jpg" alt="icone" />
}

export default Icon