import {
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm';

@Catch(EntityNotFoundError)
export class EntityNotFoundErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(EntityNotFoundErrorFilter.name);

  catch(exception: HttpException): void {
    this.logger.error(exception.message, exception.stack);
    throw new NotFoundException('Not found');
  }
}
