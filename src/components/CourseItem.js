import React, {Fragment, Component} from 'react';
import './CourseItem.css';

class CourseItem extends Component {

    state = {
        isEdit: false
    }

    showItem = () => {
        return (
            <li>
                <span>{this.props.course.name}</span>
                <button onClick={ () => this.props.deleteCourse(this.props.index) }>Delete</button>
                <button onClick={this.toggleForm}>Edit</button>
            </li>
        )
    }

    showForm = () => {
        return (
            <form onSubmit={this.updateCourse} className="edit">
                <input type="text" defaultValue={this.props.course.name} ref={ (v) => this.input = v } />
                <button>Update</button>
            </form>
        )
    }

    toggleForm = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    updateCourse = (e) => {
        e.preventDefault();
        const name = this.input.value;
        this.props.editCourse(this.props.index, name);
        this.toggleForm();
    }

    render() {
        return (
            <Fragment>
                { this.state.isEdit ? this.showForm() : this.showItem() }
            </Fragment>
        )
    }

}

export default CourseItem;