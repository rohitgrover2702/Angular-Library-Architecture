import { NgModule } from '@angular/core';
import { KobePipesComponent } from './kobe-pipes.component';
import { FilterPipe } from './filter-pipe/filter.pipe';
import { OrderByAscPipe, OrderByDescPipe, ArraySortPipe } from './order-by/order-by.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SafeHtmlPipe } from './safe-html/safe-html.pipe';



@NgModule({
  declarations: [KobePipesComponent, FilterPipe, OrderByAscPipe, OrderByDescPipe, ArraySortPipe, TruncatePipe, SafeHtmlPipe],
  imports: [
  ],
  exports: [KobePipesComponent]
})
export class KobePipesModule { }
