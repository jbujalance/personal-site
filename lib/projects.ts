import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Directory containing the project contents as markdown
const projectsContentDirectory = path.join(process.cwd(), 'content/projects');

/**
 * Iterates over the projects content directory and return the filename of each markdown.
 * The names of the markdown files are considered to be the ID of each project.
 * @returns An array of project ids.
 */
export function getAllProjectIds(): Array<string> {
  const fileNames = fs.readdirSync(projectsContentDirectory);
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}

type ProjectMetadata = {
  title: string,
  subtitle: string
}

export type ProjectData = {
  id: string,
  html: string,
  metadata: ProjectMetadata
}

/**
 * Retrieves the data of the given project ID.
 * @param id The id of the project whose data is to be retrieve.
 * @returns Returns an object holding the project ID, data and metadata.
 */
export async function getProjectData(id: string): Promise<ProjectData> {
  const fullPath = path.join(projectsContentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the project metadata section (front-matter)
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    html: contentHtml,
    metadata: {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle
    }
  };
}

export function getAllProjectsData(): ProjectData[] {
  const fileNames = fs.readdirSync(projectsContentDirectory);
  const fileContents = fileNames.map(fileName => ({
    id: fileName.replace(/\.md$/, ''),
    content: fs.readFileSync(path.join(projectsContentDirectory, fileName), 'utf8')
  }));
  const matters = fileContents.map(fileContentHolder => ({
    id: fileContentHolder.id,
    matter: matter(fileContentHolder.content)
  }));
  return matters.map(matterHolder => ({
    id: matterHolder.id,
    html: "",
    metadata: {
      title: matterHolder.matter.data.title,
      subtitle: matterHolder.matter.data.subtitle
    }
  }));
}
