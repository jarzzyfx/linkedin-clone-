
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from '../HeaderOption';
import { useDispatch, useSelector} from 'react-redux';
import { logout, selectUser} from '../features/userSlice';
import { auth } from '../firebase';

function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch() 

  const logOutOfApp = () =>{
    dispatch(logout)
    auth.signOut(user)
  }

  return (
    <div className="header">

        <div className="header_left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8KZsIAVr0AW78AXb/A1O3O3vGvyegAZMHF0+ufvuMAYsEAX8AAXL8AWL4absX2+f0Aa8VdkNHo8PisxedunNYydceBqNvW5PTg6vZNh865zuo2d8jO3PCStN+HrNw/f8tfktJ7pdo9fsvl7vgATruaueG0zOlOhc2Lsd/i1EwsAAAEDElEQVR4nO2dfZfhMBSH0RixSbWlqmowzKyZ/f5fcFl6puQWZ46bSPb3/Nsc9Ujzcm9S6XQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfSfNxFvVcMMrGecovmCeR6rpCRUnOLTiNpDO/AzKacgs69TvAq5i7F9wrMj6oaeL2ET0iE77u5imqkLUSx+560SZqzGaYuXY7kbEZjlyrnRixGfZcq53owRCGMHQODGH4M0N5IFxDqUVWvBZZrK1IWjeUIlkvJ/vrk+Us0wEaynj1Hc6kawtJAMuGKpmfFSozdkW7hjKZXJSasMfJVg2lmBvFyphZ0aph9IsotxLhGMpXqhx3PsemoaCqkL0SLRpKabbCAyXvqGjTsKALMj+mNg2rlpLvoRi25vWqYAzb6vAtFEN6sNgTTjvsXk7Zjsx5Q0Wb42G8IAvmwYyHbV0NbzO0PC9dEuUWzGtUdmOLxCyWckeIduNDbT6nFfcinOUYX2/OC6UVe6rGdp5GF822uEz4c1H2c23RZnjMRaX9sY3dKA7ypUokX9Pt9C0TVtbBneS8pVRa2Up6Y90ChjB0j3+G+25qz/2rc34ZShWP1Gs1rqq3QvYicc/6nOV5aWSibxT4jh6VyLaL7yg6LQfbRN+UtGqoV0OTdUNRr83rg5OiFFXfvEu5Tm4sfNiND4mv2Bk0QnzxaV6fHLePxe9UcLkn3XWvTm6fzHBgXv9nKHur9julm9GVavTDUGXl1Xv9uvKkemGoio8bN1u0dzg+GMqMTkOefUrss6Gm16zOmbXlJD0w/E2nWS8pWp7T5zec37lR+6UlK/n8huntRnikZev88xvezQvd2QRk2LLSGpLhjpy9hWQ4D96QHjCCMtxSleiT4WQ5zAfDK3PwATWv8cYw3b1qEQsR6+667YW7knoTyRfDhRJ17kkK1TaP89hwd7aGIyMiF3CA2tXhh+HiYpFKxvRUjlpu9cIwNUJ4tSELUp2pF4Yz44tLRUb9K08N067ZvOi9qtS8zQfDPhE00HtzqM1HPhhSrUsW1KD4SfwWPhh+EWOA1FRv2ififA8M6T3EI2r25qnhB7mQRn4WlavxwHBOpphiqqinhiVpKKh/g/DUkGpc3a6mBkQYPhYY1sAQhk1g+FhgWANDGDaB4WOBYQ0MYdgEho8FhjUwhGETGD4WGNbAEIZNYPhYYFgDQxg2geFjgWFNUIZ692Lyp/mG5ao0rpf0BnU9Iz4rd70n6kdvyUYt70/eW9SvN51/AgxhCEP3wBCGMHQPn2H4ZwXx/5/8ffCd9xT+mV3hn7sW/tl5z1GJnOcfdjrT1n/jsCfIfkxn4OeQ/gdnyR7PAx6FfB4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAyF8IaWQmD5W4JAAAAABJRU5ErkJggg==" alt="" />

            <div className="header_search">
            <SearchIcon/>

                <input type="text" placeHolder="Search" />
            </div>
        </div>

        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="home"/>
            <HeaderOption Icon = {SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon = {BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon = {ChatIcon} title="Messaging"/>
            <HeaderOption Icon = {NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={true} title="Me" onClick={logOutOfApp}/>
        </div>
    </div>
  )
}

export default Header