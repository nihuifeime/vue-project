<template>
    <div id="mkcn-left-two">
        <div class="mkcn-left-two-router">
            <router-link to="5">
                <button>
                    返回上一级
                </button>
            </router-link>
        </div>
        <div class="mkcn-left-two-table">
            <el-table
                :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                height="95%"
                width='100%'
                border
                style="width: 100%">
                <el-table-column prop="index" label="序号"  width="50" align='center'>
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column prop="NICKNAME_OLD" label="煤矿名称">
                </el-table-column>
                 <el-table-column
                prop="FULLNAME"
                label="所属机构">
                </el-table-column>
                <el-table-column  prop="STATUS" label="传输状态" >
                    <template slot-scope="scope">
                        <span v-if="scope.row.STATUS=='正常'" style="color:green;font-weight:600;font-size:15px;">{{ scope.row.STATUS }}</span>
                        <span v-else-if="scope.row.STATUS=='异常'" style="color: red;font-weight:600;font-size:15px;">{{ scope.row.STATUS }}</span>
                        <span v-else="scope.row.STATUS=='未联网'" style="color:#333;font-weight:600;font-size:15px;">{{ scope.row.STATUS }}</span>
                    </template>
                </el-table-column>
               
                
            </el-table>
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pagesize"
                background
                layout="total, prev, pager, next, jumper"
                :total="pagelength">
            </el-pagination>
        </div>
    </div>
</template>
<style>
    #mkcn-left-two{
        width: 100%;
        height: 100%;
    }
    .mkcn-left-two-router{
        width: 100%;
        height: 5%;
        border-bottom: 1px solid #000;   
    }
    .mkcn-left-two-router button{
        height: 100%;
        background: rgba(0, 0, 0, 0);
        outline: none;
        border: 0px;
        margin-left: 15px;
    }
    .mkcn-left-two-table{
        width: 100%;
        height: 93%;
    }
</style>
<script>
export default {
    data(){
        return{
            currentPage: 1,//默认开始页面 this.$store.state.pages  $store.state.loginuser
            pagesize:14,//每页的数据条数
            pagelength:1000,//默认数据总数
            tableData:this.$route.query.data
        }
    },
    mounted(){
      this.pagelength=this.tableData.length;
    },
}
</script>

