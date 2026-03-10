import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">
          <h2>ETHAN RACING</h2>
          <p>
            Official Formula Student Racing Team of
            Vidyavardhini’s College of Engineering & Technology.
          </p>
        </div>


        {/* QUICK LINKS */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/#about">About</Link>
            </li>

            <li>
              <Link href="/sponsors">Sponsors</Link>
            </li>

            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>


        {/* CONTACT */}

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Vidyavardhini's College of Engineering & Technology</p>
          <p>Vasai, Maharashtra, India</p>
          <p>Email: ethanracing@vcet.edu.in</p>
        </div>


        {/* SOCIAL */}

        <div className="social-icons">

  <a href="https://instagram.com">
    <FaInstagram />
  </a>

  <a href="https://linkedin.com">
    <FaLinkedin />
  </a>

  <a href="https://youtube.com">
    <FaYoutube />
  </a>

</div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>© 2026 Ethan Racing. All Rights Reserved.</p>
      </div>

    </footer>
  );
}