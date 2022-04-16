import './Navigation.css'
import logo from '../../../Images/logo.png'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-white fw-bolder fs-5" aria-current="" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white fw-bolder fs-5" aria-current="page" href="#">Service</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white fw-bolder fs-5" aria-current="page" href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white fw-bolder fs-5" aria-current="page" href="#">About</a>
                    </li>
               </ul>
            <button className="btn btn-outline-danger" type="submit">Log In</button>
      </div>
  </div>
</nav>
    );
};

export default Navigation;