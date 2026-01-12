import Images from '../Images'
import bannerbg from '/src/assets/bannerbg.png'

const Banner = () => {
  return (
    <div>
        <Images className={"bg-center bg-cover bg-no-repeat"} imgSrc={bannerbg}/>
    </div>
  )
}

export default Banner