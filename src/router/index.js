import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index.vue'
import News from '@/view/news.vue'
import Login from '@/view/info/login.vue'
import PerInfo from '@/view/info/perinfo.vue'
import Notice from '@/view/note/notice.vue'
import Chat from '@/view/Chat.vue'
import NoticeInfo from '@/view/note/noticeinfo.vue'
import Out from '@/view/order/out.vue'
import Success from '@/view/order/success.vue'
import Enter from '@/view/order/enter.vue'
import Active from '@/view/order/active.vue'
import Drop from '@/view/order/drop.vue'
import DropOne from '@/components/order/drop_one.vue'
import DropTwo from '@/components/order/drop_two.vue'
import Optionshop from '@/view/order/optionshop.vue'
import Confirm from '@/view/order/confirm.vue'
import Submit from '@/view/order/submit.vue'
import Static from '@/view/order/static.vue'
import SucSta from '@/view/order/suc_sta.vue'
import Attend from '@/view/order/attend.vue'
import err from '@/view/404.vue'
import A from '@/data.vue'
import PlanIn from '@/components/order/plan_in.vue'
import PlanOut from '@/components/order/plan_out.vue'
import testvuex from '@/view/testVuex.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/testvuex',
      name: 'testvuex',
      component: testvuex
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/perinfo',
      name: 'PerInfo',
      component: PerInfo
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/notice/info',
      name: 'NoticeInfo',
      component: NoticeInfo
    },
    {
      path: '/out',
      name: 'OrderOut',
      component: Out
    },
    {
      path: '/success',
      name: 'SuccessOrder',
      component: Success
    },
    {
      path: '/enter',
      name: 'Enter',
      component: Enter,
      children: [
        {
          path: 'plan_in',
          component: PlanIn
        },
        {
          path: 'plan_out',
          component: PlanOut
        }
      ]
    },
    {
      path: '/active',
      name: 'Active',
      component: Active
    },
    {
      path: '/drop',
      name: 'Drop',
      component: Drop,
      children: [
        {
          path: 'drop_one',
          component: DropOne
        },
        {
          path: 'drop_two',
          component: DropTwo
        }
      ]
    },
    {
      path: '/optionshop',
      name: 'OptionShop',
      component: Optionshop
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/static',
      name: 'Static',
      component: Static
    },
    {
      path: '/suc_sta',
      name: 'SucSta',
      component: SucSta
    },
    {
      path: '/attend',
      name: 'Attend',
      component: Attend
    },
    {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '*',
      name: 'not',
      component: err
    }
  ]
})
