// 用mockjs模拟生成数据
var Mock = require('mockjs')

module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    // 使用在店外订单中，
    'out|56': [
      {
        'id|+1': 1,
        shopName: '@ctitle(4, 6)',
        perName: '@cname(3)',
        city: '@city()',
        time: "@date('yyyy-MM-dd')",
        num: '@natural(13,99)',
        price: '@natural(135,999)',
        proname: '@ctitle(8, 13)',
        present: 'boolean(1, 9, true)',
        beizhu: '@ctitle(24, 36)'
      }
    ],
    // 使用在下单中的各个子组件中，
    'drop|33': [
      {
        'id|+1': 1,
        shopName: '@ctitle(4, 6)',
        perName: '@cname(3)',
        ck: '仓库',
        city: '@city()',
        num: '@natural(13,99)',
        bianma: '@natural(100000,999999)',
        guige: '@natural(1,99)',
        kucun: '@natural(10000,99999)',
        price: '@natural(135,999)',
        imgUrl: '@/assets/logo.png'
      }
    ],
    // 在店内活动页面
    'active|6': [
      {
        'id|+1': 1,
        shopName: '@ctitle(4, 6)',
        mounth: '@natural(1000,99499)',
        halfyear: '@natural(1000,99499)',
        percent: '@natural(1,99)'
      }
    ],
    // 使用在进店拜访中
    'enter|33': [
      {
        'id|+1': 1,
        shopName: '@ctitle(4, 6)',
        perName: '@cname(3)',
        ID: '@natural(100000,999999)',
        phone: '@natural(1350000000,9999999999)',
        remot: '@natural(135,999)',
        time: "@date('yyyy-MM-dd')"
      }
    ],
    // 使用在登录页面中
    'login|3': [
      {
        'id|+1': 1,
        bh: '@ctitle(2,5)',
        psd: '@natural(1000000,999999)',
        bm: '@ctitle(4)'
      }
    ]
  })
  // 返回的data会作为json-server的数据
  return data
}
