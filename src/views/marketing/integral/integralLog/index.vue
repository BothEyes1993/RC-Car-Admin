<template>
  <div class="divBox">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="container">
          <el-form size="small" label-width="100px">
            <el-form-item label="时间选择：" class="width100">
              <el-radio-group v-model="tableFrom.dateLimit" type="button" class="mr20" size="small"
                              @change="selectChange(tableFrom.dateLimit)">
                <el-radio-button v-for="(item,i) in fromList.fromTxt" :key="i" :label="item.val">{{ item.text }}
                </el-radio-button>
              </el-radio-group>
              <el-date-picker v-model="timeVal" value-format="yyyy/MM/dd" format="yyyy/MM/dd" size="small"
                              type="daterange" placement="bottom-end" placeholder="自定义时间" style="width: 250px;"
                              @change="onchangeTime"/>
            </el-form-item>
            <el-form-item label="用户搜索：">
              <el-select v-model="tableFrom.userIdList" style="width: 500px" reserve-keyword multiple remote filterable
                         :remote-method="remoteMethod" :loading="loading" placeholder="请输入用户名称" clearable @change="seachList">
                <el-option
                  v-for="item in options"
                  :key="item.uid"
                  :label="item.nickname"
                  :value="item.uid">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <!--<cards-data :cardLists="cardLists"></cards-data>-->
      </div>
      <el-table
        v-loading="listLoading"
        :data="tableData.data"
        style="width: 100%"
        size="mini"
        class="table"
        highlight-current-row
      >
        <el-table-column
          prop="id"
          label="ID"
          width="60"
        />
        <el-table-column
          prop="title"
          label="标题"
          min-width="130"
        />
        <el-table-column
          sortable
          prop="balance"
          label="积分余量"
          min-width="120"
        />
        <el-table-column
          sortable
          label="明细数字"
          min-width="120"
          prop="number"
        />
        <el-table-column
          label="备注"
          min-width="120"
          prop="mark"
        />
        <el-table-column
          label="用户微信昵称"
          min-width="120"
          prop="nickName"
        />
        <el-table-column
          prop="createTime"
          label="添加时间"
          min-width="150"
        />
      </el-table>
      <div class="block">
        <el-pagination
          :page-sizes="[20, 40, 60, 80]"
          :page-size="tableFrom.limit"
          :current-page="tableFrom.page"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.total"
          @size-change="handleSizeChange"
          @current-change="pageChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import { fromList } from '@/utils/constants.js'
import { integralListApi } from '@/api/marketing'
import { userListApi } from '@/api/user'
export default {
  data () {
    return {
      loading: false,
      options: [],
      fromList: fromList,
      listLoading: false,
      tableData: {
        data: [],
        total: 0
      },
      tableFrom: {
        page: 1,
        limit: 20,
        category: 'integral',
        dateLimit: '',
        userIdList: []
      },
      userIdList: [],
      userList: [],
      timeVal: [],
      values: []
    }
  },
  mounted () {
    this.getList()
    // this.getUserList()
  },
  methods: {
    remoteMethod (query) {
      console.log(query)
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          userListApi({ keywords: query, page: 1, limit: 10 }).then(res => {
            this.options = res.list
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    seachList () {
      this.tableFrom.page = 1
      this.getList()
    },
    // 选择时间
    selectChange (tab) {
      this.tableFrom.dateLimit = tab
      this.tableFrom.page = 1
      this.timeVal = []
      this.getList()
    },
    // 具体日期
    onchangeTime (e) {
      this.timeVal = e
      this.tableFrom.dateLimit = e ? this.timeVal.join(',') : ''
      this.tableFrom.page = 1
      this.getList()
    },
    // 列表
    getList () {
      this.listLoading = true
      integralListApi({ limit: this.tableFrom.limit, page: this.tableFrom.page }, this.tableFrom).then(res => {
        this.tableData.data = res.list
        this.tableData.total = res.total
        this.listLoading = false
      }).catch(res => {
        this.listLoading = false
      })
    },
    pageChange (page) {
      this.tableFrom.page = page
      this.getList()
    },
    handleSizeChange (val) {
      this.tableFrom.limit = val
      this.getList()
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
