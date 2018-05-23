<template>
	  <div>
	    <swiper :options="swiperOption"  ref="mySwiper">  
        <swiper-slide> 
            <img src="../../../static/img/01_11.jpg" class="index_img">
        </swiper-slide>  
        <swiper-slide> 
            <img src="../../../static/img/01_11.jpg" class="index_img">
        </swiper-slide>  
      </swiper>  
      <dl class="titmain">
	  		<dt><img src="../../../static/img/01_15.jpg"/></dt>
	  		<dd>推荐歌单 <span>更多 ></span></dd>
  	  </dl>
  	  <div class="titinfo">
  	  	<dl>
  	  		<dt><img src="../../../static/img/01_18.jpg"/></dt>
  	  		<dd>dshkf</dd>
  	  	</dl>
  	  	<dl>
  	  		<dt><img src="../../../static/img/01_18.jpg"/></dt>
  	  		<dd>dshkf</dd>
  	  	</dl>
  	  	<dl>
  	  		<dt><img src="../../../static/img/01_18.jpg"/></dt>
  	  		<dd>dshkf</dd>
  	  	</dl>
  	  	<dl>  
  	  		<dt><img src="../../../static/img/01_18.jpg"/></dt>
  	  		<dd>dshkf</dd>
  	  	</dl>
  	  </div>
    </div>
    
</template>

<script>
   /* import Swiper from 'swiper';*/
    import '../../assets/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        name:'index',
        components: {  
            swiper,  
            swiperSlide  
        },  
        created:function(){
        	var that=this;
        	axios.get('Server running at http://127.0.0.1:8888/').then(function(res){
        		console.log(res.data);
        		that.datainfo=res.data;
        	})
        }
        data() {  
            return {
                swiperOption: {  
                    slidesPerView: 'auto',  
                    centeredSlides: true,  
                    paginationClickable: true,
                    autoplay:true,
                    loop:true
                },                
            }  
        },  
        //定义这个sweiper对象  
        computed: {    
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        }
    }
</script>

<style lang="less">
   .swiper-slide img{
   	width: 100%;
   	height: auto;
   }
   .titmain{
			width: 100%;
			height: 0.8rem;
			background-color:white;
			display: flex;
		}
		.titmain dt{
			width: 0.8rem;
			height: 100%;
			padding-top: 0.12rem;
			box-sizing: border-box;
		}
		.titmain dt img{
			display: block;
			margin: 0 0.1rem;
			width: 0.6rem;
			
		}
		.titmain dd{
			flex: 1;
			line-height: 0.8rem;		
		}
		.titmain dd span{
			float: right;
			margin-right: 10px;
			font-size: 0.2rem;
		}
		.titinfo{
			width:100% ;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 50px;
		}
		.titinfo dl{
			width: 33.3333%;
			padding: 5px;
			box-sizing: border-box; 
		}
		.titinfo dl img{
			width: 100%;
			height: auto;
			box-sizing: border-box; 

		}
</style>