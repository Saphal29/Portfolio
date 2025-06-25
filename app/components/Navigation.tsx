"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const navItems = [
    { name: "home", path: "/" },
    { name: "skills", path: "/skills" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Saphal Chudal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path) ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {t(`navigation.${item.name}`)}
              </Link>
            ))}
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded-md text-sm ${
                  i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("np")}
                className={`px-3 py-1 rounded-md text-sm ${
                  i18n.language === "np" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                NP
              </button>
              <button
                onClick={() => changeLanguage("fr")}
                className={`px-3 py-1 rounded-md text-sm ${
                  i18n.language === "fr" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-left py-2 transition-colors ${
                    isActive(item.path) ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {t(`navigation.${item.name}`)}
                </Link>
              ))}
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-1 rounded-md text-sm ${
                    i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("np")}
                  className={`px-3 py-1 rounded-md text-sm ${
                    i18n.language === "np" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  NP
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className={`px-3 py-1 rounded-md text-sm ${
                    i18n.language === "fr" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}