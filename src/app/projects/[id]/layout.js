import { getProjectById } from "@/data/projects";

export function generateMetadata({ params }) {
  const id = params?.id;
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = project.title;
  const description =
    project.shortDescription ||
    project.description?.slice(0, 160) ||
    `Project: ${project.title}`;

  return {
    title,
    description,
    keywords: project.tech || [],
    openGraph: {
      title,
      description,
      url: `https://abhishekthatguy.in/projects/${id}`,
    },
    alternates: {
      canonical: `https://abhishekthatguy.in/projects/${id}`,
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
}
