const React = require('react')
let jpg = '.jpg'
class Show extends React.Component{
    render(){
        const pokemons = this.props.pokemon
        return(
        <div style ={styles.container}>
          <h1>Gotta Catch 'Em All</h1>
          <h2>{pokemons.name}</h2>
          <img src = {pokemons.img.concat(jpg)}></img>
          <br></br>
          <a href = {`/pokemon`}>Back</a>
        </div>
        )
    }
}

const styles = {
    container: {
        color: 'white',
        backgroundColor: 'black'
    }
}



module.exports = Show