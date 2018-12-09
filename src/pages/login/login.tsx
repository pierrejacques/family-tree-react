import * as React from 'react'
import ajax from 'src/utils/ajax'
import Form from './form'

import './login.less'
import BackgroundImage from 'src/asset/img/family-tree.png'

const LOGIN_TEXT = '账号登陆'
const REGIST_TEXT = '账号注册'

interface LoginPageState {
  isLogging: boolean;
  userName: string;
  password: string;
  repassword: string;
}

const loginInputs = {
  userName: {
    order: 0,
    type: 'text',
    placeholder: '用户名',
    validator: async v => v ? '' : '请输入用户名',
  },
  password: {
    order: 1,
    type: 'password',
    placeholder: '密码',
    validator: async v => v ? '' : '请输入密码',
  }
}

const registInputs = {
  userName: {
    order: 0,
    type: 'text',
    placeholder: '用户名',
    validator: async v => {
      if (!v) return '请输入用户名'
      ajax.get('user/nameValidity', { params: { userName: v }}).then()
    }
  },
  password: {
    order: 1,
    type: 'password',
    placeholder: '密码',
    validator: async (v, state) => {
      if (!v) return '请输入密码'
      if (v.length < 8) return '密码长度至少8位'
      if (v !== state.repassword) return '两次密码输入不相等'
      return ''
    }
  },
  repassword: {
    order: 2,
    type: 'password',
    placeholder: '确认密码',
    validator: async (v, state) => {
      if (!v) return '请确认密码'
      if (v !== state.password) return '两次密码输入不相等'
      return ''
    }
  },
}

export default class LoginPage extends React.PureComponent {
  state: LoginPageState = {
    isLogging: true,
    userName: '',
    password: '',
    repassword: '',
  }

  changeState = (newState): void => {
    this.setState(newState)
  }

  login = (state): void => {
    const { userName: username, password } = state
    ajax.post('user/authentication', { username, password }).then()
  }

  regist = (state): void => {
    const { userName: username, password } = state
    ajax.post('user/newUser', { username, password }).then()
  }

  render() {
    const { isLogging } = this.state

    return (
      <main className="login-page">
        <img className="login-page__img" src={BackgroundImage} />
        <section className="login-page__form form">
          <h3 className="form__title">
            {
              isLogging ? LOGIN_TEXT : REGIST_TEXT
            }
          </h3>
          {
            isLogging ?
              <Form name="登录" inputs={loginInputs} onSubmit={this.login} /> : 
              <Form name="注册" inputs={registInputs} onSubmit={this.regist} />
          }
          <a className="form__switch" onClick={() => this.setState({ isLogging: !isLogging })} >
            {
              isLogging ? REGIST_TEXT : LOGIN_TEXT
            }
          </a>
        </section>
        <section className="login-page__text intro-text">
          <h1 className="intro-text__title">「 同堂 」</h1>
          <h2 className="intro-text__sub-title">家谱构建&分享平台</h2>
        </section>
      </main>
    )
  }
}
