import { useState } from 'react';
import Addobject from './Addobject';
import Modal from './Modal';
import './todolist.css';
import Todorow from './Todorow';


export default function ToDoList() {


  const [status, setStaus] = useState("");
  const [list, setList] = useState([
    {
      "id": crypto.randomUUID(),
      "object": "15/11/2022 Culture numérique, écosystème Javascript et prise en main du LMS",
      "state": false
    },
    {
      "id": crypto.randomUUID(),
      "object": "16/11/2022 Techniques de recherche d'emploi / e-réputation",
      "state": false
    },
    {
      "id": crypto.randomUUID(),
      "object": "17/11/2022 Rappels sur la conception de pages Web riches avec HTML5, CSS3 et JavaScript",
      "state": false
    },
    {
      "id": crypto.randomUUID(),
      "object": "22/11/2022 Développement Responsive avec BootStrap",
      "state": false
    },
    {
      "id": crypto.randomUUID(),
      "object": "23/11/2022 Front - Javascript avancés",
      "state": false
    },
    {
      "id": crypto.randomUUID(),
      "object": "25/11/2022 Qualité web avec le référentiel Opquast (référencement, accessibilité, performance…) et certification en centre",
      "state": false
    },
    {
      "id": crypto.randomUUID(),
      "object": "29/11/2022 Développement d'interfaces utilisateurs avec ReactJS",
      "state": true
    },
    {
      "id": crypto.randomUUID(),
      "object": "06/12/2022 Développement coté serveur avec NodeJS",
      "state": true
    },
    {
      "id": crypto.randomUUID(),
      "object": "03/12/2022 Projet final React / NodeJS",
      "state": true
    },
    {
      "id": crypto.randomUUID(),
      "object": "23/12/2022 Bilan des compétences et passage certification OPQUAST",
      "state": true
    },
    {
      "id": crypto.randomUUID(),
      "object": "25/12/2022 Noël",
      "state": true
    }
  ]);
  const newObject = {
    "id": "",
    "object": "",
    "state": ""
  };
  const [add, setAdd] = useState(false);

  const [selectedObject, setSelectedObject] = useState({
    "id": "",
    "object": "",
    "state": ""
  });




  function handleInput(e) {
    //console.log(e.target.value);
    if (e.target.value === "") {
      return;
    } else {
      newObject.object = e.target.value;
    }


  }
  function AddObject() {
    if (newObject.object == "") {
      return;
    } else {
      setAdd(!add);
      newObject.id = crypto.randomUUID();
      newObject.state = true;
      //console.log(newObject);
      //console.log(add);
      setList([...list, newObject]);
    }
  }
  function showAddButton() {
    setAdd(!add);
  }

  function getObject(object) {
    //console.log(object);
    setSelectedObject(object);
    //console.log(newObject);
  }
  function deleteObject(id) {
    //console.log(id);
    setList(
      list.filter(object => object.id != id)
    );
  }
  function updateObject(id) {
    //console.log(id);
    if (newObject.object == "") {
      return;
    }else{

      setList (list.map(m => {
        if (m.id == id) {
          m.object = newObject.object;
          m.state = true;
        };
        return m;
      }));
    }
  }


  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="row text-center mt-3">
          <h1 className='text-light'>My ToDoList</h1>
        </div>
        <Addobject add={add} handleInput={(e) => handleInput(e)} showAddButton={() => showAddButton()} AddObject={() => AddObject()} />
        <div className="row w-50" >
          <table className='table'>
            <thead>
              <tr>
                <th>State</th>
                <th>Object</th>
              </tr></thead>
          </table>
        </div>
        <div id='tableContainer' className="row w-50"  >
          <table className='table table-striped table-hover'>
            <tbody>
              {list.map(todo => (
                <Todorow key={todo.id} getObject={() => getObject(todo)} todo={todo} setList={() => setList([...list])} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal selectedObject={selectedObject} deleteObject={() => deleteObject(selectedObject.id)} updateObject={() => updateObject(selectedObject.id)} handleInput={(e) => handleInput(e)} />
    </>
  );
}