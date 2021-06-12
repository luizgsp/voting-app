import React, { Component } from 'react'
import { products } from '../seeds'
import Product from './Product'

export default class ProductList extends Component {

    state = {
        products: [],
    }

    handleProductUpVote(id){
        console.log(`Foi votado o produto com id:${id}`)
    }

    componentDidMount(){
        this.setState({
            products: products,
        })
    }

    render() {
        const sortedProducts = this.state.products.sort((a, b) => b.votes - a.votes)
        const productComponents = sortedProducts.map( product => (
            <Product 
                    key               ={'product-'+product.id}
                    id                ={product.id}
                    title             ={product.title}
                    description       ={product.description}
                    url               ={product.url}
                    votes             ={product.votes}
                    submiterrAvartUrl ={product.submitterAvatarUrl}
                    productImageUrl   ={product.productImageUrl}
                    onVote            ={this.handleProductUpVote}
                />
        ))
        //const produtc = products[0];
        return (
            <div className="ui unstackable items">
                {productComponents}
            </div>
        )
    }
}
