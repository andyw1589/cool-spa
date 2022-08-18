import React from 'react';
import styled from 'styled-components';

// components
import Card from '../components/Card';
import Button from '../components/Button';
import CodeH1 from '../components/CodeH1';
import CodeH3 from '../components/CodeH3';

// thumbnails
import facelift from '../assets/package_thumbs/facelift.png';  // this is just a meme image
import homeo from '../assets/package_thumbs/homeo.png';  // https://www.cbsnews.com/news/homeopathic-remedies-no-better-than-placebo-study-finds/
import michael from '../assets/package_thumbs/michael.jpg';  // this is also just a meme image

// one-time styling
const CodeH2 = styled.h2`
    font-family: consolas;
`;

class Packages extends React.Component {
    constructor() {
        super();

        // the state will keep track of the total
        this.state = {
            total: 0
        };

        // info of the 3 packages
        this.packages = [
            {
                name: "Hyperreal Facelift",
                description: "Is your face too spherical? Ever wanted to project it onto the hyperplane? Well now you can!",
                price: 10,
                imgSource: facelift
            },
            {
                name: "Homeomorphic Remedies",
                description: "Did you know your body can cure itself? With our remedies we can help your body continuously map to a healthy one!",
                price: 20,
                imgSource: homeo
            },
            {
                name: "Michael",
                description: "He'll stand in the corner and watch.",
                price: 999,
                imgSource: michael
            }
        ]
    }

    render() {
        let { total } = this.state;

        return (
            <div className="mb-5">
                <CodeH1>Packages</CodeH1>
                <CodeH2 className="mb-3">Tax included!</CodeH2>

                {/* packages */}
                <div className="row w-75 mx-auto mb-5">
                    {
                        /* for loop thru the packages */
                        this.packages.map((pkg, i) => (
                            <div className="col" key={i}>
                                <Card>
                                    <h3>{pkg.name}</h3>
                                    <img 
                                        alt="" 
                                        className="rounded mb-2" 
                                        src={pkg.imgSource}
                                        height="auto"
                                        width="300"
                                    ></img>
                                    <p>{pkg.description}</p>
                                    <p>{`Price: ${pkg.price.toString()} permutations`}</p>
                                    <Button 
                                        colour="crimson"
                                        onClick={() => this.setState({
                                            total: total + pkg.price
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
                <CodeH3>Total price: {total} permutations</CodeH3>
            </div>
        );
    }
}

export default Packages;