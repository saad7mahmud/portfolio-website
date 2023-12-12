import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const linkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px", // Add margin between each link for spacing
  };
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-300">
        <h1 className="text-4xl text-center font-bold ">Contact Info</h1>
        <img src="https://i.ibb.co/NsDtwjh/line.png" alt="" />

        <aside>
          <p className="font-bold text-2xl">Saad Mahmud</p>
          <p>University of Dhaka</p>
          <p>Full Stack Developer</p>
          <a
            href="mailto:saadmahmud123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FaEnvelope />{" "}
            <span style={{ marginLeft: "5px" }}>
              Email: saadmahmud123@gmail.com
            </span>
          </a>
        </aside>
        <nav>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/saad7mahmud/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FaLinkedin /> <span style={{ marginLeft: "5px" }}>LinkedIn</span>
            </a>
            <br />
            <a
              href="https://github.com/saad7mahmud"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FaGithub /> <span style={{ marginLeft: "5px" }}>GitHub</span>
            </a>
            <br />
            <a
              href="https://www.facebook.com/Life.of.SM"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FaFacebook /> <span style={{ marginLeft: "5px" }}>Facebook</span>
            </a>
            <br />
            <a
              href="https://www.instagram.com/saad7mahmud/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FaInstagram />{" "}
              <span style={{ marginLeft: "5px" }}>Instagram</span>
            </a>
            <br />
            <a
              href="https://twitter.com/Saad7Mahmud"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FaTwitter /> <span style={{ marginLeft: "5px" }}>Twitter</span>
            </a>
            <br />
            <a
              href="https://saad-mahmud.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FaGlobe /> <span style={{ marginLeft: "5px" }}>Website</span>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
