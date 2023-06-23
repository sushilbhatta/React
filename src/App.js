import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
            //in case of vanilla js we have to do ,
           // const para=document.createElement('p')
    // para.textContent('this is also visible.')
    // const root=document.getElementsById('root')
    // root.append('para')
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
