import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    meta: {
      title: '系统管理',
      icon: 'md-settings'
    },
    component: Main,
    children: [
      {
        path: 'user_page',
        name: 'user_page',
        meta: {
          title: '用户',
          icon: 'md-person-add'
        },
        component: () => import('@/view/manage/user/user.vue')
      },
      {
        path: 'role_page',
        name: 'role_page',
        meta: {
          icon: 'md-person',
          title: '角色'
        },
        component: () => import('@/view/manage/role/role.vue')
      },
      {
        path: 'menu_page',
        name: 'menu_page',
        meta: {
          icon: 'md-menu',
          title: '菜单'
        },
        component: () => import('@/view/manage/menu/menu.vue')
      },
      {
        path: 'user_role_page',
        name: 'user_role_page',
        meta: {
          icon: 'md-contact',
          title: '用户角色'
        },
        component: () => import('@/view/manage/user-role/user-role.vue')
      },
      {
        path: 'role_limit_page',
        name: 'role_limit_page',
        meta: {
          icon: 'md-lock',
          title: '角色权限'
        },
        component: () => import('@/view/manage/role-limit/role-limit.vue')
      },
      {
        path: 'role_business_page',
        name: 'role_business_page',
        meta: {
          icon: 'logo-buffer',
          title: '角色业务'
        },
        component: () => import('@/view/manage/role_business/role_business.vue')
      },
      {
        path: 'data_page',
        name: 'data_page',
        meta: {
          icon: 'md-analytics',
          title: '数据字典'
        },
        component: () => import('@/view/manage/data/data.vue')
      }
    ]
  },

  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'ios-book',
      title: '内容'
    },
    component: Main,
    children: [
      {
        path: 'factory_page',
        name: 'factory_page',
        meta: {
          icon: 'ios-home',
          title: '厂家'
        },
        component: () => import('@/view/components/factory/index.vue')
      },
      {
        path: 'single_page',
        name: 'single_page',
        meta: {
          icon: 'md-desktop',
          title: '单片'
        },
        component: () => import('@/view/components/single/single.vue')
      },
      {
        path: 'serials_page',
        name: 'serials_page',
        meta: {
          icon: 'ios-desktop',
          title: '剧集'
        },
        component: () => import('@/view/components/serials/serials.vue')
      },
      {
        path: 'textbook_page',
        name: 'textbook_page',
        meta: {
          icon: 'md-bookmarks',
          title: '文本电子书'
        },
        component: () => import('@/view/components/textbook/index.vue')
      },
      {
        path: 'picbook_page',
        name: 'picbook_page',
        meta: {
          icon: 'md-book',
          title: '图片电子书'
        },
        component: () => import('@/view/components/picbook')
      },
      {
        path: 'people_page',
        name: 'people_page',
        meta: {
          icon: 'md-people',
          title: '人物'
        },
        component: () => import('@/view/components/people/index.vue')
      },
      {
        path: 'paperbook_page',
        name: 'paperbook_page',
        meta: {
          icon: 'ios-paper',
          title: '实体纸书'
        },
        component: () => import('@/view/components/paperbook/paperbook.vue')
      },
      {
        path: 'qikan_page',
        name: 'qikan_page',
        meta: {
          icon: 'md-document',
          title: '学术期刊'
        },
        component: () => import('@/view/components/qikan/qikan.vue')
      },
      {
        path: 'baozhi_page',
        name: 'baozhi_page',
        meta: {
          icon: 'md-paper',
          title: '报纸'
        },
        component: () => import('@/view/components/baozhi/baozhi.vue')
      },
      {
        path: 'news_page',
        name: 'news_page',
        meta: {
          icon: 'ios-list-box',
          title: '新闻资讯'
        },
        component: () => import('@/view/components/news/news.vue')
      },
      {
        path: 'tag_page',
        name: 'tag_page',
        meta: {
          icon: 'ios-create',
          title: '标签库'
        },
        component: () => import('@/view/components/tag/tag.vue')
      },
      {
        path: 'newspaper_page',
        name: 'newspaper_page',
        meta: {
          icon: 'logo-buffer',
          title: '报刊文献'
        },
        component: () => import('@/view/components/newspaper/newspaper.vue')
      },
      {
        path: 'listenbook_page',
        name: 'listenbook_page',
        meta: {
          icon: 'md-headset',
          title: '听书'
        },
        component: () => import('@/view/components/listenbook/listenbook.vue')
      }
    ]
  },

  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },

  {
    path: '/lanmu_page',
    name: 'lanmu_page',
    meta: {
      icon: 'md-cloud-upload',
      title: '栏目'
    },
    component: Main,
    children: [
      {
        path: 'lanmu_settings_page',
        name: 'lanmu_settings_page',
        meta: {
          icon: 'ios-settings',
          title: '栏目设置'
        },
        component: () => import('@/view/lanmu/lanmu_settings.vue')
      },
      {
        path: 'lanmu_content_page',
        name: 'lanmu_content_page',
        meta: {
          icon: 'md-clipboard',
          title: '栏目内容'
        },
        component: () => import('@/view/lanmu/lanmu_content.vue')
      }
    ]
  },
  {
    path: '/theme',
    name: 'theme',
    meta: {
      icon: 'ios-stats',
      title: '主题'
    },
    component: Main,
    children: [
      {
        path: 'series',
        name: 'series',
        meta: {
          icon: 'ios-funnel',
          title: '系列'
        },
        component: () => import('@/view/theme/series.vue')
      },
      {
        path: 'changjia',
        name: 'changjia',
        meta: {
          icon: 'ios-home',
          title: '厂家'
        },
        component: () => import('@/view/theme/changjia.vue')
      }
    ]
  },
  {
    path: '/setup',
    name: 'setup',
    meta: {
      hideInBread: true,
      icon: 'ios-settings',
      title: '设置'
    },
    component: Main,
    children: [
      {
        path: 'ip_message_page',
        name: 'ip_message_page',
        meta: {
          icon: 'ios-document',
          title: 'IP信息'
        },
        component: () => import('@/view/setup/ip-message/ip-message.vue')
      },
      {
        path: 'price_message_page',
        name: 'price_message_page',
        meta: {
          icon: 'ios-clipboard',
          title: '价格信息'
        },
        component: () => import('@/view/setup/price-message/price-message.vue')
      }
    ]
  },
  {
    path: '/push',
    name: 'push',
    meta: {
      title: '推送',
      icon: 'ios-paper-plane',
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'col_home_page',
        name: 'col_home_page',
        meta: {
          icon: 'md-planet',
          title: '栏目首页'
        },
        component: () => import('@/view/push/col-home.vue')
      },
      {
        path: 'business_home_page',
        name: 'business_home_page',
        meta: {
          icon: 'ios-briefcase',
          title: '业务首页'
        },
        component: () => import('@/view/push/business-home.vue')
      }
    ]
  },
  {
    path: '/record',
    name: 'record',
    meta: {
      title: '日志',
      icon: 'md-list-box',
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'content_count_page',
        name: 'content_count_page',
        meta: {
          icon: 'md-pie',
          title: '内容统计'
        },
        component: () => import('@/view/record/content-count/content-count.vue')
      },
      {
        path: 'total_count_page',
        name: 'total_count_page',
        meta: {
          icon: 'md-pie',
          title: '总数统计'
        },
        component: () => import('@/view/record/total-count/total-count.vue')
      },
      {
        path: 'dianbo_count_page',
        name: 'dianbo_count_page',
        meta: {
          icon: 'md-pie',
          title: '点播统计'
        },
        component: () => import('@/view/record/dianbo-count/dianbo-count.vue')
      },
      {
        path: 'col_count_page',
        name: 'col_count_page',
        meta: {
          icon: 'md-pie',
          title: '栏目统计'
        },
        component: () => import('@/view/record/col-count/col-count.vue')
      }
    ]
  },
  {
    path: '/chaoxing',
    name: 'chaoxing',
    meta: {
      title: '超星图书',
      icon: 'ios-bookmarks',
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'tushu_lanmu_page',
        name: 'tushu_lanmu_page',
        meta: {
          icon: 'ios-list-box',
          title: '图书栏目'
        },
        component: () => import('@/view/chaoxing/tushu-lanmu/tushu-lanmu.vue')
      },
      {
        path: 'tushu_search_page',
        name: 'tushu_search_page',
        meta: {
          icon: 'md-search',
          title: '图书搜索'
        },
        component: () => import('@/view/chaoxing/tushu-search/tushu-search.vue')
      },
      {
        path: 'local_book_page',
        name: 'local_book_page',
        meta: {
          icon: 'ios-folder-open',
          title: '本地图书存储'
        },
        component: () => import('@/view/chaoxing/local-book/local-book.vue')
      }
    ]
  },
  {
    path: '/android_area',
    name: 'android_area',
    meta: {
      icon: 'ios-bug',
      title: '安卓专区',
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'apk-update_page',
        name: 'apk-update_page',
        meta: {
          icon: 'ios-bug',
          title: 'APK更新管理'
        },
        component: () => import('@/view/android-area/apk-update.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'level_2_2_2',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/tiku',
    name: 'tiku',
    meta: {
      icon: 'md-bookmarks',
      title: '题库',
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'select_page',
        name: 'select_page',
        meta: {
          icon: 'ios-checkmark-circle',
          title: '选择题'
        },
        component: () => import('@/view/tiku/select/select.vue')
      },
      {
        path: 'panduan_ti_page',
        name: 'panduan_ti_page',
        meta: {
          icon: 'ios-close-circle',
          title: '判断题'
        },
        component: () => import('@/view/tiku/panduan/panduan.vue')
      },
      {
        path: 'wenjuan_page',
        name: 'wenjuan_page',
        meta: {
          icon: 'ios-create',
          title: '问卷题'
        },
        component: () => import('@/view/tiku/wenjuan/wenjuan.vue')
      }
    ]
  },
  {
    path: '/group_volume',
    name: 'group_volume',
    meta: {
      icon: 'ios-paper-outline',
      title: '组卷',
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'test_paper_page',
        name: 'test_paper_page',
        meta: {
          icon: 'md-paper',
          title: '试卷'
        },
        component: () => import('@/view/group-volume/test-paper.vue')
      },
      {
        path: 'questionnaire_page',
        name: 'questionnaire_page',
        meta: {
          icon: 'md-help',
          title: '问卷'
        },
        component: () => import('@/view/group-volume/questionnaire.vue')
      }
    ]
  },
  {
    path: '/prize',
    name: 'prize',
    meta: {
      icon: 'ios-flower',
      title: '奖品',
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'gift_cards_page',
        name: 'gift_cards_page',
        meta: {
          icon: 'ios-bowtie',
          title: '礼品卡'
        },
        component: () => import('@/view/prize/gift-cards.vue')
      }
    ]
  },
  // {
  //   path: '/error_logger',
  //   name: 'error_logger',
  //   meta: {
  //     hideInBread: true,
  //     hideInMenu: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'error_logger_page',
  //       name: 'error_logger_page',
  //       meta: {
  //         icon: 'ios-bug',
  //         title: '错误收集'
  //       },
  //       component: () => import('@/view/single-page/error-logger.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/error_store',
  //   name: 'error_store',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'error_store_page',
  //       name: 'error_store_page',
  //       meta: {
  //         icon: 'ios-bug',
  //         title: '错误收集'
  //       },
  //       component: () => import('@/view/error-store/error-store.vue')
  //     }
  //   ]
  // },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
