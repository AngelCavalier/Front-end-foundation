/**
 * 写一个 find 方法，根据 id 查找 data 树中的任意一项，例如：
 * find(data, '101') // => '浦东'
 * find(data, '201') // => '西湖区'
 */
var data = [
  {
    id: '100',
    name: '上海',
    children: [
      {
        id: '101',
        name: '浦东',
        children: [],
      },
      {
        id: '102',
        name: '浦西',
        children: [],
      },
    ],
  },
  {
    id: '200',
    name: '杭州',
    children: [
      {
        id: '201',
        name: '西湖区',
        children: [
          {
            id: '221',
            name: '黄龙时代',
            children: [],
          },
        ],
      },
      {
        id: '202',
        name: '余杭区',
        children: [],
      },
    ],
  },
];

// 答题：
function find(data, id) {
  for (let i in data) {
    //console.log('i', i);
    //console.log('datai', data[i].children);
    if (data[i].id === id) {
      console.log(data[i].name);
      break;
    } else {
      find(data[i].children, id);
    }
  }
}
find(data, '101');
find(data, '201');
