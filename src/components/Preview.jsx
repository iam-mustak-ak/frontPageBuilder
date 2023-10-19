import React from 'react'
import { useSelector } from 'react-redux';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';

const Preview = () => {
    const template= useSelector(state=>state.input.template)
  return (
      <div>
          {template=='template1'?<Template1/>:''}
          {template=='template2'?<Template2/>:''}
    </div>
  )
}

export default Preview