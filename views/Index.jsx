const React = require('react')

class Index extends React.Component{
    render(){
        const pokemons = this.props.pokemon
        return(
        <div style ={styles.container}>
           <h1>See All the Pokemon</h1>

           <ul>
            {pokemons.map((pokemon,idx) => {
                return(
                    <li> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}

                    </li>
                )
            })}
           </ul>
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



module.exports = Index