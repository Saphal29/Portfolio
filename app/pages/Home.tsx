import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import Image from "next/image"
import Saphal from "@/app/assets/Saphal.jpg"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src={Saphal}
                alt="Saphal Chudal"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">{t("home.greeting")}</h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-6">Aspiring Frontend Developer</p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              {t("home.description")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>Biratchowk, Nepal</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={20} />
              <span>saphalchudal29@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {t("home.button")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              {t("contact.title")}
            </Link>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/saphal29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/saphalchudal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Quick Overview Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("skills.education")}</h3>
            <p className="text-gray-600">{t("skills.education_degree")}</p>
            <p className="text-sm text-gray-500">{t("skills.education_university")}</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("skills.focus")}</h3>
            <p className="text-gray-600">{t("skills.focus_description")}</p>
            <p className="text-sm text-gray-500">{t("skills.focus_tech")}</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("skills.projects_title")}</h3>
            <p className="text-gray-600">{t("skills.projects_count")}</p>
            <p className="text-sm text-gray-500">{t("skills.projects_types")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
