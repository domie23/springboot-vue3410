const base = {
    get() {
        return {
            url : "http://localhost:8080/daxueshengziyuanzhefuwuwang/",
            name: "daxueshengziyuanzhefuwuwang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daxueshengziyuanzhefuwuwang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "珠江学院大学生自愿者服务网"
        } 
    }
}
export default base
