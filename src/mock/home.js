import Mock from 'mockjs'

export default {
    getHomeData: () => {
        let List = [];
        let newList = [];
        let active = [];
        let length = 7;
        for (let i = 0; i < length; i++) {
            List.push(
                Mock.mock({
                    ES6: Mock.Random.integer(100,1000),
                    小程序: Mock.Random.integer(100,1000),
                    Vue: Mock.Random.integer(100,1000),
                    springboot: Mock.Random.integer(100,1000),
                    React: Mock.Random.integer(100,1000),
                    Redis: Mock.Random.integer(100,1000)
                })
            );
            newList.push(
                Mock.Random.integer(100,1000)
            );
            active.push(
                Mock.Random.integer(500,2000)
            )      
        }

        return {
            code: 20000,
            data: {
                videoData: [
                    { 
                        name: 'ES6',
                        value: Mock.Random.integer(100,1000)
                    },
                    { 
                        name: '小程序',
                        value: Mock.Random.integer(100,1000)
                    },
                    { 
                        name: 'Vue',
                        value: Mock.Random.integer(100,1000)
                    },
                    { 
                        name: 'springboot',
                        value: Mock.Random.integer(100,1000)
                    },
                    { 
                        name: 'React',
                        value: Mock.Random.integer(100,1000)
                    },
                    { 
                        name: 'Redis',
                        value: Mock.Random.integer(100,1000)
                    }
                ],
                tabData: [
                    {
                        name: 'ES6',
                        todayBuy: Mock.Random.integer(100,1000),
                        monthBuy: Mock.Random.integer(1000,10000),
                        sumBuy: Mock.Random.integer(10000,100000)
                    },
                    {
                        name: '小程序',
                        todayBuy: Mock.Random.integer(100,1000),
                        monthBuy: Mock.Random.integer(1000,10000),
                        sumBuy: Mock.Random.integer(10000,100000)
                    },
                    {
                        name: 'Vue',
                        todayBuy: Mock.Random.integer(100,1000),
                        monthBuy: Mock.Random.integer(1000,10000),
                        sumBuy: Mock.Random.integer(10000,100000)
                    },
                    {
                        name: 'Espringboot',
                        todayBuy: Mock.Random.integer(100,1000),
                        monthBuy: Mock.Random.integer(1000,10000),
                        sumBuy: Mock.Random.integer(10000,100000)
                    },
                    {
                        name: 'React',
                        todayBuy: Mock.Random.integer(100,1000),
                        monthBuy: Mock.Random.integer(1000,10000),
                        sumBuy: Mock.Random.integer(10000,100000)
                    },
                    {
                        name: 'Redis',
                        todayBuy: Mock.Random.integer(100,1000),
                        monthBuy: Mock.Random.integer(1000,10000),
                        sumBuy: Mock.Random.integer(10000,100000)
                    }
                ],
                orderData: [
                    ...List,
                    {
                        date: [ '20200801','20200802','20200803','20200804','20200805','20200806','20200807' ]
                    }
                    
                ],
                userData: {
                    newList: newList,
                    active: active,
                    week: ['周一','周二','周三','周四','周五','周六','周日']
                }                
            }
        }
    }
}