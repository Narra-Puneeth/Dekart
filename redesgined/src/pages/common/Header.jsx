import "./header.css"
import { nav } from "../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <h1 style={{color:'green'}}> <i className="fa fa-shop" style={{fontSize:'30px',marginRight:'8px'}}></i>DeKart</h1>
          </div>
          <div className='nav'>
            <ul className='flex'>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <button className='btn1'>
               Metamask
            </button>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header