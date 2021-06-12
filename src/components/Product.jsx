import React, { Component } from 'react'

export default class Product extends Component {

    handleUpVote = () => {
        this.props.onVote(this.props.id);
    }

    render() {

        let { id, title, url, productImageUrl, votes, description, submiterrAvartUrl } = this.props
        return (
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className="header">
                        <a onClick={this.handleUpVote}>
                            <i className="large caret up icon">
                                {votes}
                            </i>
                        </a>
                    </div>
                    <div className='description'>
                        <a href={url}>{title} </a>
                        <p>{description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by: </span>
                        <img className='ui avatar image' src={submiterrAvartUrl} />
                    </div>
                </div>
            </div>
        )
    }
}
