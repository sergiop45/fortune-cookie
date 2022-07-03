import {Component} from 'react';
import '../css/botao.css'

class Botao extends Component {

    render() {
        return(
            <div>
                <button className='btn' onClick={this.props.quebrar}>{this.props.nome}</button>
            </div>
        );
    }
}

export default Botao;