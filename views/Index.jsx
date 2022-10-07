const React = require('react')

class Index extends React.Component{
    render(){
        return(
        <div style ={styles.container}>
           <h1>See All the Pokemon</h1>
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