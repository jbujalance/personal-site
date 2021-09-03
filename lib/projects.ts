import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
  metadata: ProjectMetadata
}

/**
 * Retrieves the data of the given project ID.
 * @param id The id of the project whose data is to be retrieve.
 * @returns Returns an object holding the project ID, data and metadata.
 */
export function getProjectData(id: string): ProjectData {
  const fullPath = path.join(projectsContentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the project metadata section (front-matter)
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    metadata: matterResult.data as ProjectMetadata
  }
}
