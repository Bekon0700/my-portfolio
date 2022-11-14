import React from 'react'
import ProgressBar from '../../components/progress-bar/ProgressBar';
import JellyText from '../../utils/jelly-text/JellyText';

const data = [
    {
        id: 1,
        title: 'ReactJS',
        value: 85
    },
    {
        id: 2,
        title: 'NodeJS',
        value: 88
    },
    {
        id: 3,
        title: 'MongoDB',
        value: 70
    },
    {
        id: 4,
        title: 'TailwindCSS',
        value: 75
    },
    {
        id: 5,
        title: 'Python',
        value: 80
    },
    {
        id: 6,
        title: 'JavaScript',
        value: 83
    },
]


const Skills = () => {
    const name = `My, Skills`.split('')
    let i = 0;
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:h-screen w-11/12 mx-auto py-12 lg:py-0'>
            <div className='flex flex-col gap-8 w-11/12 lg:w-2/4'>
                <div>
                    <div className='flex'>
                        {
                            name.map(el => <JellyText key={i++} string={el} />)
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3 text-gray-400 text-lg lg:text-xl'>
                    <p>I have little bit experience in working as a freelancer. I solved data structer and algorithm related problems for several months.</p>
                    <p>But now i focused on web development, I mainly work with ReactJS, NodeJS, MongoDB for database. I have also some knowledge in SQL.</p>
                    <p>For design purpose I use tailwindCSS, and tailwind component library like daisy UI, mamba UI</p>
                </div>
            </div>
            <div className='w-11/12 lg:w-1/2 flex flex-col gap-3'>
                {
                    data.map(el => <ProgressBar key={el.id} color={'success'} title={el.title} value={el.value} />)
                }
            </div>
        </div>
    )
}

export default Skills