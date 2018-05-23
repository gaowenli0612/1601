<template>
  <div id="app">
  	<headertit></headertit>
    <section>
    	<mu-tabs :value="activeTab" @change="handleTabChange">
		    <mu-tab value="/tab1" title="时下流行"/>
		    <mu-tab value="/tab2" title="歌单"/>
		    <mu-tab value="/tab3" title="排行榜"/>
		    <mu-tab value="/tab4" title="热门歌手 "/>
		  </mu-tabs>
		  <div class="main">
		  	<router-view></router-view>
		  	
		  </div>
		  
		 </section>
		    
		  </div>
		</template>

<script>
	import headertit from './components/headertit'
export default {
	components:{
		'headertit':headertit
	},
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val;
//    console.log(val)
			this.$router.push({path:val});
    }
  }
}

</script>

<style type="text/css">
		.mu-appbar{
			height: 1rem;
			background: #d63939;
		}
		.mu-tabs{
			background: white;
			color:#000;
			height: 1rem ;
		}
		.mu-tab-link{
			color:#000;
		}
		.mu-tab-active{
				color:#d63939;
		}
		
</style>
