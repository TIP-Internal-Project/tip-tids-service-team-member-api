import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TeamMembers} from '../models';
import {TeamMembersRepository} from '../repositories';

export class TeamMembersController {
  constructor(
    @repository(TeamMembersRepository)
    public teamMembersRepository : TeamMembersRepository,
  ) {}

  @post('/teamMembers')
  @response(200, {
    description: 'TeamMembers model instance',
    content: {'application/json': {schema: getModelSchemaRef(TeamMembers)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TeamMembers, {
            title: 'NewTeamMembers',
            exclude: ['id'],
          }),
        },
      },
    })
    teamMembers: Omit<TeamMembers, 'id'>,
  ): Promise<TeamMembers> {
    return this.teamMembersRepository.create(teamMembers);
  }

  @get('/teamMembers/count')
  @response(200, {
    description: 'TeamMembers model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TeamMembers) where?: Where<TeamMembers>,
  ): Promise<Count> {
    return this.teamMembersRepository.count(where);
  }

  @get('/teamMembers')
  @response(200, {
    description: 'Array of TeamMembers model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TeamMembers, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TeamMembers) filter?: Filter<TeamMembers>,
  ): Promise<TeamMembers[]> {
    return this.teamMembersRepository.find(filter);
  }

  @patch('/teamMembers')
  @response(200, {
    description: 'TeamMembers PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TeamMembers, {partial: true}),
        },
      },
    })
    teamMembers: TeamMembers,
    @param.where(TeamMembers) where?: Where<TeamMembers>,
  ): Promise<Count> {
    return this.teamMembersRepository.updateAll(teamMembers, where);
  }

  @get('/teamMembers/{id}')
  @response(200, {
    description: 'TeamMembers model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TeamMembers, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TeamMembers, {exclude: 'where'}) filter?: FilterExcludingWhere<TeamMembers>
  ): Promise<TeamMembers> {
    return this.teamMembersRepository.findById(id, filter);
  }

  @patch('/teamMembers/{id}')
  @response(204, {
    description: 'TeamMembers PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TeamMembers, {partial: true}),
        },
      },
    })
    teamMembers: TeamMembers,
  ): Promise<void> {
    await this.teamMembersRepository.updateById(id, teamMembers);
  }

  @put('/teamMembers/{id}')
  @response(204, {
    description: 'TeamMembers PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() teamMembers: TeamMembers,
  ): Promise<void> {
    await this.teamMembersRepository.replaceById(id, teamMembers);
  }

  @del('/teamMembers/{id}')
  @response(204, {
    description: 'TeamMembers DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.teamMembersRepository.deleteById(id);
  }
}
