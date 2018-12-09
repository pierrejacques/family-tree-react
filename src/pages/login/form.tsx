import * as React from 'react'

interface FormProps {
  onSubmit(state: object): void;
  name: string; 
  inputs: {
    [field: string]: {
      order: number;
      type: string;
      placeholder: string;
      validator(value: string, state: object): Promise<string>;
    }
  }
}

interface FormState {
  inputs: {
    [field: string]: {
      virgin: boolean;
      errorText: string;
      value: string;
    }
  }
}

export default class Form extends React.PureComponent<FormProps, FormState> {
  state = {
    inputs: {},
  }

  componentDidMount() {
    const inputs = {}
    Object.keys(this.props.inputs).forEach((key) => {
      Reflect.set(inputs, key, {
        virgin: true,
        errorText: '',
        value: ''
      })
    })
    this.setState({ inputs })
  }

  setValue = (key, value) => {
    const { errorText } = this.state.inputs[key]
    const inputs = Object.assign({}, this.state.inputs, {
      [key]: {
        virgin: false,
        value,
        errorText,
      },
    })
    this.setState({ inputs })
  }

  validate = (key) => {
    const { validator } = this.props.inputs[key]
    const values = this.values
    validator(values[key], values).then((errorText) => {
      const input = this.state.inputs[key]
      const inputs = Object.assign({}, this.state.inputs, {
        [key]: {
          ...input,
          errorText,
        }
      })
      this.setState({ inputs })
    })
  }

  onSubmit = async () => {
    const values = this.values
    const errorTexts = await Promise.all(
      Object.keys(values).map(
        (key) => this.props.inputs[key].validator(values[key], values)
      )
    )
    if (errorTexts.every(i => !i)) {
      this.props.onSubmit(this.values)
    }
  }

  get submittable(): boolean {
    const { inputs } = this.state
    return Object.keys(this.state.inputs).every(key => {
      const { virgin, errorText } = inputs[key] 
      return !virgin && !errorText
    })
  }

  get values() {
    const values = {}
    const { inputs } = this.state
    Object.keys(inputs).forEach((key) => {
      Reflect.set(values, key, inputs[key].value)
    })
    return values
  }

  render() {
    const { inputs } = this.state
    const { inputs: inputsConfig } = this.props

    return (
      <form className="form__form" onSubmit={this.onSubmit} >
        {
          Object.keys(inputs)
          .map(key => ({ key, ...inputs[key], ...inputsConfig[key] }))
          .sort(({ order: a }, { order: b }) => a > b ? 1 : -1)
          .map(({ value, errorText, type, placeholder, key }) => {
            return (
              <input
                key={key}
                className={`form__input ${errorText ? 'error' : ''}`}
                type={type}
                placeholder={placeholder}
                value={value}
                data-error-text={errorText}
                onChange={e => this.setValue(key, e.target.value)}
                onBlur={() => this.validate(key)}
              />
            )
          })
        }
        <input
          className={`form__input form__input--submit ${this.submittable ? 'disabled' : ''}`}
          type="submit"
          value={this.props.name}
        />
      </form>
    )
  }
}
