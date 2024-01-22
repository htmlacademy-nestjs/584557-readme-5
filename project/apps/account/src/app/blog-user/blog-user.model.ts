import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthUser } from '@project/shared/app/shared-types';

@Schema({
  collection: 'accounts',
  timestamps: true,
})
export class BlogUserModel extends Document implements AuthUser {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
  })
  public registartionDate: Date;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstName: string;

  @Prop({
    required: true,
  })
  public lastName: string;

  @Prop({
    required: true,
  })
  public postsNumber: number;

  @Prop({
    required: true,
  })
  public subscribers: number;

  @Prop({
    required: true,
  })
  public passwordHash: string;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
