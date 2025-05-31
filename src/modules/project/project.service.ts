import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Project } from '@prisma/client';

@Injectable()
export class ProjectService {
    constructor (private readonly prisma : PrismaService) {}

    async getAllProject() : Promise<Project[]> {
        return await this.prisma.project.findMany();        
    }

    async getProjectById(id: string) : Promise<Project> {
        return await this.prisma.project.findUnique({
            where: {
                id: id
            }
        })
    }
}
