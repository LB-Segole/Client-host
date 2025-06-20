import { Phone, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-white">VoiceAI</span>
            </div>
            <p className="text-sm leading-relaxed">
              The most advanced AI voice calling platform for businesses and developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <button type="button" className="text-sm hover:text-white bg-transparent border-none p-0 m-0 underline cursor-pointer">
                  Features
                </button>
              </li>
              <li>
                <button type="button" className="text-sm hover:text-white bg-transparent border-none p-0 m-0 underline cursor-pointer">
                  Pricing
                </button>
              </li>
              <li>
                <button type="button" className="text-sm hover:text-white bg-transparent border-none p-0 m-0 underline cursor-pointer">
                  API
                </button>
              </li>
              <li>
                <button type="button" className="text-sm hover:text-white bg-transparent border-none p-0 m-0 underline cursor-pointer">
                  Integrations
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <button type="button" className="text-sm hover:text-white bg-transparent border-none p-0 m-0 underline cursor-pointer">
                  Documentation
                </button>
              </li>
              <li>
                <button type="button" className="text-sm hover:text-white bg-transparent border-none p-0 m-0 underline cursor-pointer">
                  Guides
                </button>
              </li>
              <li>
                <button type="button" className="text-sm hover:text-white bg-transparent border-none p-0 m-0 underline cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button type="button" className="text-sm hover:text-white bg-transparent border-none p-0 m-0 underline cursor-pointer">
                  Support
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-sm">support@voiceai.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} VoiceAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="/cookie-policy" className="text-sm text-gray-400 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};