

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.1 2.794.143v3.24l-1.918.001c-1.504 0-1.796.714-1.796 1.762v2.31h3.591l-.467 3.622h-3.124V24h6.12C23.4 24 24 23.4 24 22.675v-21.35C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              aria-label="Twitter"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.92 4.92 0 002.165-2.717 9.861 9.861 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.946 4.89a4.936 4.936 0 01-2.224.085 4.924 4.924 0 004.599 3.417A9.869 9.869 0 010 21.543a13.935 13.935 0 007.548 2.213c9.058 0 14.01-7.508 14.01-14.01 0-.213-.005-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.015 7.052.07 5.773.126 4.509.403 3.392 1.52 2.276 2.636 1.999 3.9 1.943 5.179.886 8.332.886 15.668 1.943 18.821c.056 1.279.333 2.543 1.449 3.66 1.117 1.116 2.381 1.393 3.66 1.449 1.279.056 1.689.07 4.948.07s3.669-.014 4.948-.07c1.279-.056 2.543-.333 3.66-1.449 1.116-1.117 1.393-2.381 1.449-3.66.056-1.279.07-1.689.07-4.948s-.014-3.669-.07-4.948c-.056-1.279-.333-2.543-1.449-3.66-1.117-1.116-2.381-1.393-3.66-1.449C15.668.015 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>

          {/* Footer Text */}
          <p className="footer-text">
            &copy; 2024 Dreamy Cakes. All rights reserved.
          </p>
          <p className="footer-subtext">Made with ❤️ by Dreamy Cakes Team</p>

          {/* Footer Links */}
          <div className="footer-links">
            <a href="#" className="footer-link">
              Terms of Service
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
