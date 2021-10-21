import {Entity, model, property} from '@loopback/repository';

@model()
export class TeamMembers extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  workdayId: number;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
  })
  middleName?: string;

  @property({
    type: 'string',
  })
  immediateManager?: string;

  @property({
    type: 'string',
  })
  slt?: string;

  @property({
    type: 'string',
  })
  supervisoryOrganization?: string;

  @property({
    type: 'string',
  })
  functionalArea?: string;

  @property({
    type: 'string',
  })
  primaryWorkEmailAddress?: string;

  @property({
    type: 'string',
  })
  secondaryWorkEmailAddress?: string;


  constructor(data?: Partial<TeamMembers>) {
    super(data);
  }
}

export interface TeamMembersRelations {
  // describe navigational properties here
}

export type TeamMembersWithRelations = TeamMembers & TeamMembersRelations;
