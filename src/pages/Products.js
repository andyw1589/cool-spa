import React from 'react';

// components
import Card from '../components/Card';
import Button from '../components/Button';
import CodeH1 from '../components/CodeH1';
import CodeH3 from '../components/CodeH3';

class Products extends React.Component {
    constructor() {
        super();

        // the state will keep track of the total
        this.state = {
            total: 0
        };

        // info of the products
        this.products = [
            {
                name: "Homeomorphic Pills",
                description: "The pills used in our homeomorphic package can now be used at home!",
                price: 2,
                colour: "lightskyblue"
            },
            {
                name: "Isomorphic Exercise Guidebook",
                description: "Now you can, too, stretch your calves on the windowsill.",
                price: 15,
                colour: "orange"
            },
            {
                name: "C-Infinity Cream",
                description: "Your skin can now be super smooth!",
                price: 99,
                colour: "orchid"
            },
            {
                name: "Cool Spa",
                description: "I can finally retire...",
                price: 2147483647,
                colour: "slategrey"
            },
        ]
    }

    render() {
        let { total } = this.state;

        return (
            <div className="mb-5">
                <CodeH1 className="mb-3">Buy our Products</CodeH1>

                {/* products */}
                <div className="row w-75 mx-auto mb-5 text-light">
                    {
                        /* for loop thru the products */
                        this.products.map((prod, i) => (
                            <div className="col" key={i}>
                                <Card bgColour={prod.colour}>
                                    <h3>{prod.name}</h3>
                                    <p>{prod.description}</p>
                                    <p>{`Price: ${prod.price.toString()} permutations`}</p>
                                    <Button 
                                        colour="darkgreen"
                                        onClick={() => this.setState({
                                            total: total + prod.price
                                        })
                                    }>
                                        Purchase
                                    </Button>
                                </Card>
                            </div>
                        ))
                    }
                </div>

                {/* Price total */}
                <CodeH3>Subtotal: {total} permutations</CodeH3>
                <CodeH3>Total (after tax): {(total * 1.13).toFixed(2)} permutations</CodeH3>
            </div>
        );
    }
}

export default Products;