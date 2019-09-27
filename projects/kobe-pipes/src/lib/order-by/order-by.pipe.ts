import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByAscPipe implements PipeTransform {

  transform(value: [{}], args?: string): [{}] {
    value.sort((a, b) => {
      if (a[args] > b[args]) {
        return 1;
      }
    });
    return value;
  }
}

@Pipe({
  name: 'orderByDesc'
})
export class OrderByDescPipe implements PipeTransform {
  transform(value: [{}], args?: string): [{}] {
    value.sort((a, b) => {
      if (a[args] < b[args]) {
        return -1;
      }
    });
    return value;
  }
}

@Pipe({
  name: 'sort'
})
export class ArraySortPipe implements PipeTransform {
  transform(array, field: string): [{}] {
    if (!array) {
      return;
    }
    array.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    array.push(array.splice(array.indexOf(array.find(item => item.CategoryName === 'Other')), 1)[0]);
    array = this.update(array, array.find(item => item.CategoryName === 'All'));
    return array;
  }

  // Set element to first index
  update(arr, e) {
    if (!e) {
      return arr;
    }
    const i = arr.indexOf(arr.find(item => item.CategoryName === 'All'));
    if (i === 0) {
      return arr;
    }
    if (i > 0) {
      arr.splice(i, 1);
    }
    arr.unshift(e);
    return arr;
  }
}
