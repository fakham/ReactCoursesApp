import React, { Component } from 'react';
import './App.css';
import CourseItem from './components/CourseItem';
import CourseForm from './components/CourseForm';

class App extends Component {

  state = {
    courses: [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'JS'}
    ],
    current: ''
  }

  updateCurrent = (e) => {
    let {current} = this.state;
    current = e.target.value;
    this.setState({
      current
    })
  }

  addCourse = (e) => {
    e.preventDefault();

    let {courses, current} = this.state;

    courses.push({
      name: current
    })

    this.setState({
      courses,
      current: ''
    })
  }

  deleteCourse = (index) => {
    let {courses} = this.state;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  editCourse = (index, name) => {
    let {courses} = this.state;
    courses[index].name = name;
    this.setState({
      courses
    })
  }

  render() {

    const items = this.state.courses.map( (course, index) => {
      return (
        <CourseItem key={index} course={course} deleteCourse={this.deleteCourse} index={index} editCourse={this.editCourse} />
      )
    })

    return (
      <div className="App">
        <h2>Courses List</h2>
        <CourseForm updateCurrent={this.updateCurrent} addCourse={this.addCourse} current={this.state.current} />
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default App;
