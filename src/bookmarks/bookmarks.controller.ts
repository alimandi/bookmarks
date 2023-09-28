import { Controller, Get } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmark.model';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService) {}
  @Get()
  findAll(): Bookmark[] {
    return this.bookmarkService.findAll();
  }
}
