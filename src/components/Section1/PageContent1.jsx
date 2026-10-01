import LeftText from './LeftText'
import Right from './Right'

const PageContent1 = (props) => {
  return (
    <div className={`h-full w-full px-5 py-3 flex items-center justify-between rounded-xl ${props.bg}`}>
      <LeftText />
      <Right product={props.product} />
    </div>
  )
}

export default PageContent1