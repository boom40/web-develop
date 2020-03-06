import React from 'react';
import AsideBlock from './AsideBlock';
import MainBlock from './MainBlock';
import '../styles/aside.css';

const LearnPage = ({ course }) => {

  return (
    <div className="container">
      <AsideBlock course={course}/>
      <MainBlock course={course}/>
    </div>
  )
}

export default LearnPage