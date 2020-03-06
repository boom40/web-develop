import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/topicList.css';

const TopicList = ({course, changeCurrentCourse }) => {
  const [visibleList, handlVisibleList ] = useState(true)
  return (
    <div className="topicList">
      <div className="topicList__header" onClick={()=> {
        handlVisibleList(!visibleList)
        changeCurrentCourse('')
      }}>
        <h3 className="topicList__title">Semantic Web Page Layout with HTML</h3>
        <img
          src='./icon/arrow.svg'
          alt="arrow"
          className={visibleList ? "topicList__arrow" : "topicList__arrow topicList__arrow-rotate"}/>
      </div>
      {visibleList ? (
        <ul className="topicList__list">
          {course.map(item => (
            <li className="topicList__item" key={item.title}>
              <NavLink to={'/' + item.title}>
                {item.title}
              </NavLink>
            </li>
          ))}
      </ul>
      ) : false}
    </div>
  )
}

export default TopicList