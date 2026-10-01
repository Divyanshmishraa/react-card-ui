
import Center from './Center'

const Right = (props) => {
    return (
        <div className='h-full w-3/4 flex justify-center overflow-x-auto gap-3 p-2 ${props.bg}'>
            {props.product.map(function (ele, index) {
                return <Center key={index} num={index + 1} img={ele.img} content={ele.content} btnText={ele.btnText} />
            })}
        </div>
    )
}

export default Right
