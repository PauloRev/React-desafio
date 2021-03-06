import React, { Component } from 'react'
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'

import { ListStyle, AreaBtn } from './styled'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.delete = this.delete.bind(this)
    }

    delete(key) {
        this.props.delete(key)
    }

    render() {
        return (
            <div>
                <ListStyle>
                    {
                        this.props.data.map(client => {
                            return (
                                <li key={client.key}>{client.name} <AreaBtn>
                                    <button>
                                        <FaPencilAlt id="updateBtn" />
                                    </button>
                                    <button onClick={() => this.delete(client.key)}>
                                        <FaRegTrashAlt id="deleteBtn" />
                                    </button>
                                </AreaBtn>
                                </li>
                            )
                        })
                    }
                </ListStyle>
            </div>
        )
    }
}

export default List