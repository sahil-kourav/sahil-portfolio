import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  ArrowUpRight,
  MapPin,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { experiences } from "@/assets/assets";

export default function ProfessionalJourney({ isDarkMode }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="experience"
      className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block mb-2 text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
          Where I’ve Worked
        </span>
        <h2 className="text-5xl font-Ovo font-semibold text-gray-800 dark:text-white">
          My Experience
        </h2>
        <p className="max-w-2xl mx-auto mt-5 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
          An overview of my roles and responsibilities, highlighting the
          real-world projects and technologies I’ve worked with throughout my
          development journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="space-y-12">
          {experiences.map(
            (
              {
                id,
                role,
                company,
                location,
                period,
                duration,
                type,
                description,
                achievements,
                tags,
              },
              idx,
            ) => (
              <div
                key={id}
                className={`relative w-full ${
                  idx % 2 === 0 ? "md:pr-[5%]" : "md:pl-[5%]"
                }`}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card wrapper */}
                <div
                  className={`w-full ${idx % 2 === 0 ? "md:mr-0" : "md:ml-10"}`}
                >
                  <div
                    className={`group border border-gray-400 dark:border-gray-700 rounded-xl
                  px-5 py-6 md:px-8 md:py-8
                  bg-white dark:bg-transparent
                  hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5
                  hover:bg-lightHover dark:hover:bg-darkHover
                  hover:-translate-y-1 duration-500 cursor-pointer
                  ${
                    hoveredId === id
                      ? "border-gray-500 dark:border-gray-600"
                      : ""
                  }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-5">
                      <div className="flex-1 space-y-3">
                        {/* Role + External Arrow */}
                        <div className="flex items-start gap-3">
                          <h3
                            className="text-2xl mb-2 font-bold tracking-tight text-gray-700 dark:text-white
                 transition-all duration-500
                 group-hover:bg-gradient-to-r 
                 group-hover:from-blue-600 
                 group-hover:to-purple-600 
                 group-hover:bg-clip-text 
                 group-hover:text-transparent"
                          >
                            {role}
                          </h3>

                          <ArrowUpRight
                            className="w-5 h-5 mt-1 text-gray-400 dark:text-gray-500
                 opacity-0 translate-x-1 -translate-y-1
                 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
                 transition-all duration-300"
                          />
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          {/* Company */}
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 shrink-0" />
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {company}
                            </span>
                          </div>

                          {/* Dot Separator */}
                          <span className="text-gray-300 dark:text-gray-600">
                            •
                          </span>

                          {/* Location */}
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 shrink-0" />
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {location}
                            </span>
                          </div>

                          {/* Duration */}
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 shrink-0" />
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {duration}
                            </span>
                          </div>
                          <span className="text-gray-300 dark:text-gray-600">
                            •
                          </span>

                          <div className="flex items-center gap-2">
                            <BadgeCheck className="w-4 h-4 shrink-0" />
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex md:flex-col md:items-end gap-2">
                        {/* Period Badge */}
                        <div
                          className="flex items-center gap-2 px-4 py-2 rounded-full 
                   dark:bg-gray-800 
                  border border-gray-300 dark:border-gray-700"
                        >
                          <Calendar className="w-4 h-4 shrink-0" />
                          <span className="text-sm font-normal">{period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed mb-5 font-Ovo">
                      {description}
                    </p>

                    {/* Achievements */}
                    {achievements.length > 0 && (
                      <div className="mb-6 space-y-2">
                        {achievements.map((achievement, idx) => (
                          <div key={idx} className="flex gap-3">
                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
                            <p className="text-md leading-relaxed text-gray-900 dark:text-gray-300 font-Ovo">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 text-sm rounded-lg border bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
