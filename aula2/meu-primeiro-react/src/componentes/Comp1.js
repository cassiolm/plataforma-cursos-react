import React from 'react';
import { ListaItem } from './ListaItem';

export default class Componente1 extends React.Component{

    state = {
        label: 'Primeiro Componente',
        cursos: [ 'React', 'Native', 'Java', 'Php']
    }

    componentDidMount(){
        setTimeout(_ => {
            const newCursos = this.state.cursos;

            newCursos.push('.Net')
            newCursos.push('Swift');

            this.setState({cursos : newCursos})
        }, 4000);
    }

    render(){
        var estilo = {
			fontSize: 50,
			color: '#FF0000'
        }

        const {label, cursos} = this.state;

        return (
            <div>
                <h1 style={estilo}>{label}</h1>
                <ul>
                    { cursos.map(i => <ListaItem curso={i} />)}
                </ul>
            </div>
        );
    }
}