import PropTypes from 'prop-types';
import styles from './SnippetsRadioList.module.scss';
import { Fragment } from 'react';

function SnippetsRadioList({ snippets, setSelectedSnippet }) {
  // call passed in function on changed button, should find a way to do this without having to iterate through snippet array. store the snippet on the input itself somehow?
  // const onChangeValue = (e) => {
  //   if (!setSelectedSnippet) return;
  //   for (const el of snippets) {
  //     if (el.id !== undefined && el.id.toString() === e.target.value) setSelectedSnippet(el);
  //   }
  // };

  const toggleButtons = [];

  if (snippets) {
    snippets.forEach((el, i) => {
      const currButton =
        // i === 0 ? (
        //   <Fragment key={i}>
        //     <input
        //       name='snippetList'
        //       type='radio'
        //       id={`snippet-input-${i}`}
        //       value={el.id}
        //       defaultChecked
        //       key={`snippet-tag-${i}`}
        //       onClick={()=>{setSelectedSnippet(el)}}
        //     />
        //     <label htmlFor={`snippet-input-${i}`} key={`snippet-label-${i}`}>
        //       <div className={styles.labelHeader}>
        //         <h6>{el.title} </h6>
        //         <span>{el.language}</span>
        //       </div>
        //       <p className='text-truncate'>{el.storedCode}</p>
        //     </label>
        //     <hr />
        //   </Fragment>
        // ) : 
        (
          <Fragment key={i}>
            <input
              name='snippetList'
              type='radio'
              id={`snippet-input-${i}`}
              value={el._id}
              key={i}
              onClick={()=>{setSelectedSnippet(el)}}
            />
            <label htmlFor={`snippet-input-${i}`} key={`snippet-label-${i}`}>
              <div className={styles.labelHeader}>
                <h6>{el.title} </h6>
                <span>{el.language}</span>
              </div>
              <p className='text-truncate'>{el.storedCode}</p>
            </label>
            <hr />
          </Fragment>
        );

      toggleButtons.push(currButton);
    });
  }
  // onChange={(e) => onChangeValue(e)}
  return (
    <>
      <div className={`${styles.snippetGroup}`}>
        {toggleButtons}
        {/* {snippets.map((el, i) => {
          return i === 0 ? (
            <Fragment key={i}>
              <input
                name='snippetList'
                type='radio'
                id={`snippet-input-${i}`}
                value={el.id}
                defaultChecked
                key={`snippet-tag-${i}`}
              />
              <label htmlFor={`snippet-input-${i}`} key={`snippet-label-${i}`}>
                <div className={styles.labelHeader}>
                  <h6>{el.title} </h6>
                  <span>{el.language}</span>
                </div>
                <p className='text-truncate'>{el.storedCode}</p>
              </label>
              <hr />
            </Fragment>
          ) : (
            <Fragment key={i}>
              <input name='snippetList' type='radio' id={`snippet-input-${i}`} value={el.id} key={i} />
              <label htmlFor={`snippet-input-${i}`} key={`snippet-label-${i}`}>
                <div className={styles.labelHeader}>
                  <h6>{el.title} </h6>
                  <span>{el.language}</span>
                </div>
                <p className='text-truncate'>{el.storedCode}</p>
              </label>
              <hr />
            </Fragment>
          );
        })} */}
      </div>
    </>
  );
}

SnippetsRadioList.propTypes = {
  snippets: PropTypes.array,
  onChange: PropTypes.func,
};

export default SnippetsRadioList;
