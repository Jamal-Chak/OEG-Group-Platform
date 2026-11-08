import { notFound } from "next/navigation";
import { ProjectDetail } from "../../../components/project-detail";
import { getProject, projects } from "../../../components/project-data";
import { createPageMetadata } from "../../../lib/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createPageMetadata(
      "Project not found",
      "The requested project could not be found in the On-Eaglewings Group portfolio.",
    );
  }

  return createPageMetadata(
    project.slug === "on-eaglewings-group"
      ? "Corporate Platform Project"
      : `${project.name} | Projects`,
    project.description,
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
