import './App.css';
import Botao from './components/Botao';
import './css/style.css'
import {Component} from 'react'

class App extends Component {

 constructor(props) {
  super(props);

  this.state = {
    frase: '',
    caminhoImg: require('./assets/biscoito.png')
  }
  this.quebraBiscoito = this.quebraBiscoito.bind(this);
  this.frases = [
    "A adversidade é um espelho que reflete o verdadeiro eu",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos",
    "Uma bela flor é incompleta sem suas folhas",
    "É mais fácil conseguir o perdão do que a permissão"
  ]
 }

quebraBiscoito() {
  this.setState({caminhoImg : require("./assets/quebrado.jpg")})
  let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
  this.setState({frase: this.frases[numeroAleatorio]})
  setTimeout(() => {
    this.setState({caminhoImg : require('./assets/biscoito.png')})
  }
  , 5000)
} 

 render() {
  return (
    <div className="container">
      <h1>Biscoito da Sorte</h1>
      <img src={this.state.caminhoImg} className="img"/>
      <Botao quebrar={this.quebraBiscoito} nome="quebrar biscoito"/>
      <h3 className="frase">{this.state.frase}</h3>
    </div>
  );
 }
  
}

export default App;
