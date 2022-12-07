import './todorow.css';

export default function Todorow({setList, todo ,getObject}) {

  function changeState(){
    //console.log('ok!');
    todo.state= !todo.state;
    //console.log(todo.state);
    setList();
  }

  if (todo.state) {
    return (
      <>
        <tr>
          <th scope="row"><input className="btn btn-primary" type="button" value=" Ing " onClick={()=>changeState()}/></th>
          <td className='text-white pointer' onClick={getObject} data-bs-toggle="modal" data-bs-target="#staticBackdrop"><strong>{todo.object}</strong></td>
        </tr>

      </>
    );

  } else {

    return (
      <>
        <tr>
          <th scope="row"><input className="btn btn-secondary" type="button" value="Done" onClick={()=>changeState()}/></th>
          <td  className="pointer" onClick={getObject} data-bs-toggle="modal" data-bs-target="#staticBackdrop"><del>{todo.object}</del></td>
        </tr>

      </>
    );
  }
}