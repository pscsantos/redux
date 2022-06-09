const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1, title: 'Início com React',
            lessons: [
                { id: 1, title: 'Primeira aula' },
                { id: 2, title: 'Segunda aula' },
                { id: 3, title: 'Terceira aula' },
            ]        
        },
        {
            id: 2, title: 'Início com Redux',
            lessons: [
                { id: 1, title: 'Primeira aula' },
                { id: 2, title: 'Segunda aula' },
                { id: 3, title: 'Terceira aula' },
            ]  
        }     
    ]
}

export default function course(state = INITIAL_STATE, action) {
    if( action.type === 'TOOGLE_LESSON') {
        return { 
            ...state,
            activeLesson: action.lesson, 
            activeModule: action.module 
        }
    }

    return state;
}