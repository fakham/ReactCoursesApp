import React from 'react';
import './CourseForm.css';

const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse}>
            <input type="text" onChange={props.updateCurrent} value={props.current} />
            <button>Add Course</button>
        </form>
    )
}

export default CourseForm;