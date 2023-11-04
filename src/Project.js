import React from 'react'

export default function Project(props) {
    return (
        <div className='project--container'>
            <video autoPlay loop src={props.video} className='project--video'></video>
            <div className='project--text--container'>
                <h2 className='project--title'>{props.name}</h2>
                <h4 className='project--date'>{props.date}</h4>
                <h4 className='project--technologies'>{props.technologies}</h4>
                <p className='project--desc'>{props.description}</p>
                <p className='project--funfact'>{props.funFact}</p>
            </div>

        </div>
    )
}
