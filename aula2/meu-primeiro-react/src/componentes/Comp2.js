import React, { useState, useEffect } from 'react';
import { ListaItem } from './ListaItem';

export const Componente2 = props => {

    const [label] = useState('Segundo Componente');
    const [cursos, setCursos] = useState(['React', 'Native', 'Java', 'Php']);

    useEffect(() => {
        console.log('chamou o effect');
        setTimeout(() => {
            const newCursos = [];
            newCursos.push('.Net');
            newCursos.push('Swift');

            setCursos(newCursos);
        }, 3000);

        return console.log('desmontou o effect');
    }, [setCursos]);

    console.log('render')
    return (
        <div>
            <h1 className="fonte">{label}</h1>
            <ul>
                {cursos.map((i, index) => <ListaItem key={index} curso={i} />)}
            </ul>
        </div>
    )
}