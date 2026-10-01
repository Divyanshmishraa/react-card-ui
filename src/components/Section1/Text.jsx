import { MoveRight } from 'lucide-react';

const Text = (props) => {
    console.log(props)
    return (
        <div className='h-full w-full flex flex-col justify-between'>
            <h1 className='bg-white text-black text-3xl h-10 w-10 rounded-full flex justify-center items-center'>{props.num}</h1>
            <div className='p-5 flex flex-col gap-20'>
                <p className='text-white font-normal text-xl'>{props.content}</p>
                <div className='flex justify-between items-center'>
                    <button className='text-xl font-semibold text-center bg-blue-500 text-white px-5 py-1 rounded-full'>{props.btnText}</button>
                    <button className='text-xl font-semibold text-center bg-blue-500 text-white px-2 py-1 rounded-full'>
                        <MoveRight size={32} strokeWidth={1.75} /></button>
                </div>
            </div>
        </div>
    )
}

export default Text
