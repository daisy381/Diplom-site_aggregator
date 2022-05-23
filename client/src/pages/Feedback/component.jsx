import {Button} from "../../shared/components/Button";

export const Feedback = () => {
    return <div className='grid h-screen'>
        <div className="flex items-center justify-center">
            <form className='flex flex-col space-y-4'>
                <h1 className='title'>Обратняя связь</h1>
                <input type="text" placeholder='Имя' className='p-4 rounded-full shadow-blue-200 shadow-md'/>
                <input type="email" placeholder='Email' className='p-4 rounded-full shadow-blue-200 shadow-md'/>
                <textarea rows={5}  className='p-4 rounded-[30px] resize-none shadow-blue-200 shadow-md' placeholder='Сообщение'/>
                <Button color='bg-secondary' className='text-white p-3 font-bold self-end rounded-full max-w-[150px]'>Отправить</Button>
            </form>
        </div>
    </div>
}
