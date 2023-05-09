import React, { Suspense } from 'react';
import './Results.scss';

function Results({data}){
    return (
      <section>
           <Suspense fallback={<Loading />}>
        <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
        </Suspense>
      </section>
    );
}
function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default Results;
