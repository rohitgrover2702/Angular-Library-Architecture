import { from } from 'rxjs';

/*
 * Public API Surface of kobe-pipes
 */

export * from './lib/kobe-pipes.service';
export * from './lib/kobe-pipes.component';
export * from './lib/kobe-pipes.module';

export { FilterPipe } from './lib/filter-pipe/filter.pipe';
export { OrderByAscPipe, OrderByDescPipe, ArraySortPipe } from './lib/order-by/order-by.pipe';
export { SafeHtmlPipe } from './lib/safe-html/safe-html.pipe';
import { TruncatePipe } from './lib/truncate/truncate.pipe';
