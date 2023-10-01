import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmark.model';
import { url } from 'inspector';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService) {}
  @Get()
  findAll(): Bookmark[] {
    return this.bookmarkService.findAll();
  }
  @Post()
  createBookmark(@Body('url') url, @Body('description') description): Bookmark {
    return this.bookmarkService.createBookmark(url, description);
  }
}
