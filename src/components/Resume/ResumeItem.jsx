import React from 'react'
import {TiTick} from 'react-icons/ti'
import "./resume.css";
const ResumeItem = ({title, description, attributes, start, end}) => {
  return (
    <div className='resume-item'>
        <h3 className='resume-item-title'>{title}</h3>
        {start && end && <span className='resume-item-date'>{start} - {end}</span>}
        <i>{description}</i>
        <ul className='pt-3'>
            {attributes.map((attribute, index) => (
                <li key={index}>
                    <TiTick className='resume-item-tick'/>
                {attribute}</li>
            ))}
        </ul>

    </div>
  )
}

export default ResumeItem