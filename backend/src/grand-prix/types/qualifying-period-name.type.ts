import { registerEnumType } from '@nestjs/graphql';

export enum QualifyingPeriodName {
  FIRST = 'Qualifying 1',
  SECOND = 'Qualifying 2',
  THIRD = 'Qualifying 3',
}

registerEnumType(QualifyingPeriodName, {
  name: 'QualifyingPeriodNameEnum',
});
