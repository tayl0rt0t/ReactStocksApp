import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <nav>
            <ul className='flex justify-between mx-20 text-teal-700'>
                
                <Link to='/'>
                    <li className='hover:text-red-300'>Home</li>
                </Link>
                <Link to='/about' className='hover:text-red-300'>
                    <li>About</li>
                </Link>
                <Link to = '/stocks/:symbol' className='hover:text-red-300'><li>Stock Symbol</li>
                </Link>
                <Link to = '/stocks' className='hover:text-red-300'><li>Stocks</li></Link>
                
                
                
            </ul>
        </nav>
    )
}