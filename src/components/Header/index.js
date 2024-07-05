import {Avatar} from '@adobe/react-spectrum'
import './index.css'

const Header = () => (
    <div className='header-container'>
        <h1>hava havai</h1>
        <Avatar
            src="https://i.imgur.com/kJOwAdv.png"
            alt="avatar with custom size"
            size={50}
        />
    </div>
)

export default Header