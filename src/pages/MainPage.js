import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import sampleImg from 'assets/images/howtodie.jpg'

const MainPage = observer(() => {
  const history = useHistory()
  return (
    <div className={'flex flex-col'}>
      <h1>MainPage</h1>
      <img src={sampleImg} alt={'sample img'} />
      <Link to={'/sample'}>
        <button className={'mt-10 bg-blue-300 border-0'}>go to react test page</button>
      </Link>
    </div>
  )
})

export default MainPage
