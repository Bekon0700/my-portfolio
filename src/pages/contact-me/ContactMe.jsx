import React from 'react'
import { useRef } from 'react';
import JellyText from '../../utils/jelly-text/JellyText';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactMe = () => {
    const formRef = useRef()
    const name = `Contact Me`.split('')
    let i = 0;

    const sendMail = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_serivceID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                toast('Message sent successfully!',
                    {
                        style: {
                            borderRadius: '2px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                );
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:h-screen w-11/12 mx-auto py-10 lg:py-0'>
            <div className='flex flex-col gap-8 w-11/12 lg:w-2/4'>
                <div>
                    <div className='flex'>
                        {
                            name.map(el => <JellyText key={i++} string={el} />)
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3 text-gray-400 text-lg lg:text-xl'>
                    <p>I am interested in freelance opportunities, Feel free to contact me.</p>
                </div>
                <div className='text-gray-200 text-base'>
                    <p>Chandrima Model Town, Mohammadpur, Dhaka, Bangladesh</p>
                    <p>+88 01856493398</p>
                </div>
            </div>
            <div className='w-11/12 lg:w-1/2 flex flex-col gap-3'>
                <form ref={formRef} onSubmit={sendMail} className='flex flex-col gap-2'>
                    <div className='flex w-full gap-2'>
                        <input type="text" name="user_name" placeholder='Name' className='w-1/2 bg-stone-700 p-2 outline-none text-gray-400 font-medium' required />
                        <input type="text" name="user_email" placeholder='Email' className='w-1/2 bg-stone-700 p-2 outline-none text-gray-400 font-medium' required />
                    </div>
                    <input type="text" name="contact_number" placeholder='Phone Number' className='w-full bg-stone-700 p-2 outline-none text-gray-400 font-medium' required />
                    <input type="text" name="subject" placeholder='Subject' className='w-full bg-stone-700 p-2 outline-none text-gray-400 font-medium' required />
                    <textarea name="message" placeholder='message' className='w-full bg-stone-700 p-2 outline-none text-gray-400 font-medium' required />
                    <button className='border border-cyan-200 py-2 text-lg font-medium text-gray-400 hover:text-white hover:border-green-300  hover:ease-in duration-500' type="submit">send message!</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe