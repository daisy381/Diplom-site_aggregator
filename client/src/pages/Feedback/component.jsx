import {Button} from "../../shared/components/Button";
import emailjs from 'emailjs-com';
import {useState} from "react";
import {Alert} from "antd";

export const Feedback = () => {
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bz2vzs5', 'template_tie3vyq', e.target, 'jx33FhI9iNzqKr99w')
            .then((result) => {
                console.log(result)
                setSuccess(true)
            }, (error) => {
                console.error(error)
                setError(true)
            });
        e.target.reset();
    };

    return <div className='grid h-screen'>
        <div className="flex items-center justify-center">
            <form className='flex flex-col space-y-4' onSubmit={sendEmail}>
                <h1 className='title'>Обратняя связь</h1>
                <input name='from_name' type="text" placeholder='Имя' className='p-4 rounded-full shadow-blue-200 shadow-md'/>
                <input name='to_name' type="email" placeholder='Email' className='p-4 rounded-full shadow-blue-200 shadow-md'/>
                <textarea name='message' rows={5}  className='p-4 rounded-[30px] resize-none shadow-blue-200 shadow-md' placeholder='Сообщение'/>
                <Button color='bg-secondary' className='text-white p-3 font-bold self-end rounded-full max-w-[150px]'>Отправить</Button>
            </form>
        </div>
        {
            success && (
                <Alert
                    message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                    type="success"
                    closable
                    onClose={setSuccess(false)}
                />
            )
        }
        {
            error && (
                <Alert
                    message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                    type="error"
                    closable
                    onClose={setError(false)}
                />
            )
        }
    </div>
}
