"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "/dialog"
import { cn } from "@/lib/utils"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  details: {
    client: string
    services: string[]
    year: number
    link?: string
  }
  gallery: string[]
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <div 
        className="group relative cursor-pointer overflow-hidden rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={450}
            className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-90"
            unoptimized
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-semibold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
          <p className="text-white/80 text-sm line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {project.category}
          </p>
        </div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {project.gallery.slice(0, 4).map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-md">
                    <Image
                      src={img}
                      alt={`${project.title} gallery image ${i+1}`}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">Client</h4>
                  <p>{project.details.client}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">Services</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.details.services.map((service, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">Year</h4>
                  <p>{project.details.year}</p>
                </div>
                
                {project.details.link && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground">Website</h4>
                    <a 
                      href={project.details.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {project.details.link.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}