import Mock from 'mockjs'

const getPublicModel = Mock.mock({
  code: '000',
  msg: 'request data successful',
  data: {
    userId: '201722017',
    userName: '@cname()',
    sex: 'male',
    age: 20,
    classList: []
  }
})

const modelInfo = {
  code: 0,
  msg: 'ok',
  data: {
    modelList: [
      {
        modelId: 'pri_00001',
        modelName: 'Java开发',
        modelDesc: '这是一个Java开发岗模型',
        modelProperty: 1,
        tagFairType: '校招/社招',
        tagSeries: ['技术型'],
        abilitiesGeneral: 4,
        abilitiesProfessional: 6,
        numQuestions: 15,
        abilityList: [
          {
            abilityId: 'G00001',
            abilityName: '学习能力',
            abilityDesc: '这是一个学习能力包',
            abilityType: 1,
            tagFairType: '校招/社招',
            tagSeries: ['技术型'],
            numSubAbilities: 5,
            numQuestions: 8,
          },
          {
            abilityId: 'G00001',
            abilityName: '学习能力',
            abilityDesc: '这是一个学习能力包',
            abilityType: 1,
            tagFairType: '校招/社招',
            tagSeries: ['技术型'],
            numSubAbilities: 5,
            numQuestions: 8,
          },
        ]
      },
      {
        modelId: 'pri_00002',
        modelName: '前端工程师',
        modelDesc: '这是一个web前端开发岗模型',
        modelProperty: 1,
        tagFairType: '校招/社招',
        tagSeries: ['技术型'],
        abilitiesGeneral: 4,
        abilitiesProfessional: 6,
        numQuestions: 15,
        abilityList: [
          {
            abilityId: 'G00001',
            abilityName: '学习能力',
            abilityDesc: '这是一个学习能力包',
            abilityType: 1,
            tagFairType: '校招/社招',
            tagSeries: ['技术型'],
            numSubAbilities: 5,
            numQuestions: 8,
          },
          {
            abilityId: 'G00001',
            abilityName: '学习能力',
            abilityDesc: '这是一个学习能力包',
            abilityType: 1,
            tagFairType: '校招/社招',
            tagSeries: ['技术型'],
            numSubAbilities: 5,
            numQuestions: 8,
          },
        ]
      },
    ]
  }
}

export default {
  getPublicModel: (data) => {
    // console.log('data ===> ', data)
    return getPublicModel
  },
  modelInfo: () => {
    return modelInfo
  }
}