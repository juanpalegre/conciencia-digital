import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface EventFrontmatter {
  title: string;
  date: string;
  location: string;
  upcoming?: boolean;
  description?: string;
}

export interface ResourceFrontmatter {
  title: string;
  description: string;
  file: string;
  fileLabel: string;
}

export interface ContentItem<T> {
  slug: string;
  frontmatter: T;
  content: string;
}

function getContentItems<T>(folder: string): ContentItem<T>[] {
  const contentDir = path.join(process.cwd(), "content", folder);

  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
      const { data, content } = matter(raw);
      return { slug, frontmatter: data as T, content };
    })
    .sort((a, b) =>
      (b.frontmatter as EventFrontmatter).date >
      (a.frontmatter as EventFrontmatter).date
        ? 1
        : -1
    );
}

export function getEvents(): ContentItem<EventFrontmatter>[] {
  return getContentItems<EventFrontmatter>("eventos");
}

export function getResources(): ContentItem<ResourceFrontmatter>[] {
  return getContentItems<ResourceFrontmatter>("recursos");
}
