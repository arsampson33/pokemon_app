const React = require('react')

class New extends React.Component{
    render(){
        return(
            <div>
                <h1> Create a new Pokemon</h1>
                
                <form action='/pokemon' method='POST'>
                    Name: <input type = 'text' name='name'/><br/>
                    Img: <input type = 'text' name='img'/> <br/>
                    <input type = 'submit' name = '' value='Create pokemon'/>
                </form>
            </div>
        )
    }
}

module.exports = New