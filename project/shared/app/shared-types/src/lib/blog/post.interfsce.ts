import { User } from '../user/user.interface';
import { PostState } from './post-state.enum';
import { PostType } from './post-type.enum';
import { Comment } from './comment.interface';

interface Post {
  title: string;
  tags?: string[];
  type: PostType;
  user: User;
  createDate: string;
  publishDate: string;
  state: PostState;
  likes: string[];
  subscribers: User[];
  comments: Comment[];
}

export interface RepostedPost extends Post {
  repostedAuthor: string;
  originPostId: string;
}

export interface VidePost extends Post {
  video: string;
}

export interface TextPost extends Post {
  trailer: string;
  text: string;
}

export interface QuotePost extends Post {
  author: string;
  text: string;
}

export interface PhotoPost extends Post {
  img: string;
}

export interface LinkPost extends Post {
  url: string;
  description?: string;
}
