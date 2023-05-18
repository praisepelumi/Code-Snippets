import React, { useState, useEffect } from 'react';
import SnippetDisplay from '../../components/SnippetDisplay/SnippetDisplay.jsx';
import AddSnippet from '../../components/AddSnippet/AddSnippet.jsx';
import styles from './Sidebar.module.scss';
import SnippetsRadioList from './SnippetsRadioList/SnippetsRadioList.jsx';
import { Card, Spinner } from 'react-bootstrap';
import arrow from '../../assets/arrow.png';
import img from '../../assets/star nose mole.jpeg';
import {useDispatch, useSelector} from 'react-redux';
import { setLoading, setSnippets } from '../../../store/appSlice.js';

const Sidebar = () => {
  const [selectedSnippet, setSelectedSnippet] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.appSlice.loading);
  const snippets = useSelector(state => state.appSlice.snippets);

 
  // renderTags function
  const renderTabs = () => {
    const tabs = [];

    for (let i = 0; i < snippets.length; i++) {
      tabs.push(<button className={styles.tab}>{snippets[i].title}</button>);
    }

    return tabs;
  };

  // wrapper to send to our snippets radio list for updating selected snippet. probably not 100% needed, but want to be able to console log from Sidebar
  const setSelectedSnippetWrapper = (e) => {
    setSelectedSnippet(e);
  };


  const toggleSidebar = () => {
    setCollapse(() => !collapse);
  };

  // const [testState, setTestState] = useState([]);

  // return (
  //   <div>
  //     <button onClick={() => setTestState([...testState, <h1>hello</h1>])}>CLICK ME</button>
  //     {testState}
  //   </div>
  //   )

  // return (
  //   <div>
  //     <button onClick={() => setTestState([...testState, 'hello'])}>CLICK ME</button>
  //     {testState.map((el) => {
  //       return <h1>{el}</h1>;
  //     })}
  //   </div>
  //   )

  // let x = []
  // for(let i=0; i<testState.length; i++) {
  //   x.push(<h1>{testState[i]}</h1>)
  // }

  // return (
  //   <div>
  //     <button onClick={() => setTestState([...testState, 'hello'])}>CLICK ME</button>
  //     {x}
  //   </div>
  //   )

  return (

    <>
      <Card className={`pt-0 ${styles.sidebar} ${!collapse && styles.open}`}>
        <Card.Header>
          <h1>Code Snippets</h1>
          <button className={styles.toggleButton} onClick={toggleSidebar}>
            <img className={`${styles.arrow} ${!collapse && styles.arrowOpen}`} src={arrow} alt='arrow' />
          </button>
        </Card.Header>
        <Card.Body className='px-0 pt-0'>
          <div className={styles.cardBody}>
            {/* render our snippet list, pass down snippets and function to update selectedSnippet */}
            {loading && (
              <div className='d-flex justify-content-center pt-3'>
                <Spinner animation='border' role='status' variant='primary'></Spinner>
              </div>
            )}
            <SnippetsRadioList snippets={snippets} setSelectedSnippetWrapper={setSelectedSnippetWrapper} />
          </div>
        </Card.Body>

        <h2 className={styles.imgHeader} style={{ display: 'inline-block' }}>
          Click me to add a new snippet!
        </h2>
        <button
          className={styles.addButton}
          onClick={() => {
            setOpenModal(true);
          }}>
          <img src={img} alt='img' className={styles.img} />
        </button>
      </Card>
      {openModal && <AddSnippet closeModal={setOpenModal} />}
      <div className={`${styles.snippetDisplay} ${!collapse && styles.snippetDisplayOpen}`}>
        {snippets && <SnippetDisplay selectedSnippet={selectedSnippet} />}
      </div>
    </>
  );
};

export default Sidebar;
