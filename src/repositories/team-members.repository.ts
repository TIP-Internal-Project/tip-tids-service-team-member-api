import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {TeamMembers, TeamMembersRelations} from '../models';

export class TeamMembersRepository extends DefaultCrudRepository<
  TeamMembers,
  typeof TeamMembers.prototype.id,
  TeamMembersRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(TeamMembers, dataSource);
  }
}
