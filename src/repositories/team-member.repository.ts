import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {TeamMember, TeamMemberRelations} from '../models';

export class TeamMemberRepository extends DefaultCrudRepository<
  TeamMember,
  typeof TeamMember.prototype.id,
  TeamMemberRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(TeamMember, dataSource);
  }
}
