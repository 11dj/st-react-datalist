import React, { Component } from 'react'

export default class DataList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialArray: this.props.option,
      currentArray: this.props.option
    }
  }

  onChangeInput (e) {
    let iniOp = document.getElementById('initial-option')
    this.props.onInputChange(e.target.value)
    let str = (e.target.value).toLowerCase()
    let curPart = this.state.initialArray
    let newPart = curPart.filter(x => new RegExp(str).test(x.toLowerCase()))
    if (!newPart.length) {
      iniOp.style.display = 'block'
    } else {
      iniOp.style.display = 'none'
    }
    this.setState({ currentArray: newPart })
  }

  act (e) {
    if (e.type === 'focus') {
      document.getElementById('ggg').style.display = 'block'
      document.getElementById('st-input').value = ''
    } else if ((e.type === 'blur')) {
      document.getElementById('ggg').style.display = 'none'
      this.setState({ currentArray: this.state.initialArray })
    }
  }

  getDatalist (e) {
    this.props.onInputChange(e.target.value)
    document.getElementById('st-input').value = e.target.value
    document.getElementById('ggg').style.display = 'none'
  }

  render() {
    return (
      <div className="st-datalist-container" onBlur={this.act.bind(this)} >
        <input 
          className="st-datalist-input"
          id='st-input'
          placeholder={this.props.placeholder}
          onChange={this.onChangeInput.bind(this)}
          onFocus={this.act.bind(this)}
          value={this.props.value}
          />
        <div className="st-datalist" id='ggg'>
          <div className="st-datalist-option"
            style={{display: 'none'}}
            id='initial-option'>ไม่พบข้อมูล</div>
          {
            this.state.currentArray.map((i) =>
            <option key={i}
              className="st-datalist-option"
              value={`${i}`}
              onMouseDown={this.getDatalist.bind(this)}>
              {i}
            </option>
            )
          }
        </div>
      </div>
    );
  }
}
