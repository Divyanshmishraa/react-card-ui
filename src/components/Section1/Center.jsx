import Text from './Text'

const Center = (props) => {
    return (
        <div className='h-full w-1/3 shrink-0 overflow-hidden gap-5 rounded-3xl p-5 bg-cover bg-center' style={{ backgroundImage: `url(${props.img})` }}>
            <Text num={props.num} content={props.content} btnText={props.btnText} />
        </div>
    )
}
export default Center
