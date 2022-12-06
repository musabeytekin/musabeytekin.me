import React from 'react'

const SkillBar = ({title, percent}) => {
  return (
    <div className="skill-bar">
        <div className="skill-bar-title">
            <span>{title}</span>
            <span>%{percent}</span>
        </div>
        <div className="skill-bar-progress">
            <div className="skill-bar-progress-inner" style={{width: `${percent}%`}}></div>
        </div>
    </div>
    
  )
}

export default SkillBar