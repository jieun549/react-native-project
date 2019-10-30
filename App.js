import React from 'react';
import { StyleSheet,Text,View,FlatList,AsyncStorage } from 'react-native';
import Header from './app/components/Header'
import SubTitle from './app/components/SubTitle'
import Input from './app/components/Input'
import TodoItem from './app/components/Todo'



//App이라는 class를 만들고 이를 export합니다.
export default class App extends React.Component {
  state = {
    inputValue:"",
    todos : [
      {
        title : "과제 마무리하기",
        isComplete: false
      },
      {
        title: "자격증 준비하기",
        isComplete: false
      }
    ]
  }

  componentWillMount() {
    AsyncStorage.getItem('@todo:state').then((state)=> {
        if( state != null){
            this.setState(JSON.parse(state));
        }
    });
  }

  saveItem = () => {
    //state를 문자열로 바꿔서 저장함
    AsyncStorage.setItem('@todo:state',JSON.stringify(this.state));
  }


  _makeTodoItem = ({ item, index }) => {
    return (
      <TodoItem
        text={item.title}
        isComplete={item.isComplete}
        changeComplete={() => {
          const newTodo = [...this.state.todos];
          newTodo[index].isComplete = !newTodo[index].isComplete;
          this.setState({todos:newTodo},this.saveItem);
        }}
        deleteItem={() => {
          const newTodo = [...this.state.todos];
          newTodo.splice(index,1);
          this.setState({todos:newTodo},this.saveItem);
        }} />
    );
  }

  _changeText = (value) => {
    this.setState({inputValue:value});
  }

  _addTodoItem = () =>{
    if(this.state.inputValue != ''){
    const Input = this.state.inputValue;
    const prevItem = this.state.todos;
    const newItem = { title: Input, isComplete: false}
    this.setState({
      inputValue: '',
      todos: prevItem.concat(newItem)
    },this.saveItem);
  }
  }
  


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
            <Header/>
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="=>질문 입력"/>
          <Input
            value={this.state.inputValue}
            changeText={this._changeText}
            addTodo={this._addTodoItem}/>
        </View>
        <View style={styles.todoContainer}>
          <SubTitle title="=>할일 목록"/>
          <FlatList
	        data={this.state.todos}
	        renderItem={this._makeTodoItem}
	        keyExtractor={(item, index) => { return `${index}`}}/>
        </View>
      </View>
    );
  }
}

//style을 설정해줍니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    backgroundColor:'#FFFF00',
  },
  inputContainer: {
    marginTop:20,
    marginLeft:20
  },
  todoContainer: {
    marginTop:40,
    marginLeft:20
  }
});