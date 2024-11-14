import { HttpClient } from "@/app/infraestructure/untils/client-http";
import { Datum, IGetProjectsResponse } from "@/app/core/application/dto/projects/projects-response.dto";
import { IProjectRequest } from "@/app/core/application/dto/projects/projects-request.dto";


export class ProjectService{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async find(page: number, size: number): Promise<IGetProjectsResponse> {
        try {
            const response = await this.httpClient.get<IGetProjectsResponse>(`projects?page=${page}&size=${size}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findById(id: number): Promise<Datum> {
        try {
            const response = await this.httpClient.get<Datum>(`projects/${id}`);
            return response;
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async create(body: IProjectRequest) {
        try {
            const response = this.httpClient.post<IGetProjectsResponse, IProjectRequest>('projects', body);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async put(id: number, body: IProjectRequest) {
		try {
			const response = this.httpClient.put<Datum, IProjectRequest>(`projects/${id}`, body);
			return response;

		} catch (error) {
			console.log(error);
			throw error;
		}
	}
    

    async destroy(id: number){
        try {
            const response = await this.httpClient.delete(`projects/${id}`);
            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}