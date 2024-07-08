// 根据下面的调用示例，完成函数 getDatas

getDatas(); // 输出：获取第1页的数据，每页显示10条
getDatas(2); // 输出：获取第2页的数据，每页显示10条
getDatas(2, 30); // 输出：获取第2页的数据，每页显示30条

function getDatas(page = 1, size = 10) {
    console.log(`获取第${page}页的数据，每页显示${size}条`);
}