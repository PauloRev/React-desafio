import React, { Component } from 'react'

import { Container, FormClient, Title } from './styled'

import ClientList from '../ClientList'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameClient: '',
            clientList: []
        }
        this.addClient = this.addClient.bind(this)
        this.deleteClient = this.deleteClient.bind(this)
    }

    // Adicionar cliente
    addClient(e) {
        let state = this.state
        if(this.clientInput.value !== "") {
            let newClient = {
                name: this.clientInput.value,
                key: Date.now()
            }
            this.setState({ clientList: [ ...state.clientList, newClient ] })
        }

        e.preventDefault()
        this.setState({ nameClient: '' })
    }

    // Deletar cliente
    deleteClient(key) {
       let clientFilter = this.state.clientList.filter(client => {
           return client.key !== key
       })

       this.setState({ clientList: clientFilter })
    }

    render() {
        return (
            <Container>
                <FormClient onSubmit={this.addClient}>
                    <input type="text" value={this.state.nameClient} onChange={e => this.setState({ nameClient: e.target.value })} placeholder="Nome do cliente..." ref={e => this.clientInput = e} />
                    <button type="submit">Salvar</button>
                </FormClient>
                <Title>Lista de Clientes</Title>
                <ClientList data={this.state.clientList} delete={this.deleteClient} />
            </Container>
        )
    }
}

export default List