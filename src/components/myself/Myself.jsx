import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import TagCloud from 'TagCloud'
import JellyText from '../../utils/jelly-text/JellyText'

const Tags = [
    'JavaScript',
    'CSS',
    'HTML',
    'React',
    'Python',
    'git',
    'Firebase',
    'SASS',
    'JSON',
    'NodeJS',
    'ExpressJS',
    'MVC architecture',
    'TailwindCSS',
    'Machine Learning',
]

const Myself = () => {
    let size = 0;
    if(window.screen.width <= 380){
        size = 110
    }
    else if(window.screen.width <= 550){
        size = 140
    }
    else{
        size = 280
    }
    const IsTagCloudLoaded = useRef(false)
    useEffect(() => {
        if (IsTagCloudLoaded.current) return
        TagCloud('.content', Tags, {
            radius: size,
            maxSpeed: 'fast',
            initSpeed: 'normal',
            direction: 120,
            keep: false,
        })
        IsTagCloudLoaded.current = true
    }, [])

    const name = `My,`.split('')
    const title = `Past, Present and Future`.split('')
    let i = 0;
    return (
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center'>
            <div className='flex flex-col gap-8 lg:w-2/4'>
                <div>
                    <div className='flex'>
                        {
                            name.map(el => <JellyText key={i++} string={el} />)
                        }
                    </div>
                    <div className='flex'>
                        {
                            title.map(el => <JellyText key={i++} string={el} />)
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3 text-gray-400 text-lg lg:text-xl lg:text-justify'>
                    <p>I started programming since I started my undergraduation. I started this glorious journey by basic programming. It was C progamming. I used to solve beginner to intermediate level problems on uri oj and codechef. Then after a while I got my interest in web development.</p>
                    <p>I am confident about my work cause over the year I have learnt a lot. I have done some really good project just to excel my skills. I trust in my problem solving ability, cause I have done and I did it myself. I can do freelance work also</p>
                    <p>I see my future as a team worker who loves to give his team his full potential. I see myself as a person who will work for one of the biggest company for a lot of money.</p>
                </div>
            </div>
            <div>
                <div className='content text-green-300 text-base lg:text-xl font-semibold' />
            </div>
        </div>
    )
}

export default Myself