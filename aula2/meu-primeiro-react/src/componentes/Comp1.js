import React from 'react';
import { ListaItem } from './ListaItem';

export default class Componente1 extends React.Component{

    constructor(props){
        super(props);
        this.atualizaInputValor = this.atualizaInputValor.bind(this);
        this.limparInput = this.limparInput.bind(this);
    }

    state = {
        label: 'Primeiro Componente',
        cursos: [ 'React', 'Native', 'Java', 'Php'],
        input: 'Texto Inicial'
    }

    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(_ => {
            const newCursos = this.state.cursos;

            newCursos.push('.Net')
            newCursos.push('Swift');

            this.setState({cursos : newCursos})
        }, 4000);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    atualizaInputValor(evento){
        this.setState({input: evento.target.value})
    }

    limparInput(evento){
        evento.preventDefault();
        this.setState({input : ''});
    }

    render(){
        console.log('render');
        var estilo = {
			fontSize: 50,
			color: '#FF0000'
        }

        const {label, cursos, input} = this.state;

        return (
            <div>
                <h1 style={estilo}>{label}</h1>
                <ul>
                    { cursos.map((i, index) => <ListaItem key={index} curso={i} />)}
                </ul>
                <br/>
                <input type="text" name="input" value={input}
                    onChange={this.atualizaInputValor}/>

                <button type="reset" onClick={this.limparInput}>
                        Limpar
                </button>
            </div>
        );
    }
}