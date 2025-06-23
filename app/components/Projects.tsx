"use client"

import { useState } from "react"
import { Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubLink: string
  category: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Ryde",
      description:
        "A Mobile Application That Connects Passengers With Drivers Using Their Personal Vehicles For Transportation.",
      technologies: ["React Native", "Nativewind", "Node.js", "MySQL"],
      githubLink: "https://github.com/Saphal29/Ryde.git",
      category: "Mobile",
    },
    {
      id: 2,
      title: "Horizon",
      description: "An E-Commerce Website That Sells Printers To Customers With User-Friendly Interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Saphal29/Horizon.git",
      category: "Web",
    },
    {
      id: 3,
      title: "Kitab-Zone",
      description:
        "A Web-Based Library Management System Designed To Automate Book Tracking, Borrowing, Reserving, And Administrative Tasks For Colleges.",
      technologies: ["HTML", "CSS", "JavaScript", "Java", "JDBC", "MySQL"],
      githubLink: "https://github.com/Saphal29/Kitab-Zone.git",
      category: "Full-Stack",
    },
  ]

  const [filter, setFilter] = useState("All")
  const categories = ["All", "Web", "Mobile", "Full-Stack"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 mb-8">A showcase of my recent work and personal projects</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === category ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{project.category}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
