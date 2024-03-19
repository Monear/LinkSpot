// app/pages/[project].tsx

import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { GetServerSidePropsContext } from 'next';
import Layout from '../../app/(site)/components/global/Layout';


type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || "add-a-fallback-project-image-here",
      title: project.name,
      description: project.tagline,
    },
  };
}

export default function Project({ project }: { project: ProjectType }) {

  return (
    <Layout>
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>

          <a
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
          >
            Explore
          </a>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={project.coverImage?.image}
          alt={project.coverImage?.alt || project.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={project.description} />
        </div>
      </div>
    </main>
    </Layout>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    if (!context.params || typeof context.params.project !== 'string') {
      // Return a 404 page if there's no project parameter in the URL
      return { notFound: true };
    }
  
    const project: ProjectType = await getSingleProject(context.params.project);
  
    return {
      props: {
        project,
      },
    };
  }