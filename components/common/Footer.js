import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Divine Pearls Solutions'img='/images/logo.svg' width={80} height={80} />
              <br />
              <span>
                16192 Coastal Highway Lewes, DE 19958
              </span>
              <br />
              <br />
              {/* <h3>+1 001 234 5678</h3> */}
              <br />
              <button className='button-primary'><Link href='/contact'>Request for quote</Link></button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About agency</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/services'>Database Services Email List</Link>
              </li>
              <li>
                <Link href='/services'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/services'>E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal-connect-py'>
            <div className='text'>
              <span>© 2024 ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect copywrite'>
              <span>DIVINE PEARLS SOLUTIONS COMPANY</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
