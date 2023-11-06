import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import './nav.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import { Button } from 'antd';

export function MyNav() {
    return (
        <nav>
            <div className="nav-container container">
                <Link to={"#"} className='logo'>
                    {/* Design a minimalist logo for a food sales company featuring a stylized image of a plate with a fork and knife crossed behind it and a chili pepper on top. The logo should be enclosed within a circular border. Use a red and white color scheme to convey freshness and hygiene. Include the company name 'Fresh Fare' in a sleek, modern font below the emblem. The overall design should be simple and clear, maintaining its integrity even when scaled down to smaller sizes. */}
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: '64px',
                            height: '64px',
                        }}
                    />
                    <span>Fresh Faire</span>
                </Link>
                <Link to={"/carrinho"}>
                    <Button className='meu-carrinho'>
                        <AiOutlineShoppingCart className="nav-icons" />
                        <span>Meu carrinho</span>
                    </Button>
                </Link>
            </div>
        </nav>
    );
}