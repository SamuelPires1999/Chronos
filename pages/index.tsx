import type { NextPage } from 'next'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Button label='Button Label big as fuck'/>
    </div>
  )
}

export default Home
