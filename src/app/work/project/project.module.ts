import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { ProjectComponent } from './project.component';

@NgModule({
    imports: [
      CommonModule,
      MatTableModule,
      MatInputModule
    ],
    declarations: [
        ProjectComponent
    ],
    providers: [],
    exports: []
})
export class ProjectModule { }
