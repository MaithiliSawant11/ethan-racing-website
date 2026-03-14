import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

  <div className="footer-container">

    <div className="footer-logo">
      <img src="/logo.png" alt="Ethan Racing"/>
    </div>

    <div className="footer-address">
      <h4>Address:</h4>
      <p>
        Team Ethan Pitstop, K.T. Marg,
        Vasai Road W (Shastri Nagar, Vishal Nagar),
        Vasai West, Vasai,
        Maharashtra 401202
      </p>
    </div>

    <div className="footer-contact">
      <h4>Contacts:</h4>
      <p>Email: ethanracing.vcet@gmail.com</p>
      <p>Phone: +91 9665840170</p>
      <p>Fax: 0250-2339486</p>
    </div>

    <div className="footer-links">
      <h4>Links:</h4>
      <p>Vidyavardhini College of Engineering and Technology</p>
      <p>Formula Bharat</p>
    </div>



        {/* SOCIAL */}

        <div className="social-icons">

  <a href="https://www.instagram.com/ethan_racing/">
    <FaInstagram />
  </a>

  <a href="https://in.linkedin.com/company/ethanracing">
    <FaLinkedin />
  </a>

  <a href="https://www.youtube.com/channel/UCGXcJ-z36X7imb2Rh5aYGrQ">
    <FaYoutube />
  </a>

 <a href="https://twitter.com/ethan_racing?lang=en">
    <FaTwitter />
  </a>

   <a href="https://www.facebook.com/TeamEthanRacing/">
    <FaFacebook />
  </a>

   {/* <a href="ethanracing.vcet@gmail.com">
    <FaMail />
  </a> */}

</div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>© 2026 Ethan Racing. All Rights Reserved.</p>
      </div>

    </footer>
  );
}