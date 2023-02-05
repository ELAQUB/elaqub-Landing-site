import React, {useState, useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../sass/Footer.scss'
import plane from '../assets/images/paperplane.png'
import elaqub from '../assets/images/ELAQUB.png'


const Footer = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    let text = '';

    if (location.pathname === '/about'){
        text = <h2>Go ahead, join the maiden <span>waiting list</span>. <br />
        Get to be <span>the first</span> to register!!!</h2>
    } else {
        text = <h2>Join now and start your <span>learning</span>. <br />
        Get a <span>certificate</span> too!!!</h2>
    }

    const handleMouseEnter = () => {
        setOpen(true);
      };
    
      const handleMouseLeave = (event) => {
        if (!navRef.current || !navRef.current.contains(event.relatedTarget)) {
          setOpen(false);
        }
      };
  return (
    <div className='footer'>
        <div className="signup">
            <h2>{text}</h2>
            
                <label>
                    <input type="email" name="email" id="email" placeholder="Get started now!" />
                    <Link to='/register'><button type="submit"><img src={plane} alt={'foward key'} /></button></Link>
                </label>
        </div>
        <footer>
            <div className="text">
                <Link to='/'><img src={elaqub} alt={'elaqub logo'} /></Link>
                <br />
                <p>
                    ELAQUB is a fast growing educational platform for Nigerians,
                    aimed at giving out the best forms of self development principles to Nigerian
                    citizens.
                </p>

                <p>For more enquiries, mail us at; <a href="mailto:mailelaqub@gmail.com">mailelaqub@gmail.com</a></p>
            </div>

            <div className="social">
                <nav>
                    <Link to='/about' className={`link`}>About</Link>
                    <Link className={`link`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Courses <i class="fa-solid fa-chevron-right"></i></Link>
                        {open && (
                            <div className="navbar" ref={navRef} onMouseLeave={handleMouseLeave}>
                                <Link to='/' className={`link sib`}>Graphic Design</Link>
                                <Link to='/' className={`link sib`}>Copy Writing</Link>
                                <Link to='/' className={`link sib`}>Web development</Link>
                            </div>
                        )}
                    <Link to='/' className={`link`}>Blog</Link>
                </nav>

                <div className="icon">
                    <a href="https://www.facebook.com/elaqub" target="_blank" rel="noreferrer"><div className="circle"><i class="fa-brands fa-facebook-f fa-2x"></i></div></a>
                    <a href="https://www.youtube.com/channel/UCI3hQVZG1Rz94wccCeOrUlQ"><div className="circle" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube fa-2x"></i></div></a>
                    <a href="https://www.instagram.com/elaqub/" target="_blank" rel="noreferrer"><div className="circle"><i class="fa-brands fa-instagram fa-2x"></i></div></a>
                    <a href="https://www.linkedin.com/company/elaqub/" target="_blank" rel="noreferrer"><div className="circle"><i class="fa-brands fa-linkedin fa-2x"></i></div></a>
                </div>
            </div>
        </footer>

        <hr />

        <div className="rights">
            <p>Copyright @ 2023 ELAQUB. All rights reserved</p>
            <aside>
                <a href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &#x2022;
                <a href="http://" target="_blank" rel="noopener noreferrer"> Terms of Service</a> &#x2022;
                <a href="http://" target="_blank" rel="noopener noreferrer"> Site Notice</a>
            </aside>
        </div>
    </div>
  )
}

export default Footer