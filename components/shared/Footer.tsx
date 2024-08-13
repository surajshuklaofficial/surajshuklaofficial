import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa"; // Make sure to install react-icons

export function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialMedia = [
    { name: "GitHub", href: "https://github.com/surajshuklaofficial", icon: FaGithub },
    { name: "Twitter", href: "https://x.com/surajshukla___", icon: FaTwitter },
    { name: "Instagram", href: "https://www.instagram.com/surajshukla5604", icon: FaInstagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/surajshuklaofficial", icon: FaLinkedinIn },
    { name: "YouTube", href: "https://www.youtube.com/@cybetheus", icon: FaYoutube },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {socialMedia.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <platform.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Suraj Shukla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
