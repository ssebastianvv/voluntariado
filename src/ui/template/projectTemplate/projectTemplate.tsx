"use client";
import { IGetProjectsResponse } from "@/app/core/application/dto/projects/projects-response.dto";
import TableProjects from "@/ui/organism/table/table";
import styles from './template.module.scss';

interface IProps {
    dataResponse: IGetProjectsResponse;
}

const handleEdit = (id: number) => {
    console.log(id, 'Hola');
    
}

const ProjectsPageTemplate: React.FC<IProps> = ({dataResponse}) => {
    return(
        <div className={styles.container}>
            <TableProjects dataResponse={dataResponse} onEdit={handleEdit}></TableProjects>
        </div>
    )
}

export default ProjectsPageTemplate;