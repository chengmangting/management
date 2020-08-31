<template>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover">
                    <div class="user">
                        <img :src="userImg" alt="">
                        <div class="userinfo">
                            <p class="name">Nick</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间：<span>2020-12-23</span></p>
                        <p>上次登录地点：<span>深圳</span></p>
                    </div>
                </el-card>
                <el-card shadow="hover" style="height: 520px; margin-top: 20px">
                    <el-table
                        :data="tabData"
                        stripe
                        size="mini"
                        show-overflow-tooltip
                        style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="课程">
                    </el-table-column>
                    <el-table-column
                        prop="todayBuy"
                        label="今日购买">
                    </el-table-column>
                    <el-table-column
                        prop="monthBuy"
                        label="本月购买">
                    </el-table-column>
                    <el-table-column
                        prop="sumBuy"
                        label="总购买量">
                    </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16">
                <div class="num">
                    <el-card shadow="hover" v-for="item in 6" :key="item">
                     <i class="icon"></i>
                     <div class="detail">
                         <p class="number">￥ 1234</p>
                         <p class="txt">今日支付</p>
                     </div>
                    </el-card>    
                </div>
                <el-card shadow="hover">
                     <echart style="height: 280px" :chartData="echartData.order"></echart>
                </el-card>
                <div class="graph">
                    <el-card shadow="hover"><echart style="height: 260px" :chartData="echartData.users"></echart></el-card>
                    <el-card shadow="hover"><echart style="height: 260px" :chartData="echartData.video" :isAxisChart="false"></echart></el-card>
                </div>
            </el-col>
        </el-row>
</template>

<script>
import echart from '../../components/echarts.vue'
export default {
    data() {
        return {
            userImg: require('../../images/user.jpg'),
            tabData: [],
            countData: [],
            echartData: {
                order: {
                    xData: {},
                    series: []
                },
                users: {
                    xData: {},
                    series: []
                },
                video: {
                    series: []
                }
            }
        }
    },
    // mounted() {
        // this.$http.get('/home/getData').then(res => {
        //     console.log(res.data)
        // })
    // },
    components: {
        echart
    },
    methods: {
        getTableData() {
            this.$http.get('/api/home/getData').then(res => {
                console.log(res.data);
                res = res.data;

                this.tabData = res.data.tabData;

                //折线图
                const order = res.data.orderData;
                let keyArray = Object.keys(order[0])
                this.echartData.order.xData = keyArray;
                console.log(keyArray)
                keyArray.forEach(key => {
                    this.echartData.order.series.push({
                        name: key === 'wechat' ? '小程序' : key,
                        data: order.map(item => item[key]),
                        type: 'line'
                    })
                })

                //用户柱状图
                this.echartData.users.xData = res.data.userData.week
                this.echartData.users.series.push({
                    name: '新增用户',
                    data: res.data.userData.newList,
                    type: 'bar'
                })
                this.echartData.users.series.push({
                    name: '活跃用户',
                    data: res.data.userData.active,
                    type: 'bar'
                })

                //视频饼图
                this.echartData.video.series.push({
                    name: '饼状图',
                    data: res.data.videoData,
                    type: 'pie',
                    radius: '55%'
                })
            })
        }
    },
    created() {
        this.getTableData()
    }
}
</script>

<style scoped lang='scss'>
.user{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }
    .userinfo {
        .name{
            font-size: 32px;
            margin-bottom: 10px;
        }
        .access {
            color: #999999;
        }
    }
}
.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;
        span {
            color: #666666;
        }
    }
}
.num {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }
}
.graph {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-top: 20px;
    .el-card {
        width: 48%;
    }
}

</style>