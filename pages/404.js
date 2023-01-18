import React from 'react';
import Link from 'next/link';

function Custom404Page() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you requested could not be found.</p>
      <Link href="/">
        <a>Go back to the homepage</a>
      </Link>
      ;
    </div>
  );
}

export default Custom404Page;
