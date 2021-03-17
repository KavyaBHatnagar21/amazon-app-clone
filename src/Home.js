import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
    
            <div className="home">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB657651956_.jpg"
                alt="banner" />
                
                {/* product id, title, price, rating, image */}
                <div className="home__row">
                    <Product 
                        id="123456"
                        title="AmazonBasics Narrow Ruled 5 x 8-Inch Writing Pad - Canary (50 sheets per pad, 12 pack)"
                        price={379}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81YeOYMFZuL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                     <Product 
                        id="123456"
                        title="Amazon Brand - Solimo Revolving Spice Rack set (16 pieces)"
                        price={800}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51hFntmRocL.jpg"
                    />
                    </div>
                    <div className="home__row">
                    <Product 
                        id="123456"
                        title="Popsugar Baby's First Blocks | Shape sorter, Colors, ABCD, Blue"
                        price={750}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61fQ7O%2BB9EL._SL1000_.jpg"
                    />
                     <Product 
                        id="123456"
                        title="boAt Rockerz 335 Wireless Neckband with ASAP Charge, Up to 30H Playback, Qualcomm aptX & CVC, Enhanced Bass, Metal Control Board, IPX5, Type C Port, Bluetooth v5.0, Voice Assistant(Ocean Blue)"
                        price={1599}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61c330VdIHL._SL1500_.jpg"
                    />

                    <Product 
                        id="123456"
                        title="AmazonBasics Kid's Bed-in-a-Bag - Soft, Easy-Wash Microfiber - Full/Queen, Multi-Color Zoo Animals"
                        price={3359}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81gDi3+nrJL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    </div>

                    <div className="home__row">
                    <Product 
                        id="123456"
                        title="AmazonBasics Mesh Desk Organizer, Black"
                        price={479}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81NpfftEBDL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    
                    </div>
                </div>
        
    )
}

export default Home;
