import React, { Component } from 'react'

class Author extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: 'Brasilia',
            author: {
                firstName: 'Thiago',
                lastName: 'Oliveira'
            }
        }
    }

    render() {
        return (
            <div>
                <h5>Criado por {this.state.author.firstName} {this.state.author.lastName}.</h5>
            </div>
        )
    }
}

export default Author


