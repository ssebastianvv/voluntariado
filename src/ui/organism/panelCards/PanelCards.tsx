import React from "react";
import { IGetProjectsResponse } from "@/app/core/application/dto/projects/projects-response.dto";
import styles from './panelsCard.module.scss';
import Card from "@/ui/molecule/card/Card";
import { icons } from "@/ui/atoms";

interface IProps {
    data: IGetProjectsResponse;
}

const PanelCards: React.FC<IProps> = ({ data }) => {
    const totalProjects = data.metadata.totalItems;
    const activeProjects = data.data.filter((project) => project.isActive).length;
    const totalOrganizers = new Set(data.data.map((project) => project.organizer.id)).size;
    


    return (
        <div className={styles.containerPanel}>
            <Card title="Total de Proyectos" value={totalProjects}>{icons.companie}</Card>
            <Card title="Proyectos Activos" value={activeProjects}>{icons.suitcase}</Card>
            <Card title="Número de Organizadores" value={totalOrganizers}>{icons.user}</Card>
            <Card title="proximo proyecto" value="invalid Date">{icons.cita}</Card>
        </div>
    );
};

export default PanelCards;
