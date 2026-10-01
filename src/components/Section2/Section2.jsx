import Navbar from '../Section1/Navbar'
import PageContent1 from '../Section1/PageContent1'

const Section2 = (props) => {
  return (
    <div className="h-[85vh] w-[90vw] p-10 flex flex-col rounded-xl gap-10">
      <Navbar />
      <PageContent1 product={props.product} bg='bg-mauve-200' />
    </div>
  )
}

export default Section2
