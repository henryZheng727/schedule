import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import LibraryCourse from './libraryCourse';

class Library extends Component {

    componentWillMount() {
        this.props.fetchCourses()
    }

    renderCourses() {
        const data = this.props.courses

        return data.mapcourse ((course, index) => {
            return <LibraryCourse key={index}/>
        })
    }

    render() {
        return (
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                {this.renderCOurses()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    courses: state.courses
}

export default connect(mapStateToProps, actions)(Library);