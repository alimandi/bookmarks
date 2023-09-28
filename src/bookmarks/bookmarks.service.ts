import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';
@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [
    {
      id: uuid(),
      name: 'ali',
      family: 'mandi',
    },
  ];

  findAll(): Bookmark[] {
    return this.bookmarks;
  }
}
