import { Field, ID, ObjectType } from '@nestjs/graphql';

// モデルにはObjectTypeデコレータをつける
@ObjectType()
export class User {
  @Field(() => ID)
  id: number; // ID: 連番
  email: string; // Eメールアドレス：文字列
  name: string; // 名前：文字列
}
