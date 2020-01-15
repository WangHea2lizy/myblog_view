<template>
  <el-row type="flex" justify="center" class="block">
    <el-col :span="6"></el-col>
    <el-col :span="12">
      <div class="block">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
<!--      <div v-for="articleInfo in results" :key="articleInfo" class="dataShow">-->
<!--        <h2 class="">{{ articleInfo.articleTitle }}</h2>-->
<!--        <avue-text-ellipsis :text=articleInfo.articleContent :height="50">-->
<!--          <small slot="more">...</small>-->
<!--        </avue-text-ellipsis>-->
<!--        <div>-->
<!--        <el-button type="text">{{ articleInfo.author }}</el-button>-->
<!--          <i class="el-icon-success">{{ articleInfo.likes }}</i>-->
<!--          <i class="el-icon-success">{{ articleInfo.responses }}</i>-->
<!--        </div>-->
<!--      </div>-->
      <contents/>
      <catagory/>
      <p>god</p>
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
</template>

<script>
  import contents from '@/views/page/content'
  import catagory from '@/views/page/catagory'
export default {
  components: {catagory,contents},
  data () {
    return {
      // articles: {
      //   title: '',
      //   content: '',
      //   author: '',
      //   likes: 0,
      //   responses: 0
      // }
      results: [
        {
          articleTitle: 'aaaa',
          articleContent: 'qwertyuiasdfghjzxcvbwerthxcvfgb',
          author: 'aaaaa',
          likes: 222,
          responses: 1000
        },
        {
          articleTitle: 'aaa',
          articleContent: 'qwertyuiasdfghjzxcvbwerthxcvf',
          author: 'aaaa',
          likes: 222,
          responses: 1000
        },
        {
          articleTitle: 'aaaab',
          articleContent: 'qwertyuiasdfghjzxcvbwerthxcvfgbbv',
          author: 'aaaaadd',
          likes: 222,
          responses: 1000
        },
        {
          articleTitle: 'aaaadf',
          articleContent: 'qwertyuiasdfghjzxcvbwerthxcvfgbsdf',
          author: 'aaasdaa',
          likes: 222,
          responses: 1000
        }
      ],
      data: [
        {
          a: '',
          results: [
            {
              articleTitle: 'aaaa',
              articleContent: 'qwertyuiasdfghjzxcvbwerthxcvfgb',
              author: 'aaaaa',
              likes: 222,
              responses: 1000
            },
            {
              articleTitle: 'aaa',
              articleContent: 'qwertyuiasdfghjzxcvbwerthxcvf',
              author: 'aaaa',
              likes: 222,
              responses: 1000
            },
            {
              articleTitle: 'aaaab',
              articleContent: 'qwertyuiasdfghjzxcvbwerthxcvfgbbv',
              author: 'aaaaadd',
              likes: 222,
              responses: 1000
            },
            {
              articleTitle: 'aaaadf',
              articleContent: 'qwertyuiasdfghjzxcvbwerthxcvfgbsdf',
              author: 'aaasdaa',
              likes: 222,
              responses: 1000
            }
          ]
        }
      ]

    }
  }
}
</script>

<style>
  .dataShow {

  }
  dataShow.h2 {
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    height: 24px;
    margin-bottom: 4px;
    overflow: hidden;
    white-space: nowrap;
  }
  .block {
    line-height: 100%;

  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
