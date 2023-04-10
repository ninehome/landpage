import Mock from 'mockjs';

/* 请求类型/type必须小写 */

const gameNumber = [1, 3];
let practiceNumber = 2;

// 用户信息
Mock.mock('/userinfo', 'get', {
  openid: '@id',
  nickname: '@name',
  headImgUrl: 'https://placeimg.com/64/64/people@word',
  invitationCode: '123654',
  score: '@natural(0, 999)',
  gameNumber,
  practiceNumber,
  prize: 1.5,
  rank: 22,
  trailer: {
    time: new Date(2018, 2, 5, 21, 30),
    prize: 200
  },
  messages: [
    '规则：完成15个问题，就能得到300卢布',
    '技巧：根据自己的实际情况回答问题~',
    '提示：页面右上角有音效开关哦~',
    '奖金：完成限时问答，点击联系客户经理获得报酬'
  ]
});

// 排行榜数据
Mock.mock(/\/rank/, 'get', {
  'rankingList|20-30': [
    {
      openid: '@id',
      nickname: '@name',
      headImgUrl: 'https://placeimg.com/64/64/people@word',
      score: '@natural(0, 999)'
    }
  ]
});

Mock.mock('/play', 'post', (options) => {
  const state = { state: false };
  switch (JSON.parse(options.body).type) {
    case 'normal':
      if (gameNumber[0] > 0) {
        gameNumber[0] -= 1;
        state.state = true;
      } else {
        state.msg = 'Сегодняшняя возможность исчерпана';
      }
      break;
    case 'practice':
      if (practiceNumber > 0) {
        practiceNumber -= 1;
        state.state = true;
      }
      break;
    case 'activity':
      state.state = true;
      break;
    default:
  }
  return state;
});

Mock.mock('/invite', 'post', () => {
  gameNumber[0] += 1;
  gameNumber[1] += 1;
  return {
    state: true
  };
});

// Mock.mock('/question', 'post', {
//   questionId: '@id',
//   questionTitle: '@title',
//   'questionOptions|4': [
//     {
//       content: '@word',
//       rate: '@natural(0, 100)%'
//     }
//   ]
// });


Mock.mock('/question/1', 'post', {
  questionId: '1',
  questionTitle: '1.以下品牌，你最喜欢的是什么？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/2', 'post', {
  questionId: '2',
  questionTitle: '2.以下购物网站，你最常用的是什么？',
  questionOptions: [
    {
      content: 'Yandex.Market',
      rate: '22%'
    },
    {
      content: 'Wildberries',
      rate: '28%%'
    },
    {
      content: 'Ulmart',
      rate: '10%'
    },
    {
      content: 'Joom',
      rate: '25%'
    },
    {
      content: 'Ozon',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/3', 'post', {
  questionId: '3',
  questionTitle: '3.以下你最喜欢的汽车品牌？',
  questionOptions: [
    {
      content: 'Toyota',
      rate: '35%'
    },
    {
      content: 'Porsche',
      rate: '20%'
    },
    {
      content: 'Land Rover',
      rate: '10%'
    },
    {
      content: 'BMW',
      rate: '15%'
    },
    {
      content: 'Rolls-Royce',
      rate: '15%'
    },
    {
      content: 'Audi',
      rate: '15%'
    }
  ]
});

Mock.mock('/question/4', 'post', {
  questionId: '4',
  questionTitle: '4.你多久会在电商网站购物一次？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/5', 'post', {
  questionId: '5',
  questionTitle: '5.你一年在购物网站的总支出大约是多少卢布？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});

Mock.mock('/question/6', 'post', {
  questionId: '6',
  questionTitle: '6.你目前月收入为多少卢布？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/7', 'post', {
  questionId: '7',
  questionTitle: '7.你是否拥有工作薪水以外的收入？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/8', 'post', {
  questionId: '8',
  questionTitle: '8.您期望的月收入大约是多少卢布？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/9', 'post', {
  questionId: '9',
  questionTitle: '9.以下行为，你更倾向于做什么？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/10', 'post', {
  questionId: '10',
  questionTitle: '10.你通常多久时间会出国旅行一次？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/11', 'post', {
  questionId: '11',
  questionTitle: '11.你每月花费在护肤和保养的费用大约是多少？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/12', 'post', {
  questionId: '12',
  questionTitle: '12.您目前有几个小孩？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/13', 'post', {
  questionId: '13',
  questionTitle: '13.是否拥有多份工作？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/14', 'post', {
  questionId: '14',
  questionTitle: '14.是否有从事网络工作多经历？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/15', 'post', {
  questionId: '15',
  questionTitle: '15.如果你只有10卢布预算，以下5件事情，你会选择那一件？',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/16', 'post', {
  questionId: '16',
  questionTitle: '16.',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/17', 'post', {
  questionId: '17',
  questionTitle: '17.',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/question/18', 'post', {
  questionId: '18',
  questionTitle: '18.',
  questionOptions: [
    {
      content: 'Channel',
      rate: '35%'
    },
    {
      content: 'Hermès',
      rate: '20%'
    },
    {
      content: 'Louis Vuitton',
      rate: '10%'
    },
    {
      content: 'Prada',
      rate: '15%'
    }
  ]
});


Mock.mock('/score', 'post', (options) => {
  const body = JSON.parse(options.body);
  let score = 0;
  let state = false;
  // 测试第四个为正确答案
  // if (body.choice === 3) {
  //   state = true;
  //   score = 100 - Math.round((body.costTime[1] - body.costTime[0]) / 100);
  // }
  state = true;
  score = 100 - Math.round((body.costTime[1] - body.costTime[0]) / 100);

  return {
    state,
    score
  };
});
