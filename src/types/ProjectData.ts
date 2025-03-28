interface ProjectData {
    title: string;
    year: number;
    type: string;
    tools: Array<string>;
    accomplishments: Array<string>;
    about: string;
    images: Array<string> | null; // Optional array of image URLs for the image gallery
    youtubeLink: string | null; // Optional link to a YouTube video for the project
}

export type { ProjectData };