import React from 'react'

const AboutSection = () => {
  const skills = {
    Languages: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Solidity', 'SQL','Swift'],
    'Frameworks/Libraries': ['React.js', 'Node.js', 'Next.js', 'Flask', 'Express.js', 'Tailwind CSS', 'Android SDK', 'Three.js', 'Vue.js', 'Angular', 'Svelte', 'Django'],
    'ML/Data': ['TensorFlow', 'PyTorch', 'Supervised Learning', 'Deep Learning', 'Neural Networks', 'pandas', 'scikit-learn', 'Data Visualization'],
    
    'Cloud/DevOps': ['AWS', 'Docker', 'Firebase', 'MongoDB', 'PostgreSQL'],
    'Concepts': ['System Design', 'Data Structures & Algorithms', 'Distributed Systems', 'API Design', 'Microservices', 'Security']
  }

  return (
    <div className="flex flex-col min-h-screen text-white py-20 px-4 md:px-20 relative z-[30]">
      <h1 className="text-5xl font-bold text-center mb-4">About Me</h1>
      <p className="text-gray-400 text-center mb-16">Get to know more about my background and skills</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
          <div className="space-y-4 text-gray-400">
            
            <p>
              I&apos;m Aditya Sahni, a Full Stack Developer and Computer Science undergraduate at McMaster University with a passion for crafting robust, user-centric web applications. I&apos;ve built and scaled e-commerce and healthcare platforms using technologies like React.js, Node.js, Firebase, and MongoDB, delivering intuitive solutions that make a tangible impact.
            </p>
            <p>
              With a solid foundation in algorithms, data structures, and system design, I write efficient, maintainable code and enjoy turning complex technical challenges into elegant, real-world applications. I also have experience integrating cloud-native services like AWS EC2, Lambda, and S3 to build scalable and cost-effective systems.
            </p>
            <p>
              I&apos;m especially interested in the intersection of software development and cloud computing, and I continue to explore how technology can be leveraged to build smarter, faster, and more secure digital solutions.
            </p>


          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-6">

              <div className="p-6 bg-[#1B1B1B] border-2 border-[#5656578b] rounded-lg shadow-[inset_0_0_10px_rgba(70,70,70,0.5)]">
                <h3 className="text-xl font-semibold">Bachelor of Applied Science in Computer Science</h3>
                <p className="text-gray-400">McMaster University </p>
                <p className="text-gray-500">2022 - 2027</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#1B1B1B] border-2 border-[#5656578b] rounded-full text-sm shadow-[inset_0_0_5px_rgba(70,70,70,0.5)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
