// pending-items.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pendingItems'
})
export class PendingItemsPipe implements PipeTransform {

  transform(items: any[]): string {
    const pendingCount = items.filter(item => !item.completed).length;
    return pendingCount > 0 ? `Pending: ${pendingCount}` : 'All Completed';
  }

}
