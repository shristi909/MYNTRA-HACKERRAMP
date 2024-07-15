import { useNavigate } from "react-router-dom";
import "../App.css"
function FirstComp() {
  const nav = useNavigate();
  const Redirect = ()=>{
    console.log("Clicked");
    nav("/home");
  }

  return (
    <div className="container">
      <header className="top-bar">
        <div className="logo-box">
          <div className="logo">
            fwd
            <span className="dropdown-icon"></span>
          </div>
        </div>
        <button className="insider">
          <span>BECOME</span>
          <span>INSIDER</span>
        </button>
        <button className="build-my-fit" onClick={Redirect}>
          <span>BUILD</span>
          <span>MY FIT</span>
        </button>
        <div className="search-bar">
          <input type="text" placeholder="Search for brands and products" />
          <span className="search-icons">
            <span className="camera-icon">
              <i className="fas fa-camera"></i>
            </span>
            <span className="mic-icon">
              <i className="fas fa-microphone"></i>
            </span>
          </span>
        </div>
        <div className="icons">
          <span className="bell-icon">
            <i className="far fa-bell"></i>
          </span>
          <span className="heart-icon">
            <i className="far fa-heart"></i>
          </span>
          <span className="bag-icon">
            <i className="fas fa-shopping-bag"></i>
          </span>
        </div>
      </header>

      <nav className="navigation">
        <div className="nav-header">
          <div className="nav-item active">
            <span>Men</span>
          </div>
          <div className="nav-item">
            <span>Women</span>
          </div>
        </div>
        <div className="nav-body">
          <div className="nav-category">
            <img src="https://i.ibb.co/VV2f3KM/Stories2.jpg" alt="New" />
          </div>
          <div className="nav-category">
            <img src="https://i.ibb.co/KLZggzK/8a8fdd96-38a3-43e2-9256-76bebdc88bec.jpg" alt="Tops" />
          </div>
          <div className="nav-category">
            <img src="https://i.ibb.co/xKv5QqJ/New-Look-Women-s-Plus-Size-Off-White-Border-Patterned-Mini-Shirt-Dress-Curves-UK-22.jpg" alt="T-Shirts" />
          </div>
          <div className="nav-category">
            <img src="https://i.ibb.co/W0LdBBX/Women-s-Men-s-Clothing-Shop-Online-Fashion.jpg" alt="Dresses" />
          </div>
          <div className="nav-category">
            <img src="https://i.ibb.co/N9dS3pv/2357228748-62-LOVE-REPUBLIC-2-499.jpg" alt="Bottoms" />
          </div>
        </div>
        
        <div className="nav-labels">
          <div className="nav-category-label">
            <span>NEW</span>
          </div>
          <div className="nav-category-label">
            <span>TOPS</span>
          </div>
          <div className="nav-category-label">
            <span>T-SHIRTS</span>
          </div>
          <div className="nav-category-label">
            <span>DRESSES</span>
          </div>
          <div className="nav-category-label">
            <span>BOTTOMS</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default FirstComp;