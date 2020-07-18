const INITIAL_STATE = {
    cursos: [{_id: 1, codigo: 9999, descricao: 'Curso teste'}]
}

const TYPE_CURSOS = 'TYPE_CURSOS';
export const TYPE_CURSOS_SET_LIST = TYPE_CURSOS +'_SET_LIST';

export default function(state = INITIAL_STATE, acao){
    switch(acao.type){
        case TYPE_CURSOS_SET_LIST : return {...state, cursos: acao.value};
        default: return state;
    }
}