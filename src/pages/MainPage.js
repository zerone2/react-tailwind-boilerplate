import { Link, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import sampleImg from 'assets/images/howtodie.jpg'

const MainPage = observer(() => {
  const history = useHistory()
  return (
    <div>
      <h1>This is Home</h1>
      <img src={sampleImg} alt={'sample img'} />
      <div>
        <Link to={'/test'}>go to react test page</Link>
      </div>
    </div>
  )
})

export default MainPage
