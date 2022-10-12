const React = require('react')

class Index extends React.Component{
    render(){
        const pokemons = this.props.pokemon
        return(
        <div style ={styles.container}>
           <h1 style ={styles.header}>See All Your Pokemon</h1>
           <a  style={styles.addBtn }href='/pokemon/new'>  Catch more Pokemon!</a>

           <ul style={styles.links}>
            {pokemons.map((pokemon,idx) => {
                return(
                    <li> <a href={`/pokemon/${pokemon._id}`}> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a> 

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
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    header:{
        color: 'red'
    },

    links:{
        textDecoration: 'none',
        color: 'white',
        fontSize: '22px'
    },
    
    addBtn:{
        padding:'20px',
        backgroundColor:'white',
        borderRadius: '2rem'
    }
}



module.exports = Index