import { connect } from 'react-redux'

function Video({activeLesson, activeModule }) {
    return (
        <div>
            <strong>Módulo {activeModule.title}</strong>
            <span>Aula {activeLesson.title}</span>
        </div>
    );
}

export default connect( state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule
}))(Video);