import { currencyFormatter } from '@libs/utils';
import React from 'react';

const MovieInformation = ({ movieInfo = {} }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Title</p>
        <p>{movieInfo.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <p>
          {(movieInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/32x24/${countryCode.toLowerCase()}.png 2x,
                https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png 3x`}
              width="16"
              height="12"
              alt={countryCode}
              className="mt-1 mr-1"
            />
          ))}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{movieInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{currencyFormatter(movieInfo.budget)}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{currencyFormatter(movieInfo.revenue)}</p>
      </div>
    </div>
  );
};

export default MovieInformation;
