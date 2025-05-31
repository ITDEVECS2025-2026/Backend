import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private readonly service: ProjectService) { }

    @Get('/all')
    async getAllProjects() {
        let projects = await this.service.getAllProject();
        return {
            success: true,
            message: 'success get all projects',
            data: [
                projects,
            ],
        };
    }

    // @Get('/:id')
    // async getProjectById() {
    //     let projects = await this.service.getAllProject();
    //     return {
    //         success: true,
    //         message: 'success get all projects',
    //         data: [
    //             projects,
    //         ],
    //     };
    // }
}
