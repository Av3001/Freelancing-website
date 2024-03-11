
function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
            Rust.co is your premier destination for freelance solutions. We bring together top-tier developers, designers, and experts to elevate your projects. Experience innovation, reliability,
             and excellence with Rust.co - where your vision meets unparalleled freelance talent.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
        
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="http://Wa.me/+917696723001"
                className="hover:text-white transition-colors duration-300"
                target="_blank"
              >
                Whatsapp
              </a>
              <a
                href="https://x.com/Avneet3001?t=ZhNj7-2tg2ObgtnZGPUP-A&s=08"
                className="hover:text-white transition-colors duration-300"
                target="_blank"
              >
                X
              </a>
              <a
                href="https://www.instagram.com/_____avneet___?utm_source=qr&igsh=MW9rOTlvMHllOWN3Mw=="
                className="hover:text-white transition-colors duration-300"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>New Delhi, India</p>
            <p>Delhi 110001</p>
            <p>Email: info@rust.co.com</p>
            <p>Phone: +91-7696723001</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Rust.co All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer