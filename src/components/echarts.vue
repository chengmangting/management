<template>
    <div style="height: 100%" ref="echart">
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    data() {
        return {
            echart: null,
            norOption: {
                series: [],
                color: [
                    '#2ec7c9',
                    '#b6a2de',
                    '#5ablef',
                    "#ffb980",
                    "#d87a80",
                    "#8d98b3",
                    "#e5cf0d",
                    "#97b552",
                    "#95706d",
                    "#dc69aa",
                    "#07a2a4",
                    "#9a7fd1"
                ],
                tooltip: {
                    trigger: 'item'
                }
            },
            axisOption: {
                legend: {
                    textStyle: {
                        color: '#333'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                        type: 'category',
                        // boundaryGap: false,
                        data: [],
                        axisLine: {
                            lineStyle: {
                                color: '#17b3a3'
                            }
                        }
                },
                yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#17b3a3'
                            }
                        },
                        axisLabel: {
                            color: '#333'
                        }
                },
                color: [
                        '#2ec7c9',
                        '#b6a2de',
                        '#5ablef',
                        "#ffb980",
                        "#d87a80",
                        "#8d98b3",
                        "#e5cf0d",
                        "#97b552",
                        "#95706d",
                        "#dc69aa",
                        "#07a2a4",
                        "#9a7fd1",
                        "#588dd5",
                        "#f5994e",
                        "#c05050",
                        "#59678c",
                        "#c9ab00",
                        "#7eb00a",
                        "#6f5553",
                        "#c14089",
                ],
                series: []
            }
        }
    },
    props: {
        chartData: {
            type: Object,
            default() {
                return {
                    xData: {},
                    series: []
                }
            }
        },
        isAxisChart: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        options() {
            return this.isAxisChart ? this.axisOption : this.norOption;
        }
    },
    watch: {
        chartData: {
            handler: function() {
                this.initChart()
            },
            deep: true
        }
    },
    methods: {
        initChart() {
            this.initChartData()
            if(this.echart){
                this.echart.setOption(this.options)
            }else{
                this.echart = echarts.init(this.$refs.echart)
                this.echart.setOption(this.options)
            }
        },
        initChartData() {
            if(this.isAxisChart) {
                this.axisOption.xAxis.data = this.chartData.xData
                this.axisOption.series = this.chartData.series
            }else{
                this.norOption.series = this.chartData.series
            }
        },
        resizeChart() {
            this.echart ? this.echart.resize() : ''
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeChart)
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeChart)
    }
}
</script>