import React, { useState } from 'react';
import { ArrowUpRight, Github, Filter, Layers } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  PhantomGuardVisual, 
  FaceMaskVisual, 
  IDSVisual, 
  WebScannerVisual 
} from './ProjectVisuals';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Computer Vision' | 'Cybersecurity'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const renderVisual = (type: Project['interactiveVisualType']) => {
    switch (type) {
      case 'phantom':
        return <PhantomGuardVisual />;
      case 'mask':
        return <FaceMaskVisual />;
      case 'ids':
        return <IDSVisual />;
      case 'scanner':
        return <WebScannerVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              03. Featured Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Projects & Security Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Real-world systems engineered across computer vision, intrusion classification, and defensive cybersecurity in Python.
            </p>
          </div>

          {/* Interactive Filter Segmented Control (Allowed functional button tabs) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {(['All', 'AI/ML', 'Computer Vision', 'Cybersecurity'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? 'bg-slate-800 text-white font-semibold shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/90 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-cyan-950/20"
            >
              {/* Card Header & Visual Teaser */}
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Clean Unboxed Metadata with Typographic Separators */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-cyan-400">{project.type}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{project.badgeCategory}</span>
                  </div>
                  <span className={`text-[11px] font-mono flex items-center gap-1 ${project.status === 'Completed' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Technical Simulation / Architectural Visualizer Widget */}
                <div className="pt-2">
                  {renderVisual(project.interactiveVisualType)}
                </div>

                {/* Technologies List (Clean unboxed tags) */}
                <div className="pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:px-7 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700/80 rounded-md border border-slate-700 transition-colors cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Expanded Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
