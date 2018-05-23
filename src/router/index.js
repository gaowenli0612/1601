import Vue from 'vue'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(Router)
import fashion from '@/components/list/fashion'
import ran from '@/components/list/ran'
import singer from '@/components/list/singer'
import song from '@/components/list/song'

export default new Router({
 	routes:[
		 	{path:'/',redirect:'tab1'},
		 	{path:'/tab1',component:fashion},
		 	{path:'/tab2',component:ran},
		 	{path:'/tab3',component:singer},
		 	{path:'/tab4',component:song} 	
 	]
})
