import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

export class FilterPipe implements PipeTransform {

  transform(employees: any, searchValue: string): any {
    if (!employees || !searchValue) {
      return employees;
     } 
     return employees.filter(employee => 
      employee.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
}

}