import AboutSection from '@/components/sub/AboutSection'
import Image from 'next/image'
import { Frontend_skill, Backend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'

export default function About() {

  // Combine and deduplicate skills
  const allSkills = [
    ...Skill_data,
    ...Frontend_skill,
    ...Backend_skill,
    ...Full_stack,
    ...Other_skill
  ].reduce((acc, current) => {
    const x = acc.find(item => item.skill_name === current.skill_name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [] as typeof Skill_data);

  return (
    <div className="relative z-10 pt-32 md:pt-48 flex flex-col items-center gap-20 pb-20 overflow-hidden">
      <AboutSection />

      {/* Creative Skills Graphic */}
      <div className="flex flex-col items-center gap-10 w-full max-w-6xl px-4 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full z-[-1]" />

        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-5">
          Technical Arsenal
        </h2>

        <div className="flex flex-wrap justify-center gap-8 p-10 md:p-14 bg-[#030014]/40 backdrop-blur-md rounded-[3rem] border border-[#7042f88b]/50 shadow-[0_0_30px_rgba(112,66,248,0.15)] max-w-4xl hover:shadow-[0_0_50px_rgba(112,66,248,0.3)] transition-shadow duration-500">
          {allSkills.map((skill, i) => (
            <div key={i} className="relative group flex items-center justify-center p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300" title={skill.skill_name}>
              <Image
                src={skill.Image}
                alt={skill.skill_name}
                width={45}
                height={45}
                className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale-[0.3] group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
