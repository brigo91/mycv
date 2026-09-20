import {
	UseInterceptors,
	CallHandler,
	ExecutionContext,
	NestInterceptor,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class SerializeInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
		console.log('Im running before handler', context);
		return handler.handle().pipe(
			map((data: any) => {
				console.log('Im running before response is sent out', data);
			})
		);
	}
}