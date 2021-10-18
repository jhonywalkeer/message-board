import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class MessageInput {
  @Field()
  readonly content: string;

  @Field()
  readonly userId: number;
}
@InputType()
export class DeleteMessageInput {
  @Field()
  readonly id: number;
  @Field()
  readonly userId: number;
}
