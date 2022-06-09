import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course'

const SideBar = ({modules, toggleLesson}) => {
    return (
        <aside>
            { modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {module.lessons.map( lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    )
}

const mapStateToProps = state => ({
    modules: state.course.modules
})

// O que isso faz? --> pega as funnções que existem no CourseActions e disponibiliza pra sr usado no compoenente.
/*
 - Exemplo:
    a função toggleLesson de CourseActions é liberada para ser usada no componente, basta receber como props 
    Lá encima na passagem da props você poderá verificar recebendo e usadno a função.
*/
const mapDispatchToProps = dispatch => 
    bindActionCreators(CourseActions, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);