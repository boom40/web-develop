import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/mainBlock.css';

const MainBlock = ({ course }) => {

  return (
    <main className="main">
      <Switch>
        <Route path="/" exact render={()=>(
          <h2 className="main__title">HTML Tutorial</h2>
        )}/>
        {course.map((item, index) => (
          <Route path={'/' + item.title} key={index} render={()=> (
            <>
              <h2 className="main__title">{item.title}</h2>
              <p className="main__text">{item.text}</p>
            </>
          )}/>
        ))}
      </Switch>
    </main>
  )
}
export default MainBlock