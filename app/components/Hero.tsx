import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Saphal from "@/app/assets/Saphal.jpg"

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src={Saphal}
              alt="Saphal Chudal"
              width={128}
              height={128}
              className="mx-auto mb-6 rounded-full object-cover"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Saphal Chudal</h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-6">Aspiring Frontend Developer</p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Building impactful and user-friendly web applications with strong skills in HTML, CSS, JavaScript, and
              React. Committed to continuous learning and contributing to innovative, high-quality solutions.
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
      </div>
    </section>
  )
}
