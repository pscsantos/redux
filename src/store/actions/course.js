export function toggleLesson(module, lesson) {
    return {
        type: 'TOOGLE_LESSON',
        module,
        lesson
    }
}
