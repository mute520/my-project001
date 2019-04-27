import Mock from 'mockjs'
import mockdata from './mockdata';

Mock.mock( /\/getPublicModel/, 'post', mockdata.getPublicModel )
Mock.mock( /\/modelInfo/, 'get', mockdata.modelInfo )

export default Mock