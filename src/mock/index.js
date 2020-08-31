import Mock from 'mockjs'
import homeApi from './home'
import usersApi from './users'
import permissionApi from './permission'

//设置延时
Mock.setup({
    timeout: '200-2000'
})

//首页相关
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)

// Mock.mock(/\/users\/getData/, 'get', usersApi.getData)
//用户相关
Mock.mock(/\/users\/getUser/, 'get', usersApi.getUserList)
Mock.mock(/\/users\/del/, 'get', usersApi.deleteUser)
Mock.mock(/\/users\/batchremove/, 'get', usersApi.batchremove)
Mock.mock(/\/users\/add/, 'post', usersApi.createUser)
Mock.mock(/\/users\/edit/, 'post', usersApi.updateUser)
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)

//权限相关
Mock.mock(/\/permission\/getMenu/, 'post', permissionApi.getMenu)


