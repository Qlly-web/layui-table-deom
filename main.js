layui.use(['table', 'layer'], function() {
	var table = layui.table;
	table.render({
		elem: "#info",
		page: true,
		// url: "/info",
		// method: 'POST',
		// where: {
		// 	// 传参
		// },
		text: {
			none: '暂无相关数据'
		},
		cols: [
			[{
					field: 'name',
					title: '姓名',
					align: 'center',
				},
				{
					field: 'major',
					title: '专业',
					align: 'center'
				},
				{
					title: '操作',
					fixed: 'right',
					width: 80,
					align: 'center',
					toolbar: '#add-btn'
				}
			]
		],
		data: [{
			// 数据要有id字段，用于实现判断是否重复添加以及删除功能
			id: "1001",
			name: "李小明",
			major: "工商管理"
		}, {
			id: "1002",
			name: "张小红",
			major: "会计学"
		},
		{
			id: "1003",
			name: "张小军",
			major: "财务管理"
		}]
	});
	var list = table.render({
		elem: "#list",
		page: true,
		cols: [
			[{
					field: 'name',
					title: '姓名',
					align: 'center',
				},
				{
					field: 'major',
					title: '专业',
					align: 'center'
				},
				{
					title: '操作',
					fixed: 'right',
					width: 80,
					align: 'center',
					toolbar: '#del-btn'
				}
			]
		],
		text: {
			none: '暂无相关数据'
		},
		data: []
	})
	table.on('tool(info-filter)', function(obj) {
		var t = table.cache['list'];
		var d = obj.data;
		for (var i = 0; i < t.length; i++) {
			if (d.id == t[i].id) { // id
				layer.msg("不允许重复添加", {
					icon: 2
				});
				return;
			}
		}
		t.push(d)
		table.reload("list", {
			data: t
		});
	});
	table.on('tool(list-filter)', function(obj) {
		var t = table.cache['list'];
		var d = obj.data;
		for (var i = 0; i < t.length; i++) {
			if (d.id == t[i].id) { // id
				t.splice(i, 1);
				break;
			}
		}
		table.reload("list", {
			data: t
		});
	});
	// 直接用table.cache['list']获取用户添加的数据
})
