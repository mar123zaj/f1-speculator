import { registerEnumType } from '@nestjs/graphql';

export enum PracticeSessionName {
  FIRST = 'Practice 1',
  SECOND = 'Practice 2',
  THIRD = 'Practice 3',
}

registerEnumType(PracticeSessionName, {
  name: 'PracticeSessionNameEnum',
});
