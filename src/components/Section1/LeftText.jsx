
import Leftcontent from './Leftcontent';
import Arror from './Arror';

const LeftText = (props) => {
    return (
        <div className={`h-full w-1/4 text-5xl font-bold flex flex-col justify-between p-2 ${props.bg}`}>
            <Leftcontent />
            <Arror />
        </div >
    )
}

export default LeftText
