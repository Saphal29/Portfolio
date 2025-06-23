export default function Skills() {
  const technicalSkills = [
    "JavaScript",
    "Python",
    "Java",
    "React",
    "React Native",
    "Express.js",
    "HTML",
    "CSS",
    "Node.js",
    "MySQL",
    "JDBC",
  ]

  const softSkills = [
    "Communication Skills",
    "Teamwork & Collaboration",
    "Time Management",
    "Problem Solving",
    "Adaptability & Flexibility",
    "Leadership",
  ]

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h1>
          <p className="text-lg text-gray-600">Technologies and soft skills I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Soft Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-center font-medium hover:bg-green-100 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certification */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">BSC. (Hons) Computing</h3>
              <p className="text-gray-600 mb-2">Itahari International College</p>
              <p className="text-gray-600 mb-2">London Metropolitan University</p>
              <p className="text-sm text-gray-500">Sep 2023 - Present</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AWS Academy Cloud Foundations</h3>
              <p className="text-gray-600 mb-2">Amazon Web Services Training and Certification</p>
              <p className="text-sm text-gray-500">Dec 2, 2024</p>
              <a
                href="https://drive.google.com/file/d/1L1S2DCfmjQZOFftLoqkZMrNUwcDKN6j/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View Certificate →
              </a>
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Career Objective</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            Aspiring frontend developer with strong skills in HTML, CSS, JavaScript, and React, aiming to build
            impactful and user-friendly web applications. Committed to continuous learning and contributing to
            innovative, high-quality solutions that drive organizational success.
          </p>
        </div>
      </div>
    </div>
  )
}
