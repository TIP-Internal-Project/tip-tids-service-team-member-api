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
import {TeamMember} from '../models';
import {TeamMemberRepository} from '../repositories';

export class TeamMemberController {
  constructor(
    @repository(TeamMemberRepository)
    public teamMemberRepository : TeamMemberRepository,
  ) {}

  @post('/teamMembers')
  @response(200, {
    description: 'TeamMember model instance',
    content: {'application/json': {schema: getModelSchemaRef(TeamMember)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TeamMember, {
            title: 'NewTeamMember',
            exclude: ['id'],
          }),
        },
      },
    })
    teamMember: Omit<TeamMember, 'id'>,
  ): Promise<TeamMember> {
    return this.teamMemberRepository.create(teamMember);
  }

  @get('/teamMembers/count')
  @response(200, {
    description: 'TeamMember model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TeamMember) where?: Where<TeamMember>,
  ): Promise<Count> {
    return this.teamMemberRepository.count(where);
  }

  @get('/teamMembers')
  @response(200, {
    description: 'Array of TeamMember model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TeamMember, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TeamMember) filter?: Filter<TeamMember>,
  ): Promise<TeamMember[]> {
    return this.teamMemberRepository.find(filter);
  }

  @patch('/teamMembers')
  @response(200, {
    description: 'TeamMember PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TeamMember, {partial: true}),
        },
      },
    })
    teamMember: TeamMember,
    @param.where(TeamMember) where?: Where<TeamMember>,
  ): Promise<Count> {
    return this.teamMemberRepository.updateAll(teamMember, where);
  }

  @get('/teamMembers/{id}')
  @response(200, {
    description: 'TeamMember model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TeamMember, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TeamMember, {exclude: 'where'}) filter?: FilterExcludingWhere<TeamMember>
  ): Promise<TeamMember> {
    return this.teamMemberRepository.findById(id, filter);
  }

  @patch('/teamMembers/{id}')
  @response(204, {
    description: 'TeamMember PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TeamMember, {partial: true}),
        },
      },
    })
    teamMember: TeamMember,
  ): Promise<void> {
    await this.teamMemberRepository.updateById(id, teamMember);
  }

  @put('/teamMembers/{id}')
  @response(204, {
    description: 'TeamMember PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() teamMember: TeamMember,
  ): Promise<void> {
    await this.teamMemberRepository.replaceById(id, teamMember);
  }

  @del('/teamMembers/{id}')
  @response(204, {
    description: 'TeamMember DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.teamMemberRepository.deleteById(id);
  }
}
