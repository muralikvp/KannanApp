import { Component } from '@angular/core';
import { UserService } from '../Shared/user.service';
import { PostService } from '../Shared/post.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  name: string = 'Hope Tutors';
  count: number = 0;
  accountBalance: number = 1000;
  obj: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
  dateObj = Date.now();
  pi: number = 3.14159265359;
  a: number = 0.259;
  b: number = 1.3495;
  HopeTutorsAge: number = 8;
  TrainerAge: number = 28;
  listOfToDos$: any = [];
  listOfPosts$: any = [];

  constructor(private userService: UserService,private postService:PostService) {}

  ngOnInit(): void {
    this.listOfToDos$ = this.userService.getUsers();
     this.listOfPosts$ = this.postService.getPosts();
  }
}
