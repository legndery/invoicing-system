import React, { Component } from 'react'
import { Input, InputAdornment} from "@material-ui/core";
import { Search } from "@material-ui/icons";
export class SearchBox extends Component {
  constructor(props){
      super(props);
      this.state = {
          term: ''
      }
  }
  onChange = (e)=>{
    this.setState({
      term: e.target.value
    })
  }
  render() {
    return (
      <div style={{textAlign:'center', padding:'10px'}}>
          <Input
          style={{borderRadius: '25px', background:'#111', padding:'7px', width:'90%'}}
          id="input-with-icon-adornment"
          type="search"
          input={{padding:'5px'}}
          value={this.state.term}
          onChange={this.onChange}
          disableUnderline={true}
          placeholder="search"
          
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          />
      </div>
    )
  }
}

export default SearchBox
