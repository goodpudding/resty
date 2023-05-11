import React, { Suspense } from 'react';
import './Results.scss';
import ReactJson from 'react-json-view'

function Results({data}){
    return (
      <section>
           <Suspense fallback={<Loading />}>
           {data ? <ReactJson src={data} theme="ashes" / > : null}
        </Suspense>
      </section>
    );
}
function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default Results;
