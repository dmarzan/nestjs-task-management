import { IsEnum, IsOptional, IsString, isString } from "class-validator";
import { TaskStatus } from "../tasks-status.enum";

export class GetTasksFilterDto {
    @IsEnum(TaskStatus)
    @IsOptional()
    status?: TaskStatus;

    @IsString()
    @IsOptional()
    search?: string;
}