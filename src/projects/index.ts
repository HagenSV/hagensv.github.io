import { ProjectData } from "../types/ProjectData";
import boxedUp from "./boxed_up";
import ourGcc from "./ourgcc";
import spaceMiner from "./space_miner";

const toRoute = (project: ProjectData): string => {
    return project.title.toLowerCase().replace(/\s+/g, "-");
}

const projects: Record<string,ProjectData> = {}
projects[toRoute(boxedUp)] = boxedUp;
projects[toRoute(ourGcc)] = ourGcc;
projects[toRoute(spaceMiner)] = spaceMiner

export default projects