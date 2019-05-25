import React,{Component} from 'react'
import './TodoApp.css'
import img from './img/chahao.jpg'
class TodoApp extends Component {
    constructor(props) {
      super(props);
      // const items = [
      //   {
      //     text: "learn",
      //     id: 1
      //   },{
      //     text: "react",
      //     id: 2
      //   }
      // ]
      this.state = {items: [],inputVal:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);     
    }
  
    render() {
      return (
        <div key={this.state.items.length}>
          <h3>TODOLISTS</h3>
          <div className='lists'>
            <ul key={this.state.items.length}>
              {
                this.state.items.map((items,index) => {
                  return(
                  
                    <div className='content' key={this.state.items.length}>
                      <li>{items}<img src={img} alt="delete" className='del_pic'
                      onClick={this.handleDelete.bind(this,index)} /></li>
                    </div>
                    
                  
                  )
                })
                
              }
            </ul>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              添加事项：
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.inputVal}

            />
            <button className='btn_add'>
              Add
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({inputVal: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.inputVal.length) {
        return;
      }
      this.setState({
        items:[...this.state.items,this.state.inputVal],
        inputVal:''
      })
      }

      handleDelete(index) { 
        const items = [...this.state.items]
        items.splice(index,1)
        this.setState({
           items:items
         });  
      }
    }




  

  

 export default TodoApp 
