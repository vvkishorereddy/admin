import React, { Suspense } from "react";

import Loader from "../Components/Loader";

const WithSuspense = Component => {
  return props => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default WithSuspense;
