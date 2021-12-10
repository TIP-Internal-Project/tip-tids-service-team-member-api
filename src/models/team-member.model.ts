import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {
      collection: "TeamMembers"
    }
  }
})
export class TeamMember extends Entity {
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
    type: 'number',
  })
  immediateSupervisor?: number;

  @property({
    type: 'number',
  })
  slt?: number;

  @property({
    type: 'string',
  })
  functionalArea?: string;

  @property({
    type: 'string',
  })
  workEmail?: string;


  constructor(data?: Partial<TeamMember>) {
    super(data);
  }
}

export interface TeamMemberRelations {
  // describe navigational properties here
}

export type TeamMemberWithRelations = TeamMember & TeamMemberRelations;
