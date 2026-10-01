import Navbar from './Navbar'
import PageContent1 from './PageContent1'

const Section1 = (props) => {
  return (
    <div className="h-[85vh] w-[90vw] p-10 flex flex-col rounded-xl gap-10">
      <Navbar />
      <PageContent1 product={props.product} bg='bg-white' />
    </div>
  )
}

export default Section1
