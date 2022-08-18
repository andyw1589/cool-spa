import { Link } from 'react-router-dom';

import spaImage from '../assets/spa.jpg'; // https://www.flickr.com/photos/uniquehotelsgroup/5690929543

// components
import Card from '../components/Card';
import CodeH1 from '../components/CodeH1';
import Button from '../components/Button';

const Home = () => {
    return (
        <div className="mb-5">
            <Card>
                <CodeH1 className="pb-3">Welcome to our amazing spa!</CodeH1>
                <img 
                    width="50%" 
                    height="auto" 
                    alt="Our spawesome spa!" 
                    src={spaImage} 
                    className="rounded"
                ></img>

                {/* main paragraph */}
                <div className="w-75 my-4 mx-auto">
                    <p className="lead">Tired of those pesky Galois goblins always stealing your hypercubes? 
                        Can't sleep because your blanket is all manifolded up? Come on down to ℂ𝕆𝕆𝕃 𝕊ℙ𝔸! The best (and only) 
                        relaxation spa here in the fourth dimension! With our great products and packages, you'll 
                        be sure to relax and unwind!
                    </p>
                </div>

                {/* buttons */}
                <div className="col w-25 mx-auto">
                    <Link to="/packages" className="row mb-3 text-decoration-none">
                        <Button colour="crimson">Check out our packages!</Button>
                    </Link>
                    <Link to="/products" className="row text-decoration-none">
                        <Button colour="darkgreen">Check out our products!</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}

export default Home;