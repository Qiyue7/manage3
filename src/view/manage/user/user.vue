<template>
  <div>
    <Card  dis-hover :bordered="false">

      <tables ref='tables' editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
  </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getTableData } from '@/api/data'
export default {
  name: 'user_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        { type: 'selection', width: 60, align: 'center' },
        { title: '用户ID', key: 'name' },
        { title: '*登录名', key: 'email', editable: true },
        { title: '类型', key: 'name' },
        { title: '*可登录', key: 'email', editable: true },
        { title: '更新时间', key: 'createTime' },
        {
          title: '操作',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              })
            }
          ]
        }
      ],
      tableData: []
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res.data
    })
  }
}
</script>

<style>

</style>
