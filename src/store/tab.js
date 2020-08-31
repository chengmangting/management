import Cookie from 'js-cookie'
export default {
    state: {
        menu: [],
        currentMenu: null,
        tags: [
            {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'eleme'
            }
        ]
    },
    mutations: {
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },
        addMenu(state, router) {
            // 查看是否
            if (!Cookie.get('menu')) {
                return
            }
            let menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            let currentMenu = [
                {
                    path: '/',
                    component: () => import(`@/views/main`),
                    children: []
                }
            ]
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`@/views/${item.url}`)
                        return item
                    })
                    currentMenu[0].children.push(...item.children)
                } else {
                    item.component = () => import(`@/views/${item.url}`)
                    currentMenu[0].children.push(item)
                }
            })
            router.addRoutes(currentMenu)
        },
        selectMenu(state, val){
            // val.name === 'home' ? (state.currentMenu=null) : (state.currentMenu = val);
            if(val.name === 'home'){
                state.currentMenu=null
            }else{
                state.currentMenu = val;
                let result = state.tags.findIndex(item => item.name === val.name);
                result === -1 ? state.tags.push(val) : '';
            }
        },
        closeTag(state, val){
            state.tags.splice(state.tags.indexOf(val), 1);
        }
    },
    actions: {

    }
}