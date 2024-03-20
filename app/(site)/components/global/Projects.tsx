// components/global/Projects.tsx
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { ProjectType } from "@/types";

type ProjectsProps = {
    projects: ProjectType[];
};

export default function Projects({ projects }: ProjectsProps) {
    return (
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {projects.map((project) => {
                return (
                    <Link
                        href={`/projects/${project.slug}`}
                        key={project._id}
                        className="flex items-center p-4 border rounded shadow"
                    >
                        {project.logo && (
                            <Image
                                src={project.logo}
                                width={60}
                                height={60}
                                alt={project.name}
                                className="bg-zinc-800 rounded-md p-2 w-1/4 h-24 object-cover mr-4"
                            />
                        )}
                        <div>
                            <h2 className="font-semibold mb-1 text-lg font-bold text-center">{project.name}</h2>
                            <div className="text-sm text-zinc-400">{project.tagline}</div>
                            <PortableText value={project.description} />
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}