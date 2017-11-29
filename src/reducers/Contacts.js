const initialUserState = {
  list: [
    {
      id: 1,
      startDate: '01/01/2016',
      user:{
        id: 123,
        name: 'Анастасия',
        nickname: 'nasty',
        age: 30,
        lastVisit: '12.12.2017'
      },
      chat:[
        {
          author: '123',
          text: 'Привет!',
          date: '24.11.2017',
          status: 'new'
        },
        {
          author: 'you',
          text: 'Привет!',
          date: '24.11.2017',
          status: 'read'
        },
        {
          author: '123',
          text: 'Привет!',
          date: '24.11.2017',
          status: 'new'
        },
        {
          author: 'you',
          text: 'Привет!',
          date: '24.11.2017',
          status: 'read'
        },
        {
          author: '123',
          text: 'Привет!',
          date: '24.11.2017',
          status: 'new'
        },
        {
          author: 'you',
          text: 'Привет!',
          date: '24.11.2017',
          status: 'read'
        },{
          author: '123',
          text: 'Привет!',
          date: '24.11.2017',
          status: 'new'
        },
        {
          author: 'you',
          text: 'Привет!',
          date: '24.11.2017',
          status: 'read'
        }
      ]
    },
    {
      id: 2,
      startDate: '01/03/2016',
      user:{
        id: 124,
        name: 'Бэлла',
        nickname: 'belle',
        age: 25,
        lastVisit: '12.11.2017'
      },
      chat:[
        {
          author: 'you',
          text: 'Привет!',
          date: '23.11.2017',
          status: 'wait'
        },
        {
          author: '124',
          text: 'Давно не писал',
          date: '23.11.2017',
          status: 'read'
        }
      ]
    },
    {
      id: 3,
      startDate: '31/06/2016',
      user:{
        id: 125,
        name: 'Петр',
        nickname: 'pat',
        age: 35,
        lastVisit: '12.10.2017'
      },
      chat:[
        {
          author: '123',
          text: 'Хотел рассказать историю как мы ходили на охоту',
          date: '23.11.2017',
          status: 'delivered'
        },
        {
          author: 'you',
          text: 'Расскажи что нибудь!',
          date: '23.11.2017',
          status: 'read'
        }
      ]
    },
    {
      id: 4,
      startDate: '01/11/2017',
      user:{
        id: 126,
        name: 'Вальдемар',
        nickname: 'valya',
        age: 27,
        lastVisit: '12.10.2015'
      },
      chat:[
        {
          author: 'you',
          text: 'Привет. Ну что как там твои дела?',
          date: '23.10.2017',
          status: 'read'
        },
        {
          author: '126',
          text: 'Привет. Ты занят?',
          date: '23.10.2017',
          status: 'read'
        },
      ]
    },
    {
      id: 5,
      startDate: '23/11/2017',
      user:{
        id: 127,
        name: 'Анжела',
        nickname: 'joly',
        age: 25,
        lastVisit: '24.11.2015'
      },
      chat:[
        {
          author: 'you',
          text: 'Привет. Я парень мне 28лет, а ты?',
          date: '23.06.2017',
          status: 'read'
        },
        {
          author: '127',
          text: 'Привет. Ты кто?',
          date: '23.06.2017',
          status: 'read'
        }
      ]
    }
  ]
}

export default function (state=initialUserState, action) {
  switch (action.type){
    default:
      return state;
  }
}