import type { NextPage } from 'next'
import Button from '../components/atoms/Button'

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-2 items-center justify-center'>
      <Button label='Button Variant primary' variant='primary' />
      <Button label='Button Variant secondary' variant='secondary' />
      <Button label='Button Variant danger' variant='danger' />
      <div className='max-w-3xl w-full'>
        <Button label='Button With full width of its container' variant='primary' fullWidth />
      </div>
    </div>
  )
}

export default Home
