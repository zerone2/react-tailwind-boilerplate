import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import sampleImg from 'assets/images/howtodie.jpg'

const MainPage = observer(() => {
  const history = useHistory()
  return (
    <div className={'flex flex-col'}>
      <h1 className={'font-bold text-5xl'}>MainPage</h1>
      {/*<img src={sampleImg} alt={'sample img'} />*/}
      This is main
      <button className={'mt-10 bg-blue-300 border-0 py-2 px-5 rounded-md'}><Link to={'/sample'}>go to react test page</Link></button>
    </div>
  )
})

export default MainPage
