import React from 'react'
import Work from '../../components/work/Work'
import data from './work_data'
const Works = () => {
  return (
    <div className='flex flex-col gap-12 lg:gap-24 my-12'>
      {
        data.map((el, id) => <Work key={id} data={el} />)
      }
    </div>
  )
}

export default Works