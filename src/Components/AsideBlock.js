import React, { useState } from 'react';
import TopicList from './TopicList';

const AsideBlock = React.memo(({ course }) => {
  const [currentCourse, changeCurrentCourse] = useState('')

  const searchTopic = (arr, search) => (
    arr.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <aside className="aside">
      <h2 className="aside__title">Learn HTML, CSS, and JavaScript from Scratch</h2>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search Course"
          value={currentCourse}
          onChange={(event) => changeCurrentCourse(event.target.value.trimLeft())}
        />
        <img src="./icon/search.svg" className="search__icon" alt="search"/>
      </div>
      <TopicList course={searchTopic(course, currentCourse)} changeCurrentCourse={changeCurrentCourse} />
    </aside>
  )
})

export default AsideBlock