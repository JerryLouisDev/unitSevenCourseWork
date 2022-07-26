/* This is one way how to get react elements to the browser 

const title = React.createElement(
    'h1',
    {id:'main-title',title:'This is a title'},
    'First react element!'

);

const desc = React.createElement(
    'p',
    null,
    'just learned eleemtsof reacts'

);

*/

/* jsx formatting

const petName =  'Ernie';
const header = (
  <header>
    <p>I have a pet named {petName}.</p> 
  </header>
);
 */
// This is using JSX formmating 
const title = <h1>First react element!</h1>
{/*This is a JSX Comment!!*/}
const desc = <p>just learned eleemtsof reacts</p>
const header = (
<header>
    {title}
    {desc}
</header>);

console.log(title)
ReactDOM.render(
    header,
    document.getElementById('root')

);